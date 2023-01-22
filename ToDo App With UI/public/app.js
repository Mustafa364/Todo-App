// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
import { getDatabase,set,ref,push } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS5E5qyOf3B52cVzgYuVcPeX1fxHWqpS4",
  authDomain: "todo-app-4a656.firebaseapp.com",
  databaseURL: "https://todo-app-4a656-default-rtdb.firebaseio.com",
  projectId: "todo-app-4a656",
  storageBucket: "todo-app-4a656.appspot.com",
  messagingSenderId: "959355448224",
  appId: "1:959355448224:web:275d1e4cfea437287212c5",
  measurementId: "G-ZK18L22T71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();



var list = document.getElementById("list")


    window.addtodo = function(){
    var input = document.getElementById("input");

    //for li tag
    var li = document.createElement('li')
    var litext = document.createTextNode(input.value)
    li.appendChild(litext)

    var obj = {
        input: input.value}

        obj.id = push(ref(db,'input/')).key
        const reference = ref(db,`input/${obj.id}`)
        set(reference, obj) 
    
    
        console.log(obj)


//dlt tag
var dltbtn = document.createElement('button');
var dlttext = document.createTextNode("DELETE");
dltbtn.setAttribute("class"," dbtn mt-1 my-2 btn btn-danger");
dltbtn.setAttribute("onclick","dltitem(this)")
dltbtn.appendChild(dlttext);
li.appendChild(dltbtn);

//edt button
var edtbtn = document.createElement('button')
var edttext = document.createTextNode("EDIT")
edtbtn.setAttribute("class","ebtn mt-1 my-2 mx-2 px-4 btn btn-primary")
edtbtn.setAttribute("onclick","edititem(this)")
edtbtn.appendChild(edttext)
li.appendChild(edtbtn)

list.appendChild(li)
    
input.value = "";
}
window.dltitem = function(a){
    a.parentNode.remove()
}

window.edititem = function(a){    
    a.parentNode.firstChild.nodeValue = prompt();
    
}

 window.dltall = function(){  
    list.innerHTML = ""
}



