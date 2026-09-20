// Auto-redirect mobile users to their platform's app store.
(function () {
    const APP_STORE_URL = 'https://apps.apple.com/app/id6762055449';
    const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.sundry.settlr';

    const ua = navigator.userAgent || navigator.vendor || window.opera || '';
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isAndroid = /android/i.test(ua);

    if (isIOS) {
        window.location.replace(APP_STORE_URL);
    } else if (isAndroid) {
        window.location.replace(PLAY_STORE_URL);
    }
    // Desktop: do nothing – let the page render normally.
})();
