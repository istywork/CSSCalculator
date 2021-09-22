let output = document.querySelector("input[type=text]");

const buttons = document.querySelectorAll("input[type=button]");

document.querySelector(".calculator").addEventListener("click", e => {
  if(e.target.className == "clear"){
    output.value = "";
  }
  else if(e.target.classList.contains("result")){
    output.value = eval(output.value);
  }
  else{
    output.value += e.target.value;
  }
});