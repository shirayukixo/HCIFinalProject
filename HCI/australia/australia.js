//change text when for dialogue
function change(){
    var x = document.getElementById("text")
    var y = document.getElementById("previous")
    var z  = document.getElementById("imgButton")
    var z2  = document.getElementById("imgButton2")
    var z3  = document.getElementById("imgButton3")
    var z4  = document.getElementById("imgButton4")
    var z5  = document.getElementById("imgButton5")
    var a = "Hello Dora the Explorer! Welcome to Australia, the world's sixth largest continent, and the largest country by area in Oceania."
    var b = "My name is Teddy, and I've been living on the tree of New South Wales, Australia ever since I was born. For today, I will be your tour guide for today."
    var c = "Australia is a beautiful country mixed with wildlife and city. Australia covers an area of 7.6 million km² and surrounded by ocean. The capital city of Australia is Sydney and other major metroplitan areas include Melbourne, Brisban, Perth and Adelaide. "
    var d = "Other than that, the North side of Australia belongs to animal, many of my friend stay all around here and there is a Kakadu National Park reserved a wildlife enviroment for us."
    var e = "Currently we having a major environment issue in Australia, which is habitat loss and deforestaition. My friend Joey the kangaroo losing her home too. "
    var f = "If you didn't know about habitat loss and deforestation, habitat loss is animal like us loss a place to live and deforestation is purposely clearing of forested land. "
    var g = "This significantly affect our life and causing our population decreasing dued to the needs of land and resources without proper management. "
    var h = "There are 200,000 to 300,000 species like reptiles, birds and aquatic marine live in Australia. This result the loss of our home and suffer from hunger due to lacking of food."
    var i = "Now that you understand about habitat loss and deforestation, to help us, there is a MISSION given to you. You have to complete this mission to get tickets to visit other continents."
    var j = "Answer the following 3 questions to know more about this enviromental issue. It is okay to choose the wrong answer. Use the knowledge that you learn to answer the question. Enjoy the fun here!"
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
        location.replace("australiaQues1.html")
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
    var a = "Hello Dora the Explorer! Welcome to Australia, the world's sixth largest continent, and the largest country by area in Oceania.."
    var b = "My name is Teddy, and I've been living on the tree of New South Wales, Australia ever since I was born. For today, I will be your tour guide for today."
    var c = "Australia is a beautiful country mixed with wildlife and city. Australia covers an area of 7.6 million km² and surrounded by ocean. The capital city of Australia is Sydney and other major metroplitan areas include Melbourne, Brisban, Perth and Adelaide. "
    var d = "Other than that, the North side of Australia belongs to animal, many of my friend stay all around here and there is a Kakadu National Park reserved a wildlife enviroment for us."
    var e = "Currently we having a major environment issue in Australia, which is habitat loss and deforestaition. My friend Joey the kangaroo losing her home too. "
    var f = "If you didn't know about habitat loss and deforestation, habitat loss is animal like us loss a place to live and deforestation is purposely clearing of forested land. "
    var g = "This significantly affect our life and causing our population decreasing dued to the needs of land and resources without proper management. "
    var h = "There are 200,000 to 300,000 species like reptiles, birds and aquatic marine live in Australia. This result the loss of our home and suffer from hunger due to lacking of food."
    var i = "Now that you understand about habitat loss and deforestation, to help us, there is a MISSION given to you. You have to complete this mission to get tickets to visit other continents."
    var j = "Answer the following 3 questions to know more about this enviromental issue. It is okay to choose the wrong answer. Use the knowledge that you learn to answer the question. Enjoy the fun here!"
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
