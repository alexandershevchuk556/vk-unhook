const newsUrl = ['/feed', '/al_feed.php'];
const newsTabId = 'l_nwsf';

if (newsUrl.includes(window.location.pathname)) {
    window.location.replace('/im');
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        document.getElementById(newsTabId).remove();
    }
}
