let myList = document.querySelector('#myList');


class TodoList{
    constructor(element){
        this.listElement = element;
        this.textList = [];
    }

    static createListItem(text){
        let li = document.createElement('li'); 
        li.innerHTML = text;
        let span = document.createElement("span");
           
        span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>`

        li.append(span);
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
    console.log(liText);

    todoApp.textList.forEach(function (el, i) {
        if (el === liText) {
            todoApp.delete(i);
        }
    })
    
})