import './style.css'

interface Todo{
  title : string;
  isCompleted  :boolean;
  readonly id :string
}

const todos:Todo[]=[];

const todosContainer = document.querySelector(
  ".todoContainer"
) as HTMLDivElement;
const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;
 
myForm.onsubmit =(e:SubmitEvent)=>{
  e.preventDefault();
  const todo: Todo={
    title: todoInput.value,
    isCompleted:false,
    id: String(Math.random()*1000),
  };

  todos.push(todo);
  todoInput.value ="";
renderTodo(todos)
  
};
const generateTodoItem =( title:string, isCompleted:boolean,id:string) =>
  {
  const todo:HTMLDivElement =document.createElement("div")
  todo.className = "todo";
  //createda checkbox
  const checkBox : HTMLInputElement = document.createElement("input");
  checkBox.setAttribute("type", "checkbox")
  checkBox.className="isCompleted";
  checkBox.checked = isCompleted;
  //creatin paragraph for title
  const paragraph : HTMLParagraphElement = document.createElement("p");
  paragraph.innerText= title;
  // Creating Delete Button
   const btn :HTMLButtonElement = document.createElement("button");
   btn.innerHTML ="X";
   btn.className = "deleteBtn";

  //Apending All to do Item

  todo.append(checkBox,paragraph, btn);
  todosContainer.append(todo);
}


const renderTodo = (todos:Todo[])=>{
  todosContainer.innerText = ""
  todos.forEach(item=>{
    generateTodoItem(item.title, item.isCompleted, item.id)
  })
}