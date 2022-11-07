class TodoList {
    constructor(element) {
        // élément représente la list non ordonnée
        this.listElement=element;
        this.textList= [];
        this.text=''

    }

    static createListItem (text,element) {
        // text représente le texte à insérer dans un <li>
        let li = document.createElement("li");
        li.innerHTML = text;
        li.style.listStyle = 'none';
        element.appendChild(li)  ;
    }

    update() {
        // se charge de mettre à jour la list
        // Etapes:
       /*  1 - Retirez tous les éléments <li> de la todo-list
        2- Insérer les <li> que vous créé à l'aide la méthode static createListIte */
      
        TodoList.createListItem(this.text, this.listElement)
    }

    add(text) {
        this.text=text
        // se charge d'ajouter le text au tableau "textList" créée dans le constructeur
        this.textList.push(text)
        this.update()
    }

    remove(index) {
        // se charge de retirer un élément de la liste
        // this.textList.filter(function(e,v){
        //     return e=e!==(this.textList[index])
        // })
        console.log('appel de la méthode remove');
        let myNodelist = document.getElementsByTagName('li');
        console.log(myNodelist);
        for(let i=0; i< myNodelist.length; i++){
            if(i==index){
                if (myNodelist[i].parentNode) {
                    myNodelist[i].parentNode.removeChild(myNodelist[i]);
                }
            }
        }
    }
}

let list=document.getElementById('myList')
const todoApp = new TodoList(list)
console.log(todoApp);
todoApp.add("Lundi je vais volé des bananes");
todoApp.add("Mardi je vais au Quartier Général");
todoApp.add("Mercedi je vais voir la pu**");
todoApp.add("Jeudi je vais à salle de jeu");
todoApp.add("Samedi je dois coder le Dark Net");
todoApp.add("Dimanche je vais à la plage");
todoApp.remove(1)
// console.log(todoApp.textList);