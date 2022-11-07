let myList = document.querySelector('#myList');


class TodoList{
    constructor(element){
        this.listElement = element;
        this.textList = [];
    }

    static createListItem(text){
            let li = document.createElement('li'); 
            li.innerHTML = text;
            let bouton = document.createElement("button");
            bouton.innerHTML = 'X';
            bouton.className = "suppr";
            li.append(bouton)
            // span.className = "close";

            return li;
        }


    update(){
        let allLi = document.querySelectorAll('li');

        allLi.forEach(tagLi => tagLi.remove());
        this.textList.forEach(el => {
            this.listElement.append(TodoList.createListItem(el));
           
        });


        
    }

    add(text){
        this.textList.push(text);
        this.update();
    }

    remove(index){
        this.textList.splice(index, 1);
        this.update();
    }
}

const todoApp = new TodoList(myList);

let myInput = document.querySelector('#myInput');
let addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click', function (events) {
    events.preventDefault();
    
    todoApp.add(myInput.value)
    myInput.value = ''
})







document.addEventListener('click', function (e) {
    let text = e.target.parentElement.innerHTML;
    let arr = text.split('<');
    let liText = arr[0];
    console.log(arr);
    console.log(liText);

    todoApp.textList.forEach(function (el, i) {
        if (el === liText) {
            todoApp.remove(i);
        }
    })
    
})
