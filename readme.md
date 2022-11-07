/* 
## Exo Todo List:

Créez un fichier html ayant une liste non ordonnée avec l'id myList. (la liste doit être vide);
<ul id="myList">
  <!-- le contenu sera rempli avec JavaScript -->
</ul>
Créez ensuite un fichier js.
Ensuite, créez une classe TodoList.
class TodoList {
    constructor(element) {
        // élément représente la list non ordonnée
        1- créez une propriété "listElement" et donnez lui la valeur de "element"
        2- créez une propriété "textList" qui sera un tableau vide
    }

    static createListItem (text) {
        // text représente le texte à insérer dans un <li>
        1- créez un élément <li> (astuce: createElement() :)  )
        2- insérez à l'intérieur le text
    }

    update() {
        // se charge de mettre à jour la list
        // Etapes:
        1 - Retirez tous les éléments <li> de la todo-list
        2- Insérer les <li> que vous créé à l'aide la méthode static createListItem
    }

    add(text) {
        // se charge d'ajouter le text au tableau "textList" créée dans le constructeur
        1- ajoutez le "text" à "textList"
        2- appelez la méthode update() de la classe pour mettre à jour la list
    }

    remove(index) {
        // se charge de retirer un élément de la liste
        1- retirez le text qui se trouve à l'index "index" dans le tableau "textList"
        2- appelez la méthode update() de la classe pour mettre à jour la list
    }

}

Une fois la classe créée, récupérez dans le JavaScript l'élément avec l'id "myList" créé dans le html.
Instanciez ensuite un élément de la classe TodoList. (const todoApp = new TodoList(...))

Une fois que c'est fait, vous pouvez tester dans la console pour voir si ça marche

Test:

todoApp.add("Tache à faire 1") affiche sur la page html un li avec le text "Tache à faire 1"
todoApp.add("Tache à faire 2") affiche sur la page html un li avec le text "Tache à faire 2"
todoApp.add("Tache à faire 3") affiche sur la page html un li avec le text "Tache à faire 3"
todoApp.add("Tache à faire 4") affiche sur la page html un li avec le text "Tache à faire 4"
todoApp.remove(1) retire la tache à faire 2 */