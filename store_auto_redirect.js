// Auto-redirect mobile users to the appropriate app store.
// TODO: Replace the URLs below with real App Store / Play Store links when published.

const APP_STORE_URL = 'https://apps.apple.com/app/settlr/id000000000'; // TODO
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.sundry.settlr'; // TODO
const FALLBACK_URL = 'https://settlr.sundryapps.tech';

const ua = navigator.userAgent || navigator.vendor || window.opera;

if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    window.location.href = APP_STORE_URL;
} else if (/android/i.test(ua)) {
    window.location.href = PLAY_STORE_URL;
}
// Desktop: do nothing – let the page render normally.
