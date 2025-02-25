// kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;

// let lastTime = Date.now();

// function handle(e) {
//   if (form.elements[e.type + 'Ignore'].checked) return;

//   area.scrollTop = 1e6;

//   let text = e.type +
//     ' key=' + e.key +
//     ' code=' + e.code +
//     (e.shiftKey ? ' shiftKey' : '') +
//     (e.ctrlKey ? ' ctrlKey' : '') +
//     (e.altKey ? ' altKey' : '') +
//     (e.metaKey ? ' metaKey' : '') +
//     (e.repeat ? ' (repeat)' : '') +
//     "\n";

//   if (area.value && Date.now() - lastTime > 250) {
//     area.value += new Array(81).join('-') + '\n';
//   }
//   lastTime = Date.now();

//   area.value += text;

//   if (form.elements[e.type + 'Stop'].checked) {
//     e.preventDefault();
//   }
// }


// function checkPhoneKey(key) {
//   return (key >= '0' && key <= '9') ||
//     ['+','(',')','-','ArrowLeft','ArrowRight','Delete','Backspace'].includes(key);
// }


// const myBox = document.getElementById("mybox");


const myBox = document.getElementById("mybox");
const moveAmount=10;
let x = 0;
let y = 0;




document.addEventListener("keydown", event =>{
  myBox.textContent = "😍"
  myBox.style.backgroundColor = "green";
  myBox.style.borderRadius = "50%";
  console.log(event);
  
  
  } )
  document.addEventListener("keyup", event =>{
    myBox.textContent = "🤯"
    myBox.style.backgroundColor = "lightBlue";
    myBox.style.borderRadius = "";
    console.log(event);
    
  
  } )  


document.addEventListener("keydown", event =>{
  if(event.key.startsWith("Arrow")){



    event.preventDefault();

    
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
        case "ArrowDown":
        y += moveAmount;
        break;
         case "ArrowLeft":
          x -= moveAmount;
          break;
          case "ArrowRight":
            x += moveAmount;
        break;
    }
    myBox.style.top = `${y}px`
    myBox.style.left = `${x}px`
  }
})
