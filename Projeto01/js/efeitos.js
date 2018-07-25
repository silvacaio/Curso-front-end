$(document).ready(function () {
    $("#logotipo").on("mouseover", function () {
        $("#banner h1").addClass("efeito");
    }).on("mouseout", function () {
        $("#banner h1").removeClass("efeito");
    });

    $("#input-search").on("focus", function () {
        $("li.search").addClass("ativo");
    }).on("blur", function () {
        $("li.search").removeClass("ativo");
    });

    const owl = $(".thumbnails").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: { //resolução
                items: 1 //quantidade de itens da resolução
            },
            480: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // const owl = $('.owl-carousel');
    // owl.owlCarousel();

    $("#btn-news-prev").on("click", function () {
        owl.trigger('prev.owl.carousel');
    });

    $("#btn-news-next").on("click", function () {
        owl.trigger('next.owl.carousel');
    })


});