console.log("working");

// This function is makein register page appear when clicked on button
function create() {
    let element = document.querySelector('.register-box');
    let bodyelement = document.getElementById('first-section');

    bodyelement.classList.add('show-body');
    element.style.visibility = "visible";
}

// and this function is making them disappear again when clicked on cross icon
function remove() {
    let element = document.querySelector('.register-box');
    let bodyelement = document.getElementById('first-section');

    bodyelement.classList.remove('show-body');
    element.style.visibility = "hidden";
}

//-----------------------------------------------------------------------------
// this is for login page

function bringLogin() {
    let change = document.querySelector('.login-page');
    let bodyelement = document.getElementById('first-section');

    bodyelement.classList.add('show-body');
    change.style.opacity = 1;
}

function removeLogin() {
    let change = document.querySelector('.login-page');
    let bodyelement = document.getElementById('first-section');

    bodyelement.classList.remove('show-body');
    change.style.opacity = 0;
}

//-----------------------------------------------------------------------------

// payment method 

function toggleUPI() {
    cc = document.querySelector('.cc-form');
    upi = document.getElementById('upi-box');
    upiLabel = document.querySelector('#upi');
    ccLabel = document.querySelector('#cc');

    cc.style.display = 'none';
    upi.classList.remove('upi-display-toggle');
    
    upiLabel.style.backgroundColor = 'black';
    upiLabel.style.color = '#efefef';
    
    ccLabel.style.backgroundColor = '#efefef';
    ccLabel.style.color = 'black';
}

function toggleCC() {
    let cc = document.querySelector('.cc-form');
    let upi = document.getElementById('upi-box');
    upiLabel = document.querySelector('#upi');
    ccLabel = document.querySelector('#cc');

    upi.classList.add('upi-display-toggle');
    cc.style.display = '';
    
    upiLabel.style.backgroundColor = '#efefef';
    upiLabel.style.color = 'black';
    
    ccLabel.style.backgroundColor = 'black';
    ccLabel.style.color = '#efefef';
}