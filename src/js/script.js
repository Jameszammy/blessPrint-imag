
const signupbtn = document.getElementById('signupbtn');
if(signupbtn){
function vaildtionSingup() {
    let fname = document.getElementById('fname').value.trim();
    let lname = document.getElementById('lname').value.trim();
    let email = document.getElementById('email').value.trim();  
    let password = document.getElementById('password').value.trim();
    let contact = document.getElementById('contact').value.trim();
    let error = document.getElementById('error');

    error.textContent = "";

    if (fname === "" || lname === "" || email === "" || password === "" || contact === "") {
        error.textContent = "All fields are required!";
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        error.textContent = "Invalid email format!";
        return;
    }

   
    localStorage.setItem('userFname', fname);
    localStorage.setItem('userLname', lname);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('userContact', contact);

    window.location.href = "login.html";
}

signupbtn.addEventListener('click', vaildtionSingup);
}


const button = document.getElementById('btn');
if(button){

function vaildtion() {
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let error = document.getElementById('error');

    error.textContent = "";

    if (email === "" || password === "") {
        error.textContent = "All fields are required!";
        return;
    }

    let savedEmail = localStorage.getItem("userEmail");
    let savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
        window.location.href = "leandingpage.html";
    } else {
        error.textContent = "Invalid email or password!";
    }
}

button.addEventListener('click', vaildtion);

}


const list = document.querySelectorAll('.navbar a');
list.forEach(item=>{
    item.addEventListener('mouseover', ()=>{
item.style.color="blue";
    });
    item.addEventListener('mouseout', ()=>{
item.style.color="";
    });

})
const list1 = document.querySelectorAll('.navbar1 a');
list1.forEach(item=>{
    item.addEventListener('mouseover', ()=>{
item.style.color="blue";
    });
    item.addEventListener('mouseout', ()=>{
item.style.color="";
    });

})



const images=['/src/img/shoot.jpeg','/src/img/flex.jpeg'];

const changeAfterHour = 1;

let lastChange = localStorage.getItem('lastChangeHour');
let index = parseInt(localStorage.getItem('imageIndex'))||0;

function updateImage(){
    const today = Date.now();

    if(!lastChange||(today - lastChange)>(changeAfterHour * 60 * 60 * 1000)){
        index = (index + 1) % images.length;
        localStorage.setItem("imageIndex",index);
        localStorage.setItem("lastChangeHour", today);
    }
     document.getElementById('imgupdate').style.backgroundImage= `url('${images[index]}')`;
}
updateImage();








