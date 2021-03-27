const addButton = document.getElementById('add');
const inp_Add = document.getElementById('inp_add');
let list = document.getElementsByClassName('row')[0];


addButton.addEventListener('click',(e)=>{
    e.preventDefault()
    // adding a todo
    let inp_text = inp_Add.value;
    console.log(inp_text)
    var singleList = document.createElement('li');
    singleList.innerText = inp_text;
    singleList.classList.add('col');
    singleList.classList.add('col-md-8');
    // singleList.classList.add('text-center');
    list.appendChild(singleList);
    
    let rightDiv = document.createElement('div');
    list.appendChild(rightDiv);
    rightDiv.classList.add('rght')
    let deleteButton = document.createElement('button');    
    deleteButton.innerHTML=`<i class="fas fa-trash-alt"></i> DELETE`;
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-danger');
    
    // update button create
    let updateButton = document.createElement('button');    
    updateButton.innerHTML=`<i class="fas fa-edit"></i> UPDATE`;
    updateButton.classList.add('btn');
    updateButton.classList.add('btn-warning');
    rightDiv.classList.add('col');
    rightDiv.classList.add('col-md-4');
    rightDiv.appendChild(deleteButton);
    rightDiv.appendChild(updateButton);
    inp_Add.value="";
    // deleting a child
    deleteButton.onclick=function(){
        list.removeChild(singleList)
        deleteButton.remove()
    }
    // marking a task as complete
    singleList.onclick=function(){
        singleList.classList.toggle('underline');
    }
})




