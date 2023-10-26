const initCCA = () => {
  if (window.ClientAnalytics) {
    const { init, PlatformName, logPageView, identify } = window.ClientAnalytics
    init({
      isProd: true,
      amplitudeApiKey: 'dad8b0d591535ebbdced770c09367478',
      platform: PlatformName.web,
      projectName: 'OnchainSummer',
      showDebugLogging: false,
      version: '0.0.1',
      apiEndpoint: 'https://cca-lite.coinbase.com',
    })

    identify({ deviceId: 'onchain_summer_device_id' })

    function handleLocationChange() {
      logPageView()
    }

    // Attach the popstate event listener
    window.addEventListener('popstate', handleLocationChange)

    // capture first page
    handleLocationChange()
  }
}
initCCA()
