//select var
var pup=document.querySelector(".popup")
var upi=document.querySelector(".popupi")
var btn=document.querySelector(".bttn")


btn.addEventListener("click",function(){
    pup.style.display="block"
    upi.style.display="block"
})

var cancel =document.getElementById("can")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    pup.style.display="none"
    upi.style.display="none"
})

var contain=document.querySelector(".container")
var add=document.getElementById("ad")
var bookname=document.getElementById("name")
var anam=document.getElementById("aname")
var con=document.getElementById("content")

add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","two")
    div.innerHTML= `<h2>${bookname.value}</h2>
    <h4>${anam.value}</h4>
    <p>${con.value}</p>
    <button onclick="del(event)">delete</button>S`
    contain.append(div)
    pup.style.display="none"
    upi.style.display="none"
})

function del(event){
    event.target.parentElement.remove()
}


