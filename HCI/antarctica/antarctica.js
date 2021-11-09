//change text when for dialogue
function change(){
    var x = document.getElementById("text")
    var y = document.getElementById("previous")
    var z  = document.getElementById("imgButton")
    var z2  = document.getElementById("imgButton2")
    var z3  = document.getElementById("imgButton3")
    var z4  = document.getElementById("imgButton4")
    var z5  = document.getElementById("imgButton5")
    var a = "Hello Dora the Explorer! Welcome to Antarctica, the world's southernmost and fifth largest continent, and its landmass is almost wholly covered by a vast ice sheet."
    var b = "I'm Pingu! Together with my penguin families, we are currently living in Antarctica and working in igloos. For today, I shall guide you around Antarctica!"
    var c = "Antarctica covers an area of 14.2 million km². This is about twice the size of Australia, and larger than the United States of America and Mexico combined!"
    var d = "There are hundreds of different animal species in Antarctica, including 46 species of bird, 10 cetaceans, 6 species of seal and 7 Antarctic penguin species."
    var e = "However, we are currently facing a major environmental issue, and that is GLOBAL WARMING!"
    var f = "Global warming is a gradual increase in the earth's temperature generally due to the greenhouse effect caused by increased levels of carbon dioxide, CFCs, and other pollutants."
    var g = "This is bad because with the higher temperatures, it has caused ice loss and warmer waters surrounding Antartica."
    var h = "In return, some of our penguin populations has shrunk because we have to adapt to warmer temperatures."
    var i = "With all the information, we now need a little help from you! Complete this mission to get the access to other continents."
    var j = "All you have to do is answer 3 questions and there will be a minigame waiting for you at the end. Enjoy your time here!"
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
        location.replace("antarcticaQues1.html")
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
    var a = "Hello Dora the Explorer! Welcome to Antarctica, the world's southernmost and fifth largest continent, and its landmass is almost wholly covered by a vast ice sheet."
    var b = "I'm Pingu! Together with my penguin families, we are currently living in Antarctica and working in igloos. For today, I shall guide you around Antarctica!"
    var c = "Antarctica covers an area of 14.2 million km². This is about twice the size of Australia, and larger than the United States of America and Mexico combined!"
    var d = "There are hundreds of different animal species in Antarctica, including 46 species of bird, 10 cetaceans, 6 species of seal and 7 Antarctic penguin species."
    var e = "However, we are currently facing a major environmental issue, and that is GLOBAL WARMING!"
    var f = "Global warming is a gradual increase in the earth's temperature generally due to the greenhouse effect caused by increased levels of carbon dioxide, CFCs, and other pollutants."
    var g = "This is bad because with the higher temperatures, it has caused ice loss and warmer waters surrounding Antartica."
    var h = "In return, some of our penguin populations has shrunk because we have to adapt to warmer temperatures."
    var i = "With all the information, we now need a little help from you! Complete this mission to get the access to other continents."
    var j = "All you have to do is answer 3 questions and there will be a minigame waiting for you at the end. Enjoy your time here!"
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
