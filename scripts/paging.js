const $el = $(window);
var handled = false;
var counter = 0;

let lastY = $el.scrollTop();
    
$el.on('scroll', scrollSection);

$('#go').click(function() {
    const scrollToTop = $('main > section').eq(1).offset().top;

    $('html, body').stop().animate({
        scrollTop: scrollToTop
    }, 1250, function() {
        handled = false;
        counter = 0;
    });    
});

function scrollSection() {
    if($(window).width() < 1024) {
        return;
    }

    var elementIndex = 0;
    const $section = $('main > section');
    const limit = $section.length;
    const currY = $el.scrollTop();
    const y = (currY > lastY) ? 'down' : ((currY === lastY) ? 'none' : 'up');
    lastY = currY;

    if(handled === true) {
        return false;
    }

    if(counter <= 5) {
        counter++;
        return false;
    }

    handled = true;

    $section.each(function(i, e) {
        if($(e).hasClass('active')) {
            elementIndex = i;
        }
    });

    if(y === 'up' && (elementIndex - 1) >= 0) {
        elementIndex -= 1;        
    } else if(y === 'down' && (elementIndex + 1) !== limit) {
        elementIndex += 1;
    } else {
        handled = false;
        counter = 0;
        return;
    }

    $section.removeClass('active');
    $section.eq(elementIndex).addClass('active');   

    const scrollToTop = $($section.eq(elementIndex)).offset().top;

    $('html, body').stop().animate({
        scrollTop: scrollToTop
    }, 1250, function() {
        handled = false;
        counter = 0;
    });    
};

//Acessado em 01 julho 2020 19:49
//https://www.designcise.com/web/tutorial/how-to-determine-the-scroll-direction-using-jquery
//Adaptado por Weder Fabrício Lopes