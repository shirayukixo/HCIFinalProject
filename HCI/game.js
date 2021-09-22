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
        window.location.replace("minigame.html")
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
        text: 'You see a tap water is running. What do you do?',
        options: [
            {
               text: 'Leave it running',               
               nextText: 3
            },
            {
                text: 'Drink the water',
                nextText: 3
            },
            {
                text: 'Close the tap',
                setState: { tapClosed: true },
                nextText: 2
            },
            {
                text: 'Wash your cat',                
                nextText: 3
            },
        ]
    },
    {
        id: 2,
        text: 'Good job! You saved the earth! :3',
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
        text: 'BAD DECISION, Try again! You see a tap water is running. What do you do?',
        options: [
            {
               text: 'Leave it running',               
               nextText: 4
            },
            {
                text: 'Drink the water',                
                nextText: 4
            },
            {
                text: 'Close the tap',
                setState: { tapClosed: true },
                nextText: 2
            },
            {
                text: 'Wash your cat',                
                nextText: 4
            },
        ]
    },
    {
        id: 4,
        text: 'You chose wrongly again! The game will now restart',
        options: [
            {
               text: 'Restart',
               nextText: -2
            },            
        ]
    }

]

startGame()