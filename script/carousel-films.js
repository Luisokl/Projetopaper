// contagem da direção 

var num = 350;
var num2 = 350;

// botão direito 

var btnRight = document.getElementById('btn-right');

btnRight.addEventListener('click', () => {

    var limiter = document.getElementById('limiter').getBoundingClientRect().left;
    var roundLimiter = Math.round(limiter);

    var bottomRight = document.getElementById('btn-right').getBoundingClientRect().left;
    var roundBottomRight = Math.round(bottomRight);

    var containerFilms = document.getElementById('container-films');
    var carrouselFilms = document.getElementById('carousels-films');

    if (roundLimiter > roundBottomRight) {

        containerFilms.style.transform = 'translateX( -' +num+ 'px)';

        num = num + 350;
        num2 = num2 - 350;

    } else {

        var stop = roundBottomRight * containerFilms.clientWidth / 
        carrouselFilms.clientWidth - carrouselFilms.clientWidth + 350;

        var roundStop = Math.round(stop);

        containerFilms.style.transform = 'translateX(-' +roundStop+ 'px)';
    }
})