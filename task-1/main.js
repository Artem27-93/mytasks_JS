'use strict'

var names = ['vasa', 'pitya', 'anya', 'vera', 'alex','artem','victor','ernesto'];


function showList(arr, id_name) {   // функция с аргументами: получает массив и выводит в <ul>
    this.arr = arr;   // в пустой обьект записываем свойство arr и присваиваем массив
    this.id_name = id_name;  // в пустой обьект записываем свойство id_name и присваиваем #textList
    this.container = document.querySelector(id_name);  // переменная conteiner в которой ищем элемент из 'id_name'
    // console.log(this); //выводим в консоль ссылку на обьект 'this'

    for (var name of arr) { // цикл, перебираем массив по значениям 

        this.li = document.createElement('li'); // создаём тег <li></li>
        this.li.innerHTML = name; // добавляем в тег текстовое значение
        this.container.appendChild(this.li); // выводим на страницу браузера тег 'li'
        

        this.li.onclick = function () { // по клику на тег <li> срабатывает обработчик 
            alert(`Привет, я: ${this.innerHTML}`); // вывыодит сообщение с именем указанным в каждом теге
        };
    }
}

new showList(names, '#textList');


