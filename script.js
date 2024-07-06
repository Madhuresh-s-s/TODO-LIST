const toDoArray = [];
function addItems() {

let name = document.querySelector('.todo').value;
let dueDate = document.querySelector('.todo-date').value;
let dueTime = document.querySelector('.todo-time').value;

let value = {
  name,
  dueDate,
  dueTime
};
toDoArray.push(value);
//console.log(toDoArray);
document.querySelector('.todo').value = '';
document.querySelector('.todo-date').value = '';
document.querySelector('.todo-time').value = '';
displayContent();

}
function whenEnter(){
if(event.key === 'Enter')
addItems();
}

function displayContent(){

let htmlToDisplay = '<h3>YOUR TODO LIST IS SHOWN BELOW </h3>';
for (let i=0; i<toDoArray.length; i++)
{
  let dispName = toDoArray[i].name;
  let dispDate = toDoArray[i].dueDate;
  let dispTime = toDoArray[i].dueTime;
  html = `<div class="seg-css">
 <div>${dispName}</div>
 <div> ${dispDate}</div>
 <div> ${dispTime}</div>
  <button onClick="
  toDoArray.splice(${i},1);
  displayContent();
  " class="delete-css"> Delete </button>
    </div>
     `;
  htmlToDisplay+= html;
}
//console.log(htmlToDisplay);
document.querySelector('.js-display-content').innerHTML = htmlToDisplay;
}

