const button=document.getElementById("btn");
const list=document.getElementById("list");
const close=document.getElementById("close");
  button.onclick=function operate()
  {
    list.style.transform="translateX(0%)";
    button.style.display="none";
    close.style.display="block";
  }
  close.onclick=function remove()
  {
    list.style.transform="translateX(120%)";
    close.style.display="none";
    button.style.display="block";
  }