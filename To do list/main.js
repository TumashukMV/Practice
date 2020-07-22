    
    var ul = document.querySelector("ul");
    var spans = document.getElementsByTagName("span");

    import { ulCall } from "./ul.js";
    import { callPencil } from "./pencil.js";
    import { inputCall } from "./input.js";
    import { clearBtnCall } from "./clearBtn.js";
    import { saveBtnCall } from "./saveBtn.js";
    import { closeBtnCall } from "./closeBtn.js";
    import { tipsBtnCall } from "./tipsBtn.js";

    closeBtnCall();
    tipsBtnCall();
    saveBtnCall();
    clearBtnCall();
    inputCall();
    ulCall();
    callPencil();
    //Delete todo if delete span clicked
    function deleteTodo(){
        for(let span of spans){
            span.addEventListener('click', function(){
                span.parentElement.remove();
            })
        }
    }

    function loadTodos(){
        if(localStorage.getItem("todoList")){
            ul.innerHTML = localStorage.getItem("todoList")
        }
    }



deleteTodo();
loadTodos();

const request = require ('request');

request.get(
"https://api.opendota.com/api/proMhttps://en.wikipedia.org/w/api.phpatches",
(data, err, body) => {
    let parseBody=JSON.parse(body);
    let arr =[];
    parseBody.forEach((elem) => {
    arr.push(elem.text);
    });

    arr.map((elem)=>{
    console.log('${elem}\n');
    });
}

);