const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const body = document.getElementById('body')


let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {    
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text    
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    }) 
       

}

function showOption(option) {
    return option.requireState == null || option.requireState(state)
}

function selectOption(option) {
    const nextTextNodeID = option.nextText
    if (nextTextNodeID == -1) {
        window.location.replace("../Minigame/minigame.html")
    }
    else if (nextTextNodeID < -1) {
        return startGame()
    }
    
    
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeID)
}

const textNodes = [
    {
        id: 1,        
        text: 'Our pandas need your help! Choose an option that will save them',
        options: [
            {
               text: 'Cut down all the bamboo trees',               
               nextText: 3
            },
            {
                text: 'Steal their babies',
                nextText: 3
            },
            {
                text: 'Protect their habitat',
                setState: { habitatProtected: true },
                nextText: 2
            },
            {
                text: 'Hunt them for their fur',
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: 'Yay! Our pandas are safe thanks to you! You may now proceed to the next stage',
        options: [
            {
                text: 'Click here to play minigame!',
                requireState: (currentState) => currentState.habitatProtected, 
                nextText: -1               
            }
        ]
    },
    {
        id: 3,
        text: 'Oh no! That is the wrong choice! You have one more try left to save our pandas',
        options: [
            {
                text: 'Try again',
                nextText: 4
             }, 
        ]
    },
    {
        id: 4,
        text: 'Our pandas need your help! Choose an option that will save them',
        options: [
            {
               text: 'Cut all the bamboo trees',               
               nextText: 5
            },
            {
                text: 'Steal their babies',
                nextText: 5
            },
            {
                text: 'Protect their habitat',
                setState: { habitatProtected: true },
                nextText: 2
            },
            {
                text: 'Hunt them for their fur',
                nextText: 5
            } 
        ]
    },
    {
        id: 5,
        text: 'Unfortunately that will not save our pandas.... Please try again!',
        options: [
            {
               text: 'Restart',
               nextText: -2
            },            
        ]
    }

]

startGame()