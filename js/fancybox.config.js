function fancybox(lazyloadT, auto_fancybox) {
    if (auto_fancybox) {
        $(".post__content").find('img').each(function () {
            var element = document.createElement("a");
            $(element).attr("data-fancybox", "gallery");
            $(element).attr("href", $(this).attr("src"));
            if (lazyloadT) {
                $(element).attr("href", $(this).attr("data-srcset"));
            }
            $(this).wrap(element);
        });
    } else {
        $(".post__content").find("fancybox").find('img').each(function () {
            var element = document.createElement("a");
            $(element).attr("data-fancybox", "gallery");
            $(element).attr("href", $(this).attr("src"));
            if (lazyloadT) {
                $(element).attr("href", $(this).attr("data-srcset"));
            }
            $(this).wrap(element);
        });
    }
}