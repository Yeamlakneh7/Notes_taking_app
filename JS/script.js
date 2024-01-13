let main = document.querySelector(".main");
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addNote);

// a code to add notes 
function addNote() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = '<div class="tool"> <i class="save fas fa-save"></i> <i class="trash fas fa-trash"></i> </div> <textarea></textarea>'


    const save = note.querySelector(".save");
    const trash = note.querySelector(".trash");
    const textarea = note.getElementsByTagName("textarea");

    main.appendChild(note);
    
    save.addEventListener("click", saveNote);
    textarea.addEventListener("input", saveNote);
}

// a code to save the data entered.
function saveNote() {
    const notes = document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map(written => written.value);
    
    if(data.length === 0) {
        localStorage.removeItem("written");
    }else {
        localStorage.setItem("written", JSON.stringify(data));
    }
    console.log(data.length)
}