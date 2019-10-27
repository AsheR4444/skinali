$(window).load(function() {
    $('.before-after').twentytwenty({
        before_label: 'Без скинали',
        after_label: 'Со скинали',
    });
    $('.before-slider').slick({
        draggable: false,
        dots:true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow_left'),
        nextArrow: $('.arrow_right')
    });
    $('.menu-button').on('click', function(){
        $('.menu').toggleClass('menu_active');
    });
    $('.select_checked').on('click', function(){
        $('.select__dropdown').toggleClass('select__dropdown_opened');
    });
    $('.select__option').on('click', function(){
        var value = $(this).attr('data-value');
        $('#select-type').val(value);
        $('.select_checked').text(value);
        $('.select__dropdown').toggleClass('select__dropdown_opened');
    });
    $("a[href^='#']").click(function(){
        var _href = $(this).attr('href');
        $('html, body').animate({scrollTop: $(_href).offset().top -330 +'px'});
        return false;
    })
    // Показывать карту только когда пользователь докрутил до данного раздела
    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll',function(){
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop){
            $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8031376f45306409070bc2915e7ade7d2e9e4a37f66dec005c98572afbba14db&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>')
            $(window).unbind('scroll')
        }
    });
});