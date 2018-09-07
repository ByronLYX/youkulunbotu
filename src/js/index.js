var oLi = $('.wrapper .move');
var index = 0;
var timer = null;
var flag = true;

function init() {
    oLi.css({ 'left': '800px', 'z-index': '1', 'top': '50%', 'height': '0px', 'margin-top': '0px' });
    oLi.eq(0).css({ 'top': '50%', 'margin-top': '-90px', 'height': '180px', 'width': '250px', 'left': '0px', 'opacity': '0.4', 'z-index': '1' });
    oLi.eq(1).css({ 'top': '0px', 'margin-top': '0px', 'height': '300px', 'width': '400px', 'left': '200px', 'opacity': '1', 'z-index': '100' });
    oLi.eq(2).css({ 'top': '50%', 'margin-top': '-90px', 'height': '180px', 'width': '250px', 'left': '550px', 'opacity': '0.4', 'z-index': '1' })
}

function leftMove() {
    oLi.css({ 'z-index': '1' });
    if (flag) {
        flag = false;
        oLi.css({ 'z-index': '1' });
        oLi.eq(index % 11).animate({
            'left': '-250px',
            'width': '250px',
            'height': '0',
            'top': '50%',
            'margin-top': '0',
            'opacity': '0'
        });
        oLi.eq((index + 1) % 11).animate({
            'left': '0',
            'width': '250px',
            'height': '180px',
            'top': '50%',
            'margin-top': '-90',
            'opacity': '0.4'
        });
        oLi.eq((index + 2) % 11).animate({
            'left': '200px',
            'width': '400px',
            'height': '300px',
            'top': '0px',
            'margin-top': '0px',
            'opacity': '1',
            'z-index': '100'
        });
        oLi.eq((index + 3) % 11).css({ 'left': '800px' });
        oLi.eq((index + 3) % 11).animate({
            'left': '550px',
            'width': '250px',
            'height': '180px',
            'top': '50%',
            'margin-top': '-90',
            'opacity': '0.4'
        }, function() {
            index++;
            flag = true;
        });
    }
    $('.span').eq()
}

function rightMove() {
    if (flag) {
        flag = false;
        oLi.css({ 'z-index': '1' });
        oLi.eq((index - 1) % 11).css({ 'left': '-250px' });
        oLi.eq((index - 1) % 11).animate({
            'left': '0',
            'width': '250px',
            'height': '180px',
            'top': '50%',
            'margin-top': '-90px',
            'opacity': '0.4'
        });
        oLi.eq((index) % 11).animate({
            'left': '200px',
            'width': '400px',
            'height': '300px',
            'top': '0',
            'margin-top': '0',
            'opacity': '1',
            'z-index': '100'
        });
        oLi.eq((index + 1) % 11).animate({
            'left': '550px',
            'width': '250px',
            'height': '180px',
            'top': '50%',
            'margin-top': '-90px',
            'opacity': '0.4'
        });
        oLi.eq((index + 2) % 11).animate({
            'left': '800px',
            'width': '250px',
            'height': '0px',
            'top': '50%',
            'margin-top': '0',
            'opacity': '0.4'
        }, function() {
            index--;
            flag = true;
        });
    }
}

function findIndex(direction) {
    prevIndex = activeIndex;
    if (direction == 'prev' || direction == 'next') {
        if (direction == 'prev') {
            activeIndex = activeIndex == 0 ? len - 1 : activeIndex - 1;
        } else {
            activeIndex = activeIndex == len - 1 ? 0 : activeIndex + 1;
        }
    } else {
        if (activeIndex != direction) {
            activeIndex = direction;
        }
    }
    console.log(activeIndex);
}

$('.leftBtn').on('click', function() {
    leftMove();
});

$('.rightBtn').on('click', function() {
    rightMove();
});

init();

timer = setInterval(leftMove, 1000);

$('.wrapper').on('mousemove', function() {
    clearInterval(timer);
})

$('.wrapper').on('mouseout', function() {
    timer = setInterval(leftMove, 1000);
})