// dom elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  displayName = document.getElementById("userName"),
  focus = document.getElementById("focus");

// show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // set am or pm
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12 hour format
  hour = hour % 12 || 12;

  // output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${amPm}`;

  setTimeout(showTime, 1000);
}

// add zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// set background and greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // morning
    document.body.style.backgroundImage = "url(../img/morning.jpg)";
    greeting.textContent = "Good Morning, ";
  } else if (hour < 18) {
    // afternoon
    document.body.style.backgroundImage = "url(../img/afternoon.jpg)";
    greeting.textContent = "Good Afternoon, ";
  } else {
    // evening
    document.body.style.backgroundImage = "url(../img/evening.jpg)";
    greeting.textContent = "Good Evening, ";
    document.body.style.color = "white";
  }
}

// get name
function getName() {
  if (localStorage.getItem("userName") == null) {
    displayName.textContent = "[Enter Name]";
  } else {
    displayName.textContent = localStorage.getItem("userName");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    // make sure enter is pressed
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem("userName", e.target.innerText);
      userName.blur();
    }
  } else {
    localStorage.setItem("userName", e.target.innerText);
  }
}

// get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

function setFocus(e) {
  if (e.type === "keypress") {
    // make sure enter is pressed
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

displayName.addEventListener("keypress", setName);
displayName.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// run
showTime();
setBgGreet();
getName();
getFocus();
