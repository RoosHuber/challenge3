
//promptbox

var customerName = prompt("Please sign in with your name:");



//Hamburger menu code

const menuIcon = document.querySelector
('.hamburger-menu');

const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});


//Welcome message

var today = new Date();
var hourNow = today.getHours();
var greeting;


if (hourNow > 4 && hourNow <= 11){
  greeting = "Good Morning, " + customerName + ".";
 document.getElementById('test').className = 'morning';
}

else if (hourNow > 11 && hourNow <= 17){
  greeting = 'Good afternoon, ' + customerName + ".";
 document.getElementById('test').className = 'afternoon';
}

else if (hourNow > 17){
  greeting = "Good evening, " + customerName + ".";
	var image = document.getElementById('sun');
	image.src = "images/moon.png";
  document.getElementById('test').className = 'evening';
}
else {
  greeting = "Welcome, " + customerName + ".";
  document.getElementById('test').className = 'evening';
}

document.getElementById("col-1").innerHTML = "<p>" + greeting + " </h1>";




// date

var dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleDateString();

//clock

class DigitalClock {
  constructor(element) {
    this.element = element;
  }

  start() {
    this.update();

    setInterval(() => {
      this.update();
    }, 500);
  }

  update() {
    const parts = this.getTimeParts();
    const minuteFormatted = parts.minute.toString().padStart(2, "0");
    const timeFormatted = `${parts.hour}:${minuteFormatted}`;
    const amPm = parts.isAm ? "AM" : "PM";

    this.element.querySelector(".clock-time").textContent = timeFormatted;
    this.element.querySelector(".clock-ampm").textContent = amPm;
  }

  getTimeParts() {
    const now = new Date();

    return {
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      isAm: now.getHours() < 12
    };
  }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();






