//change text when for dialogue
function change(){
    var x = document.getElementById("text")
    var y = document.getElementById("previous")
    var z  = document.getElementById("imgButton")
    var z2  = document.getElementById("imgButton2")
    var z3  = document.getElementById("imgButton3")
    var z4  = document.getElementById("imgButton4")
    var z5  = document.getElementById("imgButton5")
    var a = "Hello Dora the Explorer! Welcome to Africa, the world's second largest, and second-most populated continent after Asia."
    var b = "My name is Dumbo, and I've been living in Tanzania, Africa for as long as I can remember. Hence, I will be your tour guide for today."
    var c = "Africa is a beautiful country with wildlife and mountains, whales and waterfalls, architecture and antiquity and the world's most beautiful city, Cape Town!"
    var d = "Other than that, the south side of Africa was also ranked first as the most beautiful country in the world! I am so glad that you could visit us to see the wonders of Africa."
    var e = "But did you know that there is a major enviromental issue in Africa? That is SOIL DEGRADATION!!"
    var f = "If you didn't know, SOIL DEGRADATION is the decline in soil condition caused by its improper use or poor management."
    var g = "This issue is critical because it can increase pollution and sedimentation in streams of river, clogging waterways."
    var h = "Another important effect is crop reduction due to the soil lacking nutrients and space. This can result in food shortage for people in Africa."
    var i = "Now that you know a little about what is soil degradation, here is a MISSION for you! You have to complete this mission to get tickets to visit other continents."
    var j = "Answer the following 4 questions to know more about this enviromental issue. It is okay to choose the wrong answer. There is also a minigame at the end for you to HAVE FUN!"
    if (x.innerHTML === a){
        x.innerHTML = b
        y.style.display="block"
    } else if (x.innerHTML === b){
        x.innerHTML = c
        y.style.display="block"
        z4.style.display="block"
    } else if (x.innerHTML === c){
        x.innerHTML = d
        y.style.display="block"
        z4.style.display="none"
        z5.style.display="block"
    } else if (x.innerHTML === d){
        x.innerHTML = e
        y.style.display="block"
        z.style.display="block"
        z4.style.display="none"
        z5.style.display="none"
    } else if (x.innerHTML === e){
        x.innerHTML = f
        y.style.display="block"
        z.style.display="block"
        z4.style.display="none"
        z5.style.display="none"
    }
    else if (x.innerHTML === f){
        x.innerHTML = g
        y.style.display="block"
        z.style.display="none"
        z2.style.display="block"
        z4.style.display="none"
        z5.style.display="none"
    }
    else if (x.innerHTML === g){
        x.innerHTML = h
        y.style.display="block"
        z.style.display="none"
        z2.style.display="none"
        z3.style.display="block"
        z4.style.display="none"
        z5.style.display="none"
    }
    else if (x.innerHTML === h){
        x.innerHTML = i
        y.style.display="block"
        z.style.display="none"
        z2.style.display="none"
        z3.style.display="none"
        z4.style.display="none"
        z5.style.display="none"
    }
    else if (x.innerHTML === i){
        x.innerHTML = j
        y.style.display="block"
        z.style.display="none"
        z2.style.display="none"
        z3.style.display="none"
        z4.style.display="none"
        z5.style.display="none"
    }
    else if (x.innerHTML === j){
        location.replace("africaQues1.html")
    }
}

function change2(){
    var x = document.getElementById("text")
    var y = document.getElementById("previous")
    var z  = document.getElementById("imgButton") //soil degradation
    var z2  = document.getElementById("imgButton2") //clog waterways
    var z3  = document.getElementById("imgButton3") //crop reduction
    var z4  = document.getElementById("imgButton4") //waterfall, cape town 
    var z5  = document.getElementById("imgButton5") //south africa
    var a = "Hello Dora the Explorer! Welcome to Africa, the world's second largest, and second-most populated continent after Asia."
    var b = "My name is Dumbo, and I've been living in Tanzania, Africa for as long as I can remember. Hence, I will be your tour guide for today."
    var c = "Africa is a beautiful country with wildlife and mountains, whales and waterfalls, architecture and antiquity and the world's most beautiful city, Cape Town!"
    var d = "Other than that, the south side of Africa was also ranked first as the most beautiful country in the world! I am so glad that you could visit us to see the wonders of Africa."
    var e = "But did you know that there is a major enviromental issue in Africa? That is SOIL DEGRADATION!!"
    var f = "If you didn't know, SOIL DEGRADATION is the decline in soil condition caused by its improper use or poor management."
    var g = "This issue is critical because it can increase pollution and sedimentation in streams of river, clogging waterways."
    var h = "Another important effect is crop reduction due to the soil lacking nutrients and space. This can result in food shortage for people in Africa."
    var i = "Now that you know a little about what is soil degradation, here is a MISSION for you! You have to complete this mission to get tickets to visit other continents."
    var j = "Answer the following 4 questions to know more about this enviromental issue. It is okay to choose the wrong answer. There is also a minigame at the end for you to HAVE FUN!"
    if (x.innerHTML === b){
        x.innerHTML = a
        y.style.display="none"
    } else if (x.innerHTML === c){
        x.innerHTML = b
        y.style.display="block"
        z4.style.display="none"
    } else if (x.innerHTML === d){
        x.innerHTML = c
        y.style.display="block"
        z4.style.display="block"
        z5.style.display="none"
    } else if (x.innerHTML === e){
        x.innerHTML = d
        y.style.display="block"
        z.style.display="none"
        z4.style.display="none"
        z5.style.display="block"
    } else if (x.innerHTML === f){
        x.innerHTML = e
        y.style.display="block"
        z.style.display="block"
        z4.style.display="none"
        z5.style.display="none"
    }
    else if (x.innerHTML === g){
        x.innerHTML = f
        y.style.display="block"
        z.style.display="block"
        z2.style.display="none"
        z4.style.display="none"
        z5.style.display="none"
    }
    else if (x.innerHTML === h){
        x.innerHTML = g
        y.style.display="block"
        z.style.display="none"
        z2.style.display="block"
        z3.style.display="none"
        z4.style.display="none"
        z5.style.display="none"
    }
    else if (x.innerHTML === i){
        x.innerHTML = h
        y.style.display="block"
        z.style.display="none"
        z2.style.display="none"
        z3.style.display="block"
        z4.style.display="none"
        z5.style.display="none"
    }
    else if (x.innerHTML === j){
        x.innerHTML = i
        y.style.display="block"
        z.style.display="none"
        z2.style.display="none"
        z3.style.display="none"
        z4.style.display="none"
        z5.style.display="none"
    }
}
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
    var b = document.getElementsByClassName("back")[0]
    var i = document.getElementById("icon")
    var d = document.getElementsByClassName("droplet")[0]
    b.style.display="none"
    d.style.display="none"
    i.style.display="none"
    var id02 = document.getElementById("id02")
    id02.style.display="block"
    
}
function openModal3(){
    var b = document.getElementsByClassName("back")[0]
    var i = document.getElementById("icon")
    var d = document.getElementsByClassName("droplet")[0]
    b.style.display="none"
    d.style.display="none"
    i.style.display="none"
    var id03 = document.getElementById("id03")
    id03.style.display="block"
    
}
function openModal4(){
    var b = document.getElementsByClassName("back")[0]
    var i = document.getElementById("icon")
    var d = document.getElementsByClassName("droplet")[0]
    b.style.display="none"
    d.style.display="none"
    i.style.display="none"
    var id04 = document.getElementById("id04")
    id04.style.display="block"
    
}
function openModal5(){
    var b = document.getElementsByClassName("back")[0]
    var i = document.getElementById("icon")
    var d = document.getElementsByClassName("droplet")[0]
    b.style.display="none"
    d.style.display="none"
    i.style.display="none"
    var id05 = document.getElementById("id05")
    id05.style.display="block"
    
}
function closeModal(){
    var id01 = document.getElementById("id01")
    id01.style.display="none"
    var id02 = document.getElementById("id02")
    id02.style.display="none"
    var id03 = document.getElementById("id03")
    id03.style.display="none"
    var id04 = document.getElementById("id04")
    id04.style.display="none"
    var id05 = document.getElementById("id05")
    id05.style.display="none"
    var b = document.getElementsByClassName("back")[0]
    b.style.display="block"
    var i = document.getElementById("icon")
    i.style.display="block"
    var d = document.getElementsByClassName("droplet")[0]
    d.style.display="block"
}
