let keyPad = document.querySelector(".keypad");

let displayBox = document.querySelector(".display");

let operators = ["+","-","*","/","%"];

let filter = x => {
    let current = displayBox.innerText;
    // let lastcharc = current[current.length-1];

    // if (current.length >= 10) {
    //     return false
    // }

    if (current == "0") {
        // if (x != ".") {
            clearLast()
        // }
    }

    // if (operators.includes(x)) {
    //     if (operators.includes(lastcharc)) {
    //         return false;
    //     }
    // }

    // return true;
}

let showInDisplay = x => {
    if (filter(x)) {
        displayBox.innerText += x
    }
}

let calc = _ => {
    if (!operators.includes(displayBox.innerText[displayBox.innerText.length - 1])) {
        displayBox.innerText = eval(displayBox.innerText);
    }
}

// let calc = _ =>  displayBox.innerText = eval(displayBox.innerText);

let clearAll = _ => displayBox.innerHTML = "";

let clearLast = _ => displayBox.innerText = displayBox.innerText.substring(0,displayBox.innerText.length-1)

keyPad.addEventListener("click",_ => {
    if (displayBox.innerText.length > 10) {
        displayBox.style.fontSize = 30 + "px";
    } else if (displayBox.innerText.length > 5) {
        displayBox.style.fontSize = 60 + "px";
    }
})