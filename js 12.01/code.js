
// 2 1
// function changeSize() {
//     let elem = document.getElementById("elem");
//     elem.style.width = "400px";
//     elem.style.height = "300px";
// }

// 2 2
// function getDimensions() {
//     let elem = document.getElementById("elem");
//     let width = elem.offsetWidth;
//     let height = elem.offsetHeight;
//     alert("Ширина: " + width + ", Высота: " + height);
// }

// 2 3
// function getFontSize() {
//     let elem = document.getElementById("elem");
//     let fontSize = window.getComputedStyle(elem).getPropertyValue("font-size");
//     fontSize = parseFloat(fontSize);
//     alert("Размер шрифта: " + fontSize);
// }

// 3 1
// Ошибка в коде заключается в том, что свойство elem.style.fontSize возвращает строку, а не числовое значение. При попытке выполнить операцию сложения elem.style.fontSize + 2, происходит конкатенация строк, а не сложение чисел.
// Чтобы исправить ошибку, нужно преобразовать значение elem.style.fontSize из строки в число, выполнить операцию сложения и присвоить результат обратно свойству elem.style.fontSize.

// 3 2
// Ошибка в коде заключается в том, что свойство elem.style.fontSize возвращает строку, а не числовое значение. При попытке выполнить операцию сложения elem.style.fontSize + 2, происходит конкатенация строк, а не сложение чисел.
// Кроме того, в данном коде используется функция parseInt, которая преобразует строку в целое число. Однако, в данном случае, значение elem.style.fontSize уже является числом с единицами измерения (например, "16px"), поэтому использование parseInt не имеет смысла и может привести к некорректным результатам.
// Чтобы исправить ошибку, нужно выполнить следующие действия:
// 1. Извлечь числовое значение из строки elem.style.fontSize, удалив единицы измерения "px". Для этого можно использовать метод parseFloat.
// 2. Выполнить операцию сложения числа с 2.
// 3. Присвоить полученное значение обратно свойству elem.style.fontSize.

// 3 3
// Ошибка в коде заключается в том, что свойство elem.style.fontSize возвращает строку, а не числовое значение. При попытке выполнить операцию сложения parseInt(elem.style.fontSize) + 2, происходит конкатенация строк, а не сложение чисел.
// Кроме того, в данном коде используется функция parseInt, которая преобразует строку в целое число. Однако, в данном случае, значение elem.style.fontSize уже является числом с единицами измерения (например, "2.5em"), поэтому использование parseInt не имеет смысла и может привести к некорректным результатам.
// Чтобы исправить ошибку, нужно выполнить следующие действия:
// 1. Извлечь числовое значение из строки elem.style.fontSize, удалив единицы измерения "em". Для этого можно использовать метод parseFloat.
// 2. Выполнить операцию сложения числа с 2.
// 3. Присвоить полученное значение обратно свойству elem.style.fontSize.

// 3 4
// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//     let width = parseInt(elem.style.width) + 50;
//     let height = parseInt(elem.style.height) + 50;
//     elem.style.width = width + 'px';
//     elem.style.height = height + 'px';
// });

// 3 5
// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//   let width = parseInt(elem.style.width);
//   let height = parseInt(elem.style.height);
//   width *= 1.1;
//   height *= 1.1;
//   elem.style.width = width + 'px';
//   elem.style.height = height + 'px';
// });

// 4 1
// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//     let borderStyle = elem.style.border;
//     let borderWidth = parseInt(elem.style.borderWidth);
//     let borderColor = elem.style.borderColor;
//     console.log('Толщина границы:', borderWidth);
//     console.log('Тип границы:', borderStyle);
//     console.log('Цвет границы:', borderColor);
// });

// 5 1
// let elem = document.getElementById('elem');
// let hideBtn = document.getElementById('hideBtn');
// let showBtn = document.getElementById('showBtn');
// hideBtn.addEventListener('click', function() {
//     elem.style.display = 'none';
// });
// showBtn.addEventListener('click', function() {
//     elem.style.display = 'block';
// });

// 5 2
// let elem = document.getElementById('elem');
// let redBtn = document.getElementById('redBtn');
// let resetBtn = document.getElementById('resetBtn');
// redBtn.addEventListener('click', function() {
//     elem.style.backgroundColor = 'red';
// });
// resetBtn.addEventListener('click', function() {
//     elem.style.backgroundColor = '';
// });

// 6 1 ////
// document.getElementById('borderButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     elem.style.cssText = 
//         width: 100px;
//         height: 100px;
//         margin: 10px auto;
//         color: red;
//     ;
//     let computedStyle = window.getComputedStyle(elem, null);
//     let borderStyle = computedStyle.getPropertyValue('border-style');
//     let borderColor = computedStyle.getPropertyValue('border-color');
//     let borderWidth = computedStyle.getPropertyValue('border-width');
//     alert('Border Style: ' + borderStyle + '\nBorder Color: ' + borderColor + '\nBorder Width: ' + borderWidth);
// });

// 8 1 //
// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//     let width = elem.offsetWidth;
//     let height = elem.offsetHeight;
//     console.log('Ширина:', width);
//     console.log('Высота:', height);
// });

// 8 2
// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//     let width = elem.offsetWidth * 2;
//     let height = elem.offsetHeight * 2;
//     elem.style.width = width + 'px';
//     elem.style.height = height + 'px';
// });

// 9 1 //
// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//     let fontSize = parseInt(getComputedStyle(elem).fontSize);
//     console.log('Размер шрифта:', fontSize);
// });

// 10 1
// let paragraphs = document.getElementsByTagName('p');
// for (let i = 0; i < paragraphs.length; i++) {
//     let number = parseInt(paragraphs[i].textContent);
//     if (number % 2 === 0) {
//         paragraphs[i].style.color = 'red';
//     } else {
//         paragraphs[i].style.color = 'green';
//     }
// }

// 11 1
// let elem = document.getElementById('elem');
// elem.addEventListener('click', function() {
//     if (elem.style.color === 'red') {
//         elem.style.color = 'black';
//     } else {
//         elem.style.color = 'red';
//     }
// });

// 12 1
// let input = document.getElementById('input');
// input.addEventListener('blur', function() {
//     let value = input.value;
//     if (value.length <= 9) {
//         input.style.border = '2px solid green';
//     } else {
//         input.style.border = '2px solid red';
//     }
// });

// 13 1
// let input = document.getElementById('input');
// input.addEventListener('blur', function() {
//   let value = parseInt(input.value);
//   if (value < 10) {
//     input.style.border = '2px solid green';
//   } else if (value >= 10 && value <= 20) {
//     input.style.border = '2px solid yellow';
//   } else {
//     input.style.border = '2px solid red';
//   }
// });

// 15 1 16 1 17 1 18 1
// let elem = document.querySelector('#elem');
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//     console.log(elem.clientWidth);
//     console.log(elem.clientHeight);
//     console.log(elem.offsetWidth);
//     console.log(elem.offsetHeight);
//     console.log(elem.scrollWidth);
//     console.log(elem.scrollHeight);
// });
// 17 2
// button.addEventListener("click", function() {
//     console.log(elem.offsetWidt - elem.clientWidth);
//     console.log(elem.offsetHeight - elem.clientHeight);
// });
// 18 2
// button.addEventListener("click", function() {
//     console.log(elem.scrollWidth - elem.offsetWidth);
//     console.log(elem.scrollHeight - elem.offsetHeight);
// });
// 19 1 19 3
// function getTotalScrollHeight() {
//     return elem.scrollHeight;
// }
// button.addEventListener("click", function() {
//     console.log(getTotalScrollHeight());
// });
// 19 2
// button.addEventListener("click", function() {
//     if (elem.scrollTop > 0) {
//         console.log("прокручен");
//     } else {
//         console.log("не прокручен");
//     }
// });
// 19 4
// function getTotalScrollHeight() {
//     return elem.scrollHeight;
// }
// button.addEventListener("click", function() {
//     console.log(elem.scrollHeight - getTotalScrollHeight());
// });
// 19 5
// function getTotalScrollHeight() {
//     return elem.scrollHeight;
// }
// button.addEventListener("click", function() {
//     console.log(elem.scrollHeight - (elem.offsetHeight + getTotalScrollHeight()));
// });
// 20 1
// button.addEventListener("click", function() {
//     elem.scrollTop = 100;
//     elem.scrollLeft = 50;
// });
// 20 2
// button.addEventListener("click", function() {
//     elem.scrollTop = elem.scrollTop + 50;
// });
// 20 3
// button.addEventListener("click", function() {
//     elem.scrollTop = elem.scrollTop - elem.scrollTop;
// });
// 20 4
// button.addEventListener("click", function() {
//     element.scrollTop = element.scrollHeight;
// });
// 21 1
// button.addEventListener("click", function() {
//     elem.scrollTop = elem.scrollHeight - elem.clientHeight;
// });
// 21 2
// button.addEventListener("click", function() {
// if (isScrolledToBottom) {
//     console.log("прокручен до конца по вертикали");
// } else {
//     console.log("не прокручен до конца по вертикали");
// }
// 22 1
// button.addEventListener("click", function() {
//     elem.style.height = elem.scrollHeight + 'px';
// });

// 24 1
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//     let windowWidth = window.innerWidth;
//     let windowHeight = window.innerHeight;
//     console.log("Ширина: " + windowWidth + "px");
//     console.log("Высота: " + windowHeight + "px");
// });
// 24 2
// button.addEventListener("click", function() {
//     let hasVerticalScrollbar = document.documentElement.scrollHeight > window.innerHeight;
//     console.log("Вертикальная прокрутка: " + (hasVerticalScrollbar ? "есть" : "нет"));
// });
// 24 3
// button.addEventListener("click", function() {
//     let hasHorizontalScrollbar = document.documentElement.scrollWidth > window.innerWidth;
//     console.log("Горизонтальная прокрутка: " + (hasHorizontalScrollbar ? "есть" : "нет"));
// });
// 25 1
// button.addEventListener("click", function() {
//     let scrolledHeight = window.pageYOffset;
//     let windowHeight = window.innerHeight;
//     let totalHeight = document.documentElement.scrollHeight;
//     let visibleHeight = windowHeight + scrolledHeight;
//     console.log("Высота с учетом прокрученной части: " + visibleHeight + "px");
// });
// 25 2
// button.addEventListener("click", function() {
//   let scrolledWidth = window.pageXOffset;
//   let windowWidth = window.innerWidth;
//   let totalWidth = document.documentElement.scrollWidth;
//   let visibleWidth = windowWidth + scrolledWidth;
//   console.log("Ширина с учетом прокрученной части: " + visibleWidth + "px");
// });
// 25 3
// button.addEventListener("click", function() {
//     let hiddenHeight = document.documentElement.scrollHeight - window.innerHeight;
//     console.log("Высота спрятанной под прокруткой части: " + hiddenHeight + "px");
// });
// 26 1
// button.addEventListener("click", function() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     console.log("Значение прокрутки по вертикали: " + scrollTop + "px");
// });
// 26 2
// button.addEventListener("click", function() {
//     let remainingScroll = document.documentElement.scrollHeight - window.innerHeight - window.pageYOffset;
//     console.log("Оставшаяся прокрутка по вертикали: " + remainingScroll + "px");
// });
// 27 1
// button.addEventListener("click", function() {
//     window.scrollTo(0, 300);
// });
// 27 2
// button.addEventListener("click", function() {
//     window.scrollTo(0, document.documentElement.scrollHeight - window.innerHeight - 100);
// });
// 27 3
// button.addEventListener("click", function() {
//     window.scrollTo(0, 0);
// });
// 27 4
// button.addEventListener("click", function() {
//     window.scrollTo(0, document.documentElement.scrollHeight);
// });
// 28 1
// button.addEventListener("click", function() {
//     window.scrollBy(0, -300);
//  });
// 28 2
// button.addEventListener("click", function() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// });
// 28 3
// button.addEventListener("click", function() {
//     window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: "smooth"
//     });
// });
// 29 1
// button.addEventListener("click", function() {
//     window.scrollBy(0, 100);
// });
// 29 2
// button.addEventListener("click", function() {
//     window.scrollBy(0, -100);
// });
// 29 3
// button.addEventListener("click", function() {
//     window.scrollTo({
//         top: window.pageYOffset + 300,
//         behavior: "smooth"
//     });
// });
// 29 4
// button.addEventListener("click", function() {
//     window.scrollTo({
//         top: window.pageYOffset - 300,
//         behavior: "smooth"
//     });
// });

// 30 1
// let button1 = document.getElementById("button1");
// let button2 = document.getElementById("button2");
// let button3 = document.getElementById("button3");
// let elem = document.getElementById("elem");
// button1.addEventListener("click", function() {
//     elem.scrollIntoView();
// });
// button2.addEventListener("click", function() {
//     elem.scrollIntoView({ behavior: "smooth" });
// });
// button3.addEventListener("click", function() {
//     elem.scrollIntoView({ behavior: "smooth", block: "start" });
// });

// 31 1
// let button = document.getElementById("button");
// window.addEventListener("scroll", function() {
//     let scrolledHeight = window.pageYOffset;
//     let windowHeight = window.innerHeight;
//     let totalHeight = document.documentElement.scrollHeight;
//     if (scrolledHeight + windowHeight >= totalHeight) {
//         console.log("Достигнут конец страницы");
//     }
// });
