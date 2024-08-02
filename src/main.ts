import './style.css'




const buttons = Array.from(document.querySelectorAll('button'));

/// find all button in onclick

const input = document.getElementById('input') as HTMLInputElement;



buttons.forEach((button,key)=>{
  button.addEventListener("click",()=>{
    input.value+=key;
  })
})