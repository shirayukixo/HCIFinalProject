
function openModal(){
    var b = document.getElementsByClassName("back")[0]
    var i = document.getElementById("icon")
    var d = document.getElementsByClassName("droplet")[0]
    b.style.display="none"
    d.style.display="none"
    i.style.display="none"
    var id01 = document.getElementById("id01")
    id01.style.display="block"
    
}
function openModal2(){
    var id02 = document.getElementById("id02")
    id02.style.display="block"
    var b = document.getElementsByClassName("back")[0]
    var i = document.getElementById("icon")
    var d = document.getElementsByClassName("droplet")[0]
    b.style.display="none"
    d.style.display="none"
    i.style.display="none"
}
function openModal3(){
    var id03 = document.getElementById("id03")
    id03.style.display="block"
    var b = document.getElementsByClassName("back")[0]
    var i = document.getElementById("icon")
    var d = document.getElementsByClassName("droplet")[0]
    b.style.display="none"
    d.style.display="none"
    i.style.display="none"
}

function closeModal(){
    var id01 = document.getElementById("id01")
    id01.style.display="none"
    var id02 = document.getElementById("id02")
    id02.style.display="none"
    var id03 = document.getElementById("id03")
    id03.style.display="none"
    var b = document.getElementsByClassName("back")[0]
    b.style.display="block"
    var i = document.getElementById("icon")
    i.style.display="block"
    var d = document.getElementsByClassName("droplet")[0]
    d.style.display="block"
}

function changeColor(){
    var btn= document.getElementsByClassName("btn1")[0]
    btn.style.backgroundColor="white"
    btn.style.color="orange"
    btn.innerHTML +=" is correct"
}
