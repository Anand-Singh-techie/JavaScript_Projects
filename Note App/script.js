const notesE1 = document.querySelector('.notes')
const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');

const main = notesE1.querySelector('.main');
const textArea = notesE1.querySelector('.textarea');

editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
});


textArea.addEventListener('input', (e) => {
    const  { value } = e.target;

    main.innerHTML = marked(value);
})