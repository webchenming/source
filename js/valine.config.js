function valine(url, param) {
    var runningOnBrowser = typeof window !== "undefined";
    var isBot = runningOnBrowser && !("onscroll" in window) || typeof navigator !== "undefined" && /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent);
    var supportsIntersectionObserver = runningOnBrowser && "IntersectionObserver" in window;
    setTimeout(function () {
        if (!isBot && supportsIntersectionObserver) {
            var comment_observer = new IntersectionObserver(function (entries) {
                if (entries[0].isIntersecting) {
                    loadComment();
                    comment_observer.disconnect();
                }
            }, { threshold: [0] });
            comment_observer.observe(document.getElementById('comment'));
        } else {
            loadComment();
        }
    }, 1);
    function loadComment() {
        let e = document.createElement("script");
        e.src = url, document.body.appendChild(e);
        e.onload = () => {
            var valineConfig = param;
            valineConfig.el = '#valine_container';
            for (var i in valineConfig) {
                if (valineConfig[i] === null) delete valineConfig[i];
            }
            new Valine(valineConfig);
        };
    }
}