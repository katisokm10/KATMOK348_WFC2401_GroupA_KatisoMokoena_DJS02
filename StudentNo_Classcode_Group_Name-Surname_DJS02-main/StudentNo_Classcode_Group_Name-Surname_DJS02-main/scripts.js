const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if(isNaN(dividend) || isNaN(divider)){
    document.body.innerHTML = `<h1>Something went critically wrong. Please reload the page.</h1>`
    console.error('Error: Invaild number');

  }
  if(dividend === ""|| divider === ""){
    result.innerText ="Division not performed. Both values are required in inputs. Try again"
    
  }else{
    if(divider == 0){
      console.log(divider)
      result.innerText = 'Division not performed. Invalid number provided. Try again'
      console.error('Error: Divider cannot be zero');
    }else{
      if(!isNaN(dividend) || !isNaN(divider))
      result.innerText = Math.floor(dividend / divider);
    }
    
    
  }
});