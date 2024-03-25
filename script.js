document.title = "Jishnu's Website";

let button = document.getElementById("buton")



function getRandomColor(){
  let v1 = 0 + Math.random()*(255-0);
  let v2 = 0 + Math.random()*(255-0);
  let v3 = 0 + Math.random()*(255-0);

  return `rgb(${v1}, ${v2}, ${v3})`
}


button.addEventListener("click", ()=>{
  document.querySelector(".box").style.backgroundColor = getRandomColor();
})