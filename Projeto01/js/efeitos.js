$(function () {   

    $("#input-search").on("focus", function () {
        $("li.search").addClass("ativo");
    }).on("blur", function () {
        $("li.search").removeClass("ativo");
    });

    // const owl = $(".thumbnails").owlCarousel({
        // loop: true,
        // margin: 10,
        // nav: false,
        // responsive: {
            // 0: { //resolução
                // items: 1 //quantidade de itens da resolução
            // },
            // 480: {
                // items: 3
            // },
            // 1000: {
                // items: 4
            // }
        // }
    // });

    $("#btn-news-prev").on("click", function () {
        owl.trigger('prev.owl.carousel');
    });

    $("#btn-news-next").on("click", function () {
        owl.trigger('next.owl.carousel');
    })

    $("#page-up").on("click", function (event) {

        $("html, body").animate({ scrollTop: 0 }, 1000);

        event.preventDefault();
    })

    $("#btn-bars").on("click", function () {
        $("header").toggleClass("open-menu");
    });

    $("#menu-mobile-mask, .btn-close").on("click", function () {
        $("header").removeClass("open-menu");
    });

    $("#btn-search").on("click", function () {
        $("header").toggleClass("open-search");
        $("#input-search-mobile").focus();
    });
});