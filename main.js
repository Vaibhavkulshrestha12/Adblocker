const defaultFilters = [
    "*://*.doubleclick.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
];

const popUpFilters = [
    "*://*.hootsuite.com/*",
    "*://*.optinmonster.com/*",
    "*://*.wppopupmaker.com/*",
];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return { cancel: true };
    },
    { urls: defaultFilters },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return { cancel: true };
    },
    { urls: popUpFilters },
    ["blocking"]
);

chrome.windows.onCreated.addListener(function(window) {
    if (window.type === 'popup') {
        chrome.windows.remove(window.id);
    }
});
