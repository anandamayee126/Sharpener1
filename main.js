
// const btn= document.querySelector('#my-form');
// btn.addEventListener('submit',localstorage);
// function localstorage(e)
// {
//   e.preventDefault();
//   const name1= document.getElementById('name').value;
//   const email= document.getElementById('email').value;
//   //console.log(name1, email);

//   const vari=  {name:'name1',email:'email'};
//   localStorage.setItem('obj', JSON.stringify(vari));

//   console.log (JSON.parse(localStorage.getItem('obj')));
// }




const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    const data = {
        "name" : e.target.name.value,
        "email" : e.target.email.value
    };
    console.log(data)
    let arr = []
    if(localStorage.getItem("users") != null){
        arr = JSON.parse(localStorage.getItem("users"));
        console.log(arr);
    }
    arr.push(data);
    localStorage.setItem("users", JSON.stringify(arr));
}

let btn1=document.querySelector('.btn');
btn1.addEventListener('click',(e)=>{
  e.preventDefault();
});
btn1.onclick=function(){
    userlist=document.querySelector('.items');
    nameInput=document.querySelector('#name');
    emailInput=document.querySelector('#email');
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    userlist.append(li);
    //console.log(userlist);
  
}
  


