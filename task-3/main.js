'use strict';

var array_Colors = ['silver', 'red', 'green', 'yellow', 'black', 'orange','purple' , 'pink', 'brown', 'grey', 'white', 'blue' ];

function showColor (colors, nameId) { // функция-обработчик цветов фона
    
    var i = 0;

    this.container = document.getElementById(nameId);
    this.container.style.background = colors[i];

    this.btnLeft = document.querySelector('.left'); 
    this.btnRight = document.querySelector('.right');

    this.btnRight.onclick = function () { // по клику вызываем обработчик кнопки 'right'
        this.container.style.background = colors[++i];
        if (i >= colors.length) {
            i = 0;
            this.container.style.background = colors[i];
        }
    }.bind(this);

    this.btnLeft.onclick = function () { // по клику вызываем обработчик кнопки 'left'
        this.container.style.background = colors[--i];
        if (i < 0) {
            i = colors.length - 1;
            this.container.style.background = colors[i];
        }
    }.bind(this);
}

new showColor (array_Colors, 'div-1');

