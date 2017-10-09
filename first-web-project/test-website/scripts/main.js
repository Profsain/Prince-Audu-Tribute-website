var myHeading = document.querySelector('h1');
myHeading.textContent = 'The Living Legend';

var myImage = document.querySelector ('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/prince.png'){
        myImage.setAttribute ('src', 'images/prince2.jpg');
    }else{
        myImage.setAttribute ('src', 'images/prince.png');
    }
}

var myButton = document.querySelector ('button');
var myHeading = document.querySelector ('h1');
function setUserName() {
    var myName = prompt ('Hi! please enter your name.');
    localStorage.setItem ('name', myName);
    myHeading.textContent = 'Hello! ' + ' '+ myName + ',' + ' '+' you are Welcome to Prince Audu Tribute Page.';
}

if(!localStorage.getItem('name')) {
    setUserName();
}else{
    var storeName = localStorage.getItem('name');
    myHeading.textContent = 'Hello!' + ' ' + storeName + ',' + ' ' + 'you are Welcome to Prince Audu Tribute page.';
}
myButton.onclick = function(){
    setUserName();
}

var myHeading2 = document.querySelector ('h2');
myHeading2.textContent = 'His Excellency Prince Abubakar Audu (late)';