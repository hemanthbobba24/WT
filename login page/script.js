const pass1vis=document.getElementById("pass1vis");
const pass1novis=document.getElementById("pass1novis");
const pass2vis=document.getElementById("pass2vis");
const pass2novis=document.getElementById("pass2novis");
const pass1text=document.getElementById("pass1text");
const pass2text=document.getElementById("pass2text");
const error=document.getElementById("error");
const username=document.querySelector("username");
pass1vis.onclick=function operate1(){
  pass1text.type="text";
  pass1vis.style.display="none";
  pass1novis.style.display="block";
}
pass1novis.onclick=function operate2(){
  pass1text.type="password";
  pass1novis.style.display="none";
  pass1vis.style.display="block";
}
pass2vis.onclick=function operate3(){
  pass2text.type="text";
  pass2vis.style.display="none";
  pass2novis.style.display="block";
}
pass2novis.onclick=function operate4(){
  pass2text.type="password";
  pass2novis.style.display="none";
  pass2vis.style.display="block";
}
const btn=document.getElementById("btn");
const loginpage=document.getElementById("loginpage");
function pageRedirect() {
  window.location.replace("https://hemanthbobba24.github.io/WT/footwear/");
}      
btn.addEventListener('click',()=>{

if(pass1text.value==pass2text.value){
       
  setTimeout("pageRedirect()", 1000);
  }
  else{
    error.style.display="block";
    error.innerHTML="passwords are not same";
}
});

