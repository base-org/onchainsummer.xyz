// @ts-check
const _ = require('lodash')
const { writeFile, readFile } = require('fs')
const { config } = require('dotenv')

config()

const filePath = './src/config/tweets.ts'
const prefix = 'export const tweets = '

const generateHighlightedTweets = async () => {
  const bearer_token = process.env.TWITTER_BEARER_TOKEN
  const tweetIds = ['1683992343479824386', '1683884817794969617']

  try {
    const fileContent = await new Promise((resolve, reject) =>
      readFile(filePath, 'utf8', (err, data) => {
        !!err ? reject(err) : resolve(JSON.parse(data.replace(prefix, '')))
      })
    )

    const tweets = _.get(fileContent, 'data', null)
    const savedTweetIds = _.map(tweets, ({ id }) => id)
    const hasChanged = tweetIds.some((id) => !savedTweetIds.includes(id))

    if (!hasChanged) {
      console.log('No changes made')
      return
    }
  } catch (ex) {}

  if (!bearer_token) throw new Error('TWITTER_BEARER_TOKEN is not defined')

  const params = new URLSearchParams()
  params.append('ids', tweetIds.join(','))
  params.append(
    'expansions',
    'attachments.poll_ids,attachments.media_keys,author_id,edit_history_tweet_ids,entities.mentions.username,geo.place_id,in_reply_to_user_id,referenced_tweets.id,referenced_tweets.id.author_id'
  )
  params.append(
    'media.fields',
    'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics,alt_text,variants'
  )
  params.append(
    'place.fields',
    'contained_within,country,country_code,full_name,geo,id,name,place_type'
  )
  params.append(
    'tweet.fields',
    'attachments,author_id,context_annotations,conversation_id,created_at,edit_controls,entities,geo,id,in_reply_to_user_id,lang,public_metrics,possibly_sensitive,referenced_tweets,reply_settings,source,text,withheld'
  )
  params.append(
    'user.fields',
    'created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,verified_type,withheld'
  )
  const response = await fetch(
    `https://api.twitter.com/2/tweets?${params.toString()}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        Authorization: `Bearer ${bearer_token}`,
      },
    }
  )
  const data = await response.json()
  const content = `${prefix} ${JSON.stringify(data)}`
  await new Promise((resolve, reject) =>
    writeFile(filePath, content, 'utf8', (err) =>
      !!err ? reject(err) : resolve({})
    )
  )
  console.log('Created tweets.ts file with new content')
}

generateHighlightedTweets()
