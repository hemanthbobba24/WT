const quizarray=[
{
  question:"pick the odd one?",
  a:"apple",
  b:"pineapple",
  c:"strawberry",
  d:"cucumber",
  correct:"d"
},
{
  question:"pick the odd one?",
  a:"dog",
  b:"lion",
  c:"cat",
  d:"donkey",
  correct:"b"
},
{
  question:"pick the odd one?",
  a:"mobile",
  b:"compass",
  c:"book",
  d:"pen" ,
  correct:"a"
},
{
  question:"pick the odd one?",
  a:"fan",
  b:"ssd",
  c:"hdd",
  d:"ram",
  correct:"a"
}
];
  const ques=document.getElementById("ques");
  const option1=document.getElementById("label1");
  const option2=document.getElementById("label2");
  const option3=document.getElementById("label3");
  const option4=document.getElementById("label4");
  const submit=document.getElementById("submit");
  const options=document.querySelectorAll('.options');
  const quizContainer=document.querySelector('.quiz-container');
  let sum=0;
  function read(count){
     ques.innerHTML=quizarray[count].question;
     option1.innerHTML=quizarray[count].a;
     option2.innerHTML=quizarray[count].b;
     option3.innerHTML=quizarray[count].c;
     option4.innerHTML=quizarray[count].d;
  }
  let count=0;
  read(count);
  console.log(quizarray.length);
  submit.addEventListener('click',()=>{
     while(count<quizarray.length){
       read(count+1);
     }
  });
  
    