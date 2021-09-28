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
        window.location.replace("./Minigame/minigame.html")
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
        text: 'Which of the choices below will help to reduce the excessive consumption of water?',
        options: [
            {
               text: 'Take long showers',               
               nextText: 3
            },
            {
                text: 'Ignore pipes that are leaking water',
                nextText: 3
            },
            {
                text: 'Close the tap water while brushing your teeth',
                setState: { tapClosed: true },
                nextText: 2
            },
            {
                text: 'Use the water from the hose to play with your friends',
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: 'Good job! Your choice will save our Earth!',
        options: [
            {
                text: 'Click here to play minigame!',
                requireState: (currentState) => currentState.tapClosed, 
                nextText: -1               
            }
        ]
    },
    {
        id: 3,
        text: 'Wrong choice... Please try again',
        options: [
            {
                text: 'Try again',
                nextText: 4
             }, 
        ]
    },
    {
        id: 4,
        text: 'Which of the choices below will help to reduce the excessive consumption of water?',
        options: [
            {
               text: 'Take long showers',               
               nextText: 5
            },
            {
                text: 'Ignore pipes that are leaking water',
                nextText: 5
            },
            {
                text: 'Close the tap water while brushing your teeth',
                setState: { tapClosed: true },
                nextText: 2
            },
            {
                text: 'Use the water from the hose to play with your friends',
                nextText: 3
            }  
        ]
    },
    {
        id: 5,
        text: 'Unfortunately that is still the wrong choice.. The game will now restart',
        options: [
            {
               text: 'Restart',
               nextText: -2
            },            
        ]
    }

]

startGame()