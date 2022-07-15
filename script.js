// Your code here
const table = document.querySelector('table');

const addRow = document.getElementById('add-row');

const pickedColor = 'red';

table.addEventListener('click', (ev)=>{
    
    if(ev.target.tagName === 'TD'){
        if(ev.target.className === pickedColor){
            ev.target.className = ''
        } else {
            ev.target.className = pickedColor;
        }
    }
})

addRow.addEventListener('click', () => {
    const tr = document.createElement('tr');

    for (let i = 0; i < 7; i++){
        const td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
    const td = document.querySelectorAll('td');
    console.log(tr)
});




