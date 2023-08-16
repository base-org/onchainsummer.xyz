const AWS = require('aws-sdk');
const { google } = require('googleapis')

const s3bucket = process.env.S3_BUCKET;
const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

const S3 = new AWS.S3();
const drive = google.drive({ version: "v3", auth: apiKey })

const main = async () => {
    try {
        var params = {
            Bucket: s3bucket,
            MaxKeys: 1000
        };
        const s3Response = await S3.listObjectsV2(params).promise();
        const s3Contents = s3Response.Contents.map(file => file.Key);

        const driveResponse = await drive.files.list({
            maxResults: 1000,
            q: `'${folderId}' in parents`
        });
        let driveFiles = driveResponse.data.files.map(file => ({ id: file.id, name: file.name }));

        driveFiles = driveFiles.filter(file => {
            const found = s3Contents.indexOf(file.name) >= 0
            if (found) console.log("Ignoring", file.name);
            return !found;
        });

        for (const file of driveFiles) {
            console.log("Downloading", file.name);
            const fileResponse = await drive.files.get({
                fileId: file.id,
                alt: "media"
            });
            const arrayBuffer = await fileResponse.data.arrayBuffer();

            console.log("Uploading", file.name);
            let params = {
                Bucket: s3bucket,
                Key: file.name,
                Body: Buffer.from(arrayBuffer)
            };
            await S3.upload(params).promise();

            console.log("public-read", file.name);
            params = {
                Bucket: s3bucket,
                Key: file.name,
                ACL: "public-read"
            };
            await S3.putObjectAcl(params).promise();
        }
    } catch (err) {
        console.error(err);
    }
};

main();
