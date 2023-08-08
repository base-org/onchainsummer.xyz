const initCCA = () => {
    if (window.ClientAnalytics) {
        const {init, PlatformName, logPageView, identify} = window.ClientAnalytics;
        init({
            isProd: true,
            amplitudeApiKey: 'dad8b0d591535ebbdced770c09367478',
            platform: PlatformName.web,
            projectName: 'onchainsummer',
            showDebugLogging: false,
            version: '0.0.1',
            apiEndpoint: 'https://cca-lite.coinbase.com'
        });

        function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        const TWENTY_YEARS_AS_MS = 630_720_000_000;
        const COOKIE_DEVICE_ID = 'onchainsummer_device_id';
        function getDeviceId() {
            let id = getCookie(COOKIE_DEVICE_ID);
            if (!id) {
                id = crypto.randomUUID();
                const d = new Date();
                d.setTime(d.getTime() + TWENTY_YEARS_AS_MS);
                document.cookie = COOKIE_DEVICE_ID + "=" + id + ";expires=" + d.toUTCString() + ";path=/";
            }
            return id;
        }
        identify({ deviceId: getDeviceId() });

        function handleLocationChange() {
            logPageView();
        }

        // Attach the popstate event listener
        window.addEventListener('popstate', handleLocationChange);

        // capture first page
        handleLocationChange();
    }
};
initCCA();
