const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",",
"|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let length = document.getElementById("passord_length");
let btn = document.querySelector("button");
let symbols = document.getElementById("symbols");
let numbers = document.getElementById("numbers");


// generate random  character using characters array
function randomPassword() {
    if (symbols.checked == true && numbers.checked == false) {
        let numbers = "";
        let x = [...characters];
        x.splice(52,10);
        for (let i = 0; i < length.value; i++){
            numbers += x[randomIndex()];
        }
        return numbers;  
    } else {
        let numbers = "";
        for (let i = 0; i < length.value; i++){
            numbers += characters[randomIndex()];
        }
        return numbers;  
    };
};

function randomIndex() {
    if (symbols.checked == true && numbers.checked == true) {
        return (Math.floor(Math.random() * characters.length));    
    } else if ( symbols.checked == true && numbers.checked == false ) {
        return (Math.floor(Math.random() * (characters.length - 10)));
    } else if ( symbols.checked == false && numbers.checked == true ){
        return (Math.floor(Math.random() * (characters.length - 29)));
    } else {
        return (Math.floor(Math.random() * (characters.length - 39)));
    }
    
};


function randomPasswordBtn () {
    // check if the input is valid (should be numbers)
    password1.textContent = randomPassword();
    password2.textContent = randomPassword();
};

function copyPassword(passwordEl) {
    let El = passwordEl.id;
    if (El == "password1"){
        navigator.clipboard.writeText(password1.textContent);
        alert("Option 1 passwords copied")
    } else if (El == "password2") {
        navigator.clipboard.writeText(password2.textContent);
        alert("Option 2 passwords copied")
    };
};
