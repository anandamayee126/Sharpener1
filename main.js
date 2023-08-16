
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




// const form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit);

// function handleSubmit(e){
//     e.preventDefault();
//     const data = {
//         "name" : e.target.name.value,
//         "email" : e.target.email.value
//     };
//     console.log(data)
//     let arr = []
//     if(localStorage.getItem("users") != null){
//         arr = JSON.parse(localStorage.getItem("users"));
//         console.log(arr);
//     }
//     arr.push(data);
//     localStorage.setItem("users", JSON.stringify(arr));
// }

// let btn1=document.querySelector('.btn');
// btn1.addEventListener('click',(e)=>{
//   e.preventDefault();
// });
// btn1.onclick=function(){
//     userlist=document.querySelector('.items');
//     nameInput=document.querySelector('#name');
//     emailInput=document.querySelector('#email');
//     const li=document.createElement('li');
//     li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
//     userlist.append(li);
//     //console.log(userlist);
//   
// }
  
const form= document.querySelector('#my-form');
form.addEventListener('submit',localstorage);
function localstorage(e)
{
  e.preventDefault();
  const name1= e.target.name.value;
  const email= e.target.email.value;
  //console.log(name1, email);
  const vari={
    name1,
    email 
  };
  localStorage.setItem(vari.email, JSON.stringify(vari));
  showUser(vari);
}
function showUser(vari) {
  const parentEle= document.querySelector('.items');
  const child= document.createElement('li');
  var text= document.createTextNode(vari.name1+" : "+vari.email);
  const button_del= document.createElement('button');
  const button_edit= document.createElement('button');
  button_edit.className='btn btn-info btn-sm float-right edit';
  button_edit.textContent='Edit';
  button_del.className='btn btn-info btn-sm float-right delete';
  button_del.textContent='Delete';
  child.appendChild(text);
  parentEle.appendChild(button_del);
  parentEle.appendChild(button_edit);
  parentEle.appendChild(child);


  button_del.onclick=function(e) {
   
    parentEle.removeChild(child);
    parentEle.removeChild(button);
    localStorage.removeItem(vari.email);

  }
  button_edit.onclick=function(e)
  {
    
    if(e.target.classList.contains('edit')){
      let elem = e.target.parentNode.parentNode
      let index = elem.textContent[0] -1
      const users =JSON.parse(localStorage.getItem(''))
      let ul = document.getElementById('users')
      document.getElementById('name').value = users[index].name
      document.getElementById('email').value = users[index].email
      if(users.length === 1 && index === 0){
          localStorage.removeItem('users')
          ul.removeChild(e.target.parentNode.parentNode)
      }
      else{
          users.splice(index ,1)
          localStorage.setItem('users' , JSON.stringify(users))
          renderElements()
      }
   }
  }
}

