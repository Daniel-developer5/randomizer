let mainTexts = document.querySelectorAll(".main-text")
let mainBox = document.getElementsByClassName("main-box")[0]
let mainBoxHtml = mainBox.innerHTML
let timer = 3

function animateText() {
    mainTexts[0].classList.add('main-text-first')
    mainTexts[0].addEventListener('animationstart', () => {
        for (let i = 0; i < mainTexts.length; i++) {
            setTimeout(() => {
                mainTexts[i].style.animation = 'jelly 1.5s infinite'
            }, timer) 
            timer += 100 
        }
    })
}

animateText()

let addWinCall = document.getElementById("plus-box")
let random = document.getElementsByClassName("pad-hov")[0]
let addWin = document.getElementsByClassName("add-window")[0]
let closer = document.getElementsByClassName("close-img")[0]
let backOnModal = document.getElementsByClassName("back-on-modal")[0]

addWinCall.addEventListener('click', () => {
    openWin()
})  

closer.addEventListener('click', () => {
    closeWin()
})

function openWin() {
    addWin.classList.add('active')
    backOnModal.classList.add('open')
    addWinCall.classList.add('hide')
    random.classList.add('hide')
}

function closeWin() {
    addWin.classList.remove('active')
    backOnModal.classList.remove('open')
    addWinCall.classList.remove('hide')
    random.classList.remove('hide')
}

let input = document.getElementsByClassName("input")[0]
let itemList = document.getElementsByClassName("item-list")[0]
let form = document.getElementsByTagName("form")[0]
let plus = document.getElementsByClassName("add-box")[0]
let items = []

function condition() {
    if (input.value) {
        items.push(input.value)
        renderItems()
        input.value = ''
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    condition()
})

plus.addEventListener('click', () => {
    condition()
})

function renderItems() {
    itemList.innerHTML = ''
    items.forEach((elem, index) => {
        elem = document.createElement('li')
        itemList.appendChild(elem)
        elem.setAttribute('class', 'item')
        let text = document.createElement("p")
        elem.appendChild(text)
        text.textContent = items[index]
        let imgBox = document.createElement("div")
        elem.appendChild(imgBox)
        imgBox.setAttribute('class', 'img-box')
        let deleteImg = document.createElement("img")
        imgBox.appendChild(deleteImg)
        deleteImg.setAttribute('src', 'img/close.png')
        deleteImg.setAttribute('alt', 'delete')
        deleteImg.setAttribute('class', 'delete-img')
        deleteImg.addEventListener('click', () => {
            removeItem(index)
        })
    })
}

function removeItem(index) {
    items.splice(index, 1)
    renderItems()
}

let randBtns = document.querySelectorAll(".btn-random")
let reset = document.getElementsByClassName("reset")[0]

randBtns.forEach(elem => {
    elem.addEventListener('click', () => {
        mainTexts.forEach((elem) => {
            elem.style.animation = 'none'
        })
        mainBox.innerHTML = mainBoxHtml
        closeWin()
        addAnim()
        reset.style.display = 'flex'
        setTimeout(() => {
            mainRand()
        }, 4500)
    })
})

mainBox.addEventListener('animationend', () => {
    mainBox.style.animation = 'none'
})

function addAnim() {
    mainBox.style.animation = 'reverans 1.5s 3'
}

function mainRand() {
    let randNum = Math.floor(Math.random() * (items.length - 0) + 0)
    items.forEach((elem, index) => {
        if (index == randNum) {
            mainBox.innerHTML = `<p class="winner zoom-rigth">${elem}</p>`
        }
    })
}

reset.addEventListener('click', () => {
    items.splice(0, items.length)
    renderItems()
    openWin()
})



