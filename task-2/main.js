'use strict'

function inputShow(id_elem) {

    this.input = document.createElement('input'); // создали инпут
    this.btn = document.createElement('button'); // создали кнопку
    this.btnDel = document.createElement('button'); //создали кнопку удалить
    this.ul = document.createElement('ul'); // создали список

    this.input.type = 'text';  //указали тип инпута - текстовый

    this.btn.innerHTML = 'PUSH'; // название кнопки
    this.btn.type = 'button'; // тип кнопки - кнопка

    this.btnDel.innerHTML = 'DELETE'; // название кнопки удаления
    this.btnDel.type = 'button'; // тип кнопки - кнопка

    this.container = document.querySelector(id_elem); // выбираем все элементы что храняться по айдишнику

    this.container.appendChild(this.btn);  //выводим кнопку
    this.container.appendChild(this.input); //выводим инпут
   
    this.container.appendChild(this.btnDel); //выводим кнопку удаления
    this.container.appendChild(this.ul); //выводим список

    this.input.className = 'input';  // задаём инпуту класс

    this.btn.onclick = function () {  // по клику на кнопку задаём функцию-обработчик
        this.li = document.createElement('li'); // создаём лишку
        this.ul.appendChild(this.li); // выводим в список
        this.li.innerHTML = this.input.value; // в лишку записываем вводимое значение!
        this.input.value = ''; // вводимое значение пустое
        console.log(this);


        if ( this.li.innerHTML === '') {
            alert('Please, enter something value!');
             this.ul.removeChild(this.li);
        }; // условие пустого инпута 

        
    }.bind(this) 

    this.btnDel.onclick = function () {
        while (this.ul) {this.ul.removeChild(this.ul.lastChild)};
    }.bind(this)
}

new inputShow('#images-list');


