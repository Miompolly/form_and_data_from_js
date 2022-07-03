// let drower=parseInt(prompt("Enter number of drawer"));
// switch(drower){
// case 1:
// { document.write("Include HTML Books");}
    
//     break;
//     case 2:
//         {document.write("Include CSS Books");}
//     break;
//     case 3:
//         {document.write("Include JS Books");}
//     break;
//     case 4:
//         {document.write("Include DB Books");}
//     break;
//     default:
//         {document.write("Wrong number");}



// }

// let par=document.getElementById("p");
// let bod=document.getElementById("bod");
// let bt=document.getElementById("butt");
// bt.addEventListener("click",function(e){
// console.log("clicked");

// par.innerHTML=" ";
// bod.style.backgroundImage = "url('j.jpeg')";
// })


// let butt=document.getElementById("butt");
// let text=document.getElementById("text");
// let arr=[];
// butt=addEventListener("click",function(e){
//     arr.push(text.value);
//     text.value="";
//     console.log(arr.join(" "));
   
 
// })





// function Address(name,age,dep){
//     this.name=name;
//     this.age=age;
//     this.dep=dep;

// }
// let newAddress=new Address("Synt","12","lam")
// for(let id in newAddress){

//     console.log(`${id}:${newAddress[id]}`);
//     console.log(newAddress);
// }





// let container=document.getElementsByTagName("div")
// console.log(container);
// let containerT=Array.from(container);
// console.log(containerT[0].innerHTML);




// let body=document.getElementsByTagName("body")
// console.log(body);
// body.style.backgroundImage = "yellow";


let body=document.getElementsByTagName("body")[0];
console.log(body);



let reg=document.createElement("form");
reg.classList.add("reg");
reg.setAttribute("id","reg");
body.appendChild(reg);

let fnamef=document.createTextNode("First Name");
reg.appendChild(fnamef);





let fname=document.createElement("input");
fname.classList.add("fname");
fname.setAttribute("id","fname");
fname.setAttribute("type","text");
fname.setAttribute("placeholder","First Name");

reg.appendChild(fname);



let br=document.createElement("br");
reg.appendChild(br);

let br1=document.createElement("br");
reg.appendChild(br1);

let lnamef=document.createTextNode("Last Name");
reg.appendChild(lnamef);
let lname=document.createElement("input");


lname.classList.add("lname");
lname.setAttribute("id","lname");
lname.setAttribute("type","text");
lname.setAttribute("placeholder","Last Name");
reg.appendChild(lname);


let br2=document.createElement("br");
reg.appendChild(br2);

let br3=document.createElement("br");
reg.appendChild(br3);

let emailf=document.createTextNode("Your Email");
reg.appendChild(emailf);
let email=document.createElement("input");


email.classList.add("email");
email.setAttribute("id","email");
email.setAttribute("type","email");
email.setAttribute("placeholder"," Email");
reg.appendChild(email);

let br4=document.createElement("br");
reg.appendChild(br4);

let br5=document.createElement("br");
reg.appendChild(br5);

let passwordf=document.createTextNode("Password " + "  ");
reg.appendChild(passwordf);
let password=document.createElement("input");


password.classList.add("password");
password.setAttribute("id","password");
password.setAttribute("type","password");
password.setAttribute("placeholder","Password");
reg.appendChild(password);



let br6=document.createElement("br");
reg.appendChild(br6);

let br7=document.createElement("br");
reg.appendChild(br7);
let button=document.createElement("input");
reg.appendChild(button);
button.setAttribute("placeholder","submit");
button.setAttribute("type","submit");




// function callvalue(){

//    let fnm=fname.value;
//    let lnm=lname.value;
//    let em=email.value;
//    let psw=password.value;
   
//    // document.writeln(fnm + " " );
//    // document.writeln(lnm + " <br>" );
//    // document.writeln(em + " <br>");
//    // document.writeln(psw );
//    console.log(fnm+lnm+em+psw);

// }






function Info(fname,lname,email,password)
{
   this.fname=fname;
   this.lname=lname;
   this.email=email;
   this.password=password;

}

button.addEventListener("click",function(e){
   e.preventDefault();
  
  

   let  myInfo=new Info(fname.value,lname.value,email.value,password.value);
   fname.value="";
   lname.value="";
   email.value="";
   password.value="";
   for(let id in myInfo){

     
      console.log(`${id}:${myInfo[id]}`);
   }
})

   
      
  
   











   





