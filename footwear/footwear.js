const open=document.getElementById("open");
const list=document.getElementById("list");
const close=document.getElementById("close");
  open.onclick=function operate()
  {
    list.style.transform="translateX(0%)";
    open.style.display="none";
    close.style.display="block";
  }
  close.onclick=function remove()
  {
    list.style.transform="translateX(120%)";
    close.style.display="none";
    open.style.display="block";
  }