// dom elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  userName = document.getElementById("userName"),
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
  console.log(localStorage.getItem("userName"));
  if (localStorage.getItem("userName" !== null)) {
    userName.textContent = localStorage.getItem("userName");
  } else {
    console.log(123);
    userName.textContent = "[Enter Name]";
  }
}

// run
showTime();
setBgGreet();
getName();
