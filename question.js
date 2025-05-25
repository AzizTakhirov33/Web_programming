

//Array of Objects

const quiz = [
    {
        q: "1. Что означает аббревиатура HTML?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language"],
        answer: 1
    },
    {
        q: "2. Какой тег используется для создания гиперссылки?",
        options: ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;", "&lt;url&gt;"],
        answer: 1
    },
    {
        q: "3. Какой тег используется для вставки изображения?",
        options: ["&lt;image&gt;", "&lt;pic&gt;", "&lt;img&gt;", "&lt;src&gt;"],
        answer: 2
    },
    {
        q: "4. Какой тег используется для наибольшего заголовка?",
        options: ["&lt;head&gt;", "&lt;h6&gt;", "&lt;h1&gt;", "&lt;header&gt;"],
        answer: 2
    },
    {
        q: "5. Где правильно указать путь к CSS-файлу во внешнем подключении?",
        options: ["Внутри тега &lt;body&gt;", "Внутри тега &lt;footer&gt;", "Внутри тега &lt;style&gt;", "Внутри тега &lt;head&gt;"],
        answer: 3
    },
    {
        q: "6. Какой атрибут тега <a> указывает адрес ссылки?",
        options: ["link", "href", "src", "target"],
        answer: 1
    },
    {
        q: "7. Какой тег используется для создания списка с маркерами?",
        options: ["&lt;ol&gt;", "&lt;ul&gt;", "&lt;list&gt;", "&lt;li&gt;"],
        answer: 1
    },
    {
        q: "8. Какой тег обозначает абзац?",
        options: ["&lt;para&gt;", "&lt;br&gt;", "&lt;p&gt;", "&lt;text&gt;"],
        answer: 2
    },
    {
        q: "9. Что делает тег <br>?",
        options: ["Жирный текст", "Добавляет отступ", "Создаёт новую строку", "Заканчивает HTML-документ"],
        answer: 2
    },
    {
        q: "10. Какой атрибут указывает альтернативный текст изображения?",
        options: ["alt", "src", "title", "description"],
        answer: 0
    },
    {
        q: "11. Какая структура HTML-документа правильная?",
        options: ["&lt;html&gt; &lt;body&gt; &lt;head&gt;", "&lt;head&gt; &lt;html&gt; &lt;body&gt;", "&lt;html&gt; &lt;head&gt; &lt;body&gt;", "&lt;body&gt; &lt;html&gt; &lt;head&gt;"],
        answer: 2
    },
    {
        q: "12. Какой тег используется для создания таблицы?",
        options: ["&lt;tbl&gt;", "&lt;table&gt;", "&lt;td&gt;", "&lt;form&gt;"],
        answer: 1
    },
    {
        q: "13. Какой тег используется для ввода текста пользователем?",
        options: ["&lt;input&gt;", "&lt;text&gt;", "&lt;form&gt;", "&lt;write&gt;"],
        answer: 0
    },
    {
        q: "14. Какой атрибут используется для объединения ячеек по горизонтали в таблице?",
        options: ["merge", "colspan", "rowspan", "align"],
        answer: 1
    },
    {
        q: "15. Какой тег используется для выделения текста курсивом?",
        options: ["&lt;strong&gt;", "&lt;i&gt;", "&lt;emph&gt;", "&lt;italic&gt;"],
        answer: 1
    },
    {
        q: "16. Что означает CSS?",
        options: ["Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Style Sheets"],
        answer: 3
    },
    {
        q: "17. Где в HTML-документе лучше всего подключать внешний CSS-файл?",
        options: ["Внутри &lt;footer&gt;", "Перед закрывающим тегом &lt;/html&gt;", "Внутри &lt;head&gt;", "Внутри &lt;body&gt;"],
        answer: 2
    },
    {
        q: "18. Какой тег HTML используется для подключения CSS-файла?",
        options: ["&lt;style&gt;", "&lt;css&gt;", "&lt;link&gt;", "&lt;script&gt;"],
        answer: 2
    },
    {
        q: "19. Какой атрибут используется в <link> для подключения CSS?",
        options: ["type", "src", "rel", "href"],
        answer: 3
    },
    {
        q: "20. Какой тип селектора выбирает элемент по ID?",
        options: [".", "#", "*", "@"],
        answer: 1
    },
    {
        q: "21. Какой селектор выбирает все элементы с классом 'menu'?",
        options: ["#menu", ".menu", "menu", "*menu"],
        answer: 1
    },
    {
        q: "22. Как задать фон для элемента?",
        options: ["bg-color: red;", "background: red;", "color: red;", "background-image: red;"],
        answer: 1
    },
    {
        q: "23. Какой код меняет цвет текста?",
        options: ["text-color: blue;", "font-color: blue;", "color: blue;", "background-color: blue;"],
        answer: 2
    },
    {
        q: "24. Как задать жирное начертание текста?",
        options: ["text-weight: bold;", "font-style: bold;", "font-weight: bold;", "weight: bold;"],
        answer: 2
    },
    {
        q: "25. Как задать отступ внутри элемента (внутренний отступ)?",
        options: ["margin", "padding", "spacing", "indent"],
        answer: 1
    },
    {
        q: "26. Какой код задаёт внешний отступ (наружный отступ)?",
        options: ["padding: 10px;", "border: 10px;", "margin: 10px;", "space: 10px;"],
        answer: 2
    },
    {
        q: "27. Как сделать текст курсивом?",
        options: ["font-style: italic;", "font-type: italic;", "text-style: italic;", "style: italic;"],
        answer: 0
    },
    {
        q: "28. Как задать ширину элемента?",
        options: ["length: 100px;", "size: 100px;", "width: 100px;", "height: 100px;"],
        answer: 2
    },
    {
        q: "29. Как задать высоту блока?",
        options: ["height: 200px;", "width: 200px;", "top: 200px;", "length: 200px;"],
        answer: 0
    },
    {
        q: "30. Как задать цвет фона с использованием HEX-кода?",
        options: ["background-color: rgb(255, 0, 0);", "background-color: red;", "background-color: #ff0000;", "bg-color: #ff0000;"],
        answer: 2
    },
    {
        q: "31. Как применить стили только к тегу &lt;p&gt;?",
        options: ["p {}", ".p {}", "#p {}", "*p {}"],
        answer: 0
    },
    {
        q: "32. Как сделать обводку вокруг элемента?",
        options: ["outline: 1px solid black;", "margin: 1px solid black;", "border: 1px solid black;", "stroke: 1px black;"],
        answer: 2
    },
    {
        q: "33. Какой селектор выберет все элементы на странице?",
        options: ["#", ".", "*", "all"],
        answer: 2
    },
    {
        q: "34. Как задать шрифт текста?",
        options: ["font-type: Arial;", "font: Arial;", "font-family: Arial;", "text-font: Arial;"],
        answer: 2
    },
    {
        q: "35. Как задать несколько стилей одновременно?",
        options: ["В отдельных &lt;style&gt;", "С помощью and", "Через запятую", "Через точку с запятой"],
        answer: 3
    },
    {
        q: "36. Что делает свойство display: none;?",
        options: ["Скрывает элемент", "Удаляет элемент из DOM", "Делает элемент прозрачным", "Показывает элемент"],
        answer: 0
    },
    {
        q: "37. Как задать выравнивание текста по центру?",
        options: ["text-align: center;", "text-position: center;", "text-style: center;", "align: center;"],
        answer: 0
    },
    {
        q: "38. Какой параметр отвечает за прозрачность элемента?",
        options: ["opacity", "alpha", "visibility", "display"],
        answer: 0
    },
    {
        q: "39. Что делает position: absolute;?",
        options: ["Фиксирует элемент при прокрутке", "Позиционирует элемент относительно родителя", "Прячет элемент", "Делает элемент статичным"],
        answer: 1
    },
    {
        q: "40. Как задать скругление углов элемента?",
        options: ["corner-radius", "radius", "border-radius", "round-border"],
        answer: 2
    },
    {
        q: "41. Как применить тень к тексту?",
        options: ["text-shadow", "shadow-text", "font-shadow", "text-blur"],
        answer: 0
    },
    {
        q: "42. Что делает свойство z-index?",
        options: ["Устанавливает отступ сверху", "Определяет порядок наложения", "Центрирует элемент", "Убирает элемент"],
        answer: 1
    },
    {
        q: "43. Как скрыть элемент, но сохранить его в документе?",
        options: ["display: none;", "visibility: hidden;", "opacity: 0;", "z-index: -1;"],
        answer: 1
    },
    {
        q: "44. Как изменить стиль при наведении курсора?",
        options: ["hover:", ":hover", "onhover", "hovering:"],
        answer: 1
    },
    {
        q: "45. Как сделать элемент блочным?",
        options: ["display: inline;", "display: block;", "position: block;", "float: block;"],
        answer: 1
    },
    {
        q: "46. Что такое JavaScript?",
        options: ["Язык разметки", "Стилизующий язык", "Язык программирования", "База данных"],
        answer: 2
    },
    {
        q: "47. Где правильно вставлять JavaScript-код в HTML?",
        options: ["Внутри &lt;js&gt;", "Внутри &lt;head&gt; или &lt;body&gt; в теге &lt;script&gt;", "Внутри &lt;style&gt;", "После &lt;/html&gt;"],
        answer: 1
    },
    {
        q: "48. Какой тег используется для подключения JavaScript?",
        options: ["&lt;js&gt;", "&lt;javascript&gt;", "&lt;script&gt;", "&lt;code&gt;"],
        answer: 2
    },
    {
        q: "49. Как вывести сообщение в окно alert?",
        options: ["msg(\"Hello\");", "popup(\"Hello\");", "alert(\"Hello\");", "message(\"Hello\");"],
        answer: 2
    },
    {
        q: "50. Как объявить переменную в ES6?",
        options: ["variable x = 5;", "v x = 5;", "var x = 5;", "let x = 5;"],
        answer: 3
    },
    {
        q: "51. Какой оператор используется для присваивания?",
        options: ["==", "=", "===", ":="],
        answer: 1
    },
    {
        q: "52. Что делает оператор ===?",
        options: ["Сравнивает значения и типы", "Сравнивает только значения", "Присваивает значение", "Сравнивает строки"],
        answer: 0
    },
    {
        q: "53. Какой результат выполнения typeof null?",
        options: ["\"object\"", "\"null\"", "\"undefined\"", "\"boolean\""],
        answer: 0
    },
    {
        q: "54. Какой результат typeof NaN?",
        options: ["\"number\"", "\"NaN\"", "\"undefined\"", "\"object\""],
        answer: 0
    },
    {
        q: "55. Как вызвать функцию по имени greet?",
        options: ["call greet;", "greet;", "greet();", "run(greet);"],
        answer: 2
    },
    {
        q: "56. Как записывается условие если a больше 10?",
        options: ["if a > 10", "if (a > 10)", "if > 10 (a)", "if a => 10"],
        answer: 1
    },
    {
        q: "57. Как создать массив?",
        options: ["let arr = {};", "let arr = () => {};", "let arr = [];", "let arr = &lt;&gt;;"],
        answer: 2
    },
    {
        q: "58. Как получить длину массива arr?",
        options: ["arr.size()", "arr.length", "arr.count()", "arr.length()"],
        answer: 1
    },
    {
        q: "59. Какой метод используется для добавления элемента в конец массива?",
        options: ["add()", "insert()", "push()", "append()"],
        answer: 2
    },
    {
        q: "60. Какой метод удаляет последний элемент массива?",
        options: ["pop()", "remove()", "deleteLast()", "shift()"],
        answer: 0
    },
     {
        q: "61. Что делает setTimeout()?",
        options: [
            "Выполняет функцию каждую секунду",
            "Выполняет функцию немедленно",
            "Выполняет функцию один раз через заданное время",
            "Отменяет выполнение кода"
        ],
        answer: 2
    },
    {
        q: "62. Какое значение вернёт Boolean(0)?",
        options: ["true", "false", "null", "undefined"],
        answer: 1
    },
    {
        q: "63. Какой тип данных у значения true?",
        options: ["number", "boolean", "string", "object"],
        answer: 1
    },
    {
        q: "64. Что такое DOM?",
        options: ["База данных", "Модель стилей", "Документ-объектная модель", "Объект браузера"],
        answer: 2
    },
    {
        q: "65. Как получить элемент по ID \"demo\" в JavaScript?",
        options: [
            "getElement(\"demo\")",
            "document.query(\"demo\")",
            "document.getElementById(\"demo\")",
            "window.demo.get()"
        ],
        answer: 2
    },
    {
        q: "66. Что такое Bootstrap?",
        options: [
            "Язык программирования",
            "Фреймворк для серверной части",
            "CSS-фреймворк для быстрой верстки",
            "Графический редактор"
        ],
        answer: 2
    },
    {
        q: "67. Какая команда подключает Bootstrap через CDN?",
        options: [
            "&lt;script src=\"bootstrap.css\"&gt;",
            "&lt;link href=\"https://cdn.jsdelivr.net/...bootstrap.min.css\" rel=\"stylesheet\"&gt;",
            "&lt;bootstrap src=\"cdn\"&gt;",
            "&lt;style src=\"bootstrap\"&gt;"
        ],
        answer: 1
    },
    {
        q: "68. Какой класс отвечает за создание сетки (grid) в Bootstrap?",
        options: [".container", ".grid", ".row", ".flex"],
        answer: 2
    },
    {
        q: "69. Какой класс используется для создания адаптивной сетки с 12 колонками?",
        options: [".col-md-12", ".grid-12", ".col-12", ".column-12"],
        answer: 2
    },
    {
        q: "70. Какой класс отвечает за выравнивание по центру по горизонтали?",
        options: [".text-center", ".center", ".align-center", ".text-align"],
        answer: 0
    },
    {
        q: "71. Какой класс делает элемент кнопкой?",
        options: [".clickable", ".btn", ".button", ".btn-default"],
        answer: 1
    },
    {
        q: "72. Какой класс Bootstrap задаёт синий цвет кнопки?",
        options: [".btn-blue", ".btn-primary", ".btn-info", ".btn-main"],
        answer: 1
    },
    {
        q: "73. Какой класс используется для создания адаптивного изображения?",
        options: [".img-auto", ".img-responsive", ".img-fluid", ".img-resize"],
        answer: 2
    },
    {
        q: "74. Какой класс задаёт отступ сверху?",
        options: [".padding-top", ".pt-*", ".mt-*", ".top-*"],
        answer: 1
    },
    {
        q: "75. Какой класс используется для скрытия элемента на мобильных устройствах?",
        options: [".d-none d-sm-block", ".hide-mobile", ".invisible-xs", ".hidden-sm"],
        answer: 0
    },
    {
        q: "76. Какой класс выравнивает блок по центру с помощью Flexbox?",
        options: [".justify-center", ".justify-content-center", ".align-middle", ".flex-center"],
        answer: 1
    },
    {
        q: "77. Какой класс задаёт фон в тоне «успех» (зелёный)?",
        options: [".bg-green", ".bg-success", ".bg-primary", ".bg-pass"],
        answer: 1
    },
    {
        q: "78. Какой класс задаёт белый текст?",
        options: [".text-white", ".color-white", ".text-light", ".white-text"],
        answer: 0
    },
    {
        q: "79. Как задать автоматическое выравнивание по ширине?",
        options: [".w-100", ".w-auto", ".width-full", ".flex-width"],
        answer: 1
    },
    {
        q: "80. Какой класс делает элемент видимым только на больших экранах?",
        options: [".d-md-block d-none", ".d-lg-block d-none", ".visible-lg", ".lg-visible"],
        answer: 1
    }
]
