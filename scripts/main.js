$(document).ready(function () {
    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $('.product-popup-link').magnificPopup({
        type: 'image'
    });

    $("#accordion").accordion({
        collapsible: true
    });

    $('.carousel-items').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });


    $('#inputIndex').keydown((event) => {
        if (isNaN(parseInt(event.key))) {
            return false;
        }
    })


    $('.order__form button').on('click', function () {
        let result = 1;
        $('.order__form input').each(function () {
            if (!$(this).val()) {
                alert('Заполните поле ' + $(this).siblings('label').text());
                $(this).focus(); // после алерта поле с ошибкой получает фокус для внесения правок
                result = 0;
                return false;
            }
            if ($(this).siblings('label').text() === 'Индекс' && $(this).val().length !== 6) {
                alert('Индекс должен содержать 6 символов');
                $(this).focus(); // после алерта поле с ошибкой получает фокус для внесения правок
                result = 0;
                return false;
            }
        });
        if (result === 1) {
            $('.order__form').html('<div>Спасибо за заказ. Мы свяжемся с вами в ближайшее время!</div>');
            $('.order__form div').css({
                fontSize: '32px',
                fontWeight: 'bold',
                textAlign: 'center',
                paddingTop: '30px'
            });
        }
    });
})




