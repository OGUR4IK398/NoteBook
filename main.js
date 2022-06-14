"use sctrict";

const addBtn = document.querySelector(".add-note");


addBtn.addEventListener("click", (e)=>{

    const notes = document.querySelector(".notes");

    // Удаление блока добавления элемнта
    // if (e.target.classList.contains("add-icon")){
    //     e.target.parentNode.remove();
    // } else {
    //     e.target.remove();
    // }
    

    const newNote = document.createElement("div");
    newNote.classList.add("note");
    newNote.innerHTML = '<div class="content"><h1 contenteditable="true">Название</h1><div class="divider"></div><p contenteditable="true">Заметка</p></div><div class="buttons"><div class="btn del"></div></div>';


    // Программирование кнопки удаление записи
    const delBtn = newNote.lastChild.firstChild;
    
    delBtn.addEventListener("click", (e)=>{
        delBtn.parentNode.parentNode.remove();
    });

    // Кнопка редактирования записи
    const ediBtn = newNote.lastChild.lastChild;

    ediBtn.addEventListener("click", (e)=>{

    });


    
    notes.insertBefore(newNote, addBtn);  

});