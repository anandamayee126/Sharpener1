let myForm = document.querySelector('form');
let ul= document.querySelector('#users');
myForm.addEventListener('submit',addUser);
window.addEventListener('load',renderUser);
ul.addEventListener('click',handleClick);


function addUser(e) {
    e.preventDefault();
    console.log(e.target.name);
    const data= {
        name: e.target.name.value,
        email: e.target.email.value
    };
   // localStorage.setItem('users',JSON.stringify(data));
    let arr=[];
    if(JSON.parse(localStorage.getItem('users'))!=null)
    {
        arr=JSON.parse(localStorage.getItem('users'));
    }
    arr.push(data);
    localStorage.setItem('users',JSON.stringify(arr));
    e.target.name.value="";
    e.target.email.value="";

    const li= displayUsers(data,arr.length);
    ul.appendChild(li);
    
}

function displayUsers(user,index) {
    const li =document.createElement('li');
    li.textContent=index+" ";
    const span1= document.createElement('span');
    const span2= document.createElement('span');
    span1.textContent=user.name;
    span2.textContent=user.email;

    li.appendChild(span1);
    li.appendChild(span2);

    const edit= document.createElement('button');
    const delete_btn= document.createElement('button');

    edit.className = 'edit';
    edit.textContent ='edit';

    delete_btn.className = 'delete';
    delete_btn.textContent ='delete';

    li.appendChild(edit);
    li.appendChild(delete_btn);

    return li;

}

function renderUser() {
    ul.innerHTML=``;
    if(JSON.parse(localStorage.getItem('users'))!==null)
    {
        let arr= JSON.parse(localStorage.getItem('users'));
        arr.forEach(function(user,index){
            const li= displayUsers(user,index+1);
            ul.appendChild(li);

        })
    }
}

function handleClick(e) {
    if(e.target.classList.contains('delete'))
    {
        //console.log('delete');
        let elem= e.target.parentNode.textContent;
        //console.log(elem);

        let index= elem[0]-1;
        let arr= JSON.parse(localStorage.getItem('users'));
        arr.splice(index,1);
        localStorage.setItem('users',JSON.stringify(arr));
        renderUser();
    }
    else if(e.target.classList.contains('edit'))
    {
        let elem= e.target.parentElement;
        //console.log(elem);

        let index= elem.textContent[0]-1;
        let arr= JSON.parse(localStorage.getItem('users'));
        arr.splice(index,1);
        localStorage.setItem('users',JSON.stringify(arr));
        const span= elem.getElementsByTagName('span');
        document.getElementById('name').value= span[0].textContent;
        document.getElementById('email').value= span[1].textContent;
        renderUser();
    }
}