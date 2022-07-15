// Your code here
const table = document.querySelector('table');
const select = document.querySelector('select')
const addRow = document.getElementById('add-row');
let pickedColor = 'red';
let num = 5


//add a row; column num pre-defined for now
addRow.addEventListener('click', () => {
    const tr = document.createElement('tr');
    for (let i = 0; i < num; i++){
        const td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
});

//change color by select dropdown
select.addEventListener('change', (ev) => {
    pickedColor=ev.target.value
})


//toggle on and off color
table.addEventListener('click', (ev)=>{
    if(ev.target.tagName === 'TD'){
        if(ev.target.className === pickedColor){
            ev.target.className = ''
        } else {
            ev.target.className = pickedColor;
        }
    }
})


