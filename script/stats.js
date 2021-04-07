//Hamburger menu code

const menuIcon = document.querySelector
('.hamburger-menu');

const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});
//charts

var ctx = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
        	label: '% Water recycled',
            backgroundColor: '#ADADAD',
            borderColor: '#707070',
            data: [90, 92, 95, 98, 93, 88, 89]
        }]
    },

    // Configuration options go here
    options: {
    	layout: {
            padding: {
                left: 0,
                right: 30,
                top: 0,
                bottom: 0
            }
        }
    }
});


//chart 2

var ctx = document.getElementById('chart2');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: '# of captured stormtroopers',
            data: [12, 19, 3, 5, 2, 3, 14],
            backgroundColor: [
                '#ADADAD',
                '#ADADAD',
                '#ADADAD',
                '#ADADAD',
                '#ADADAD',
                '#ADADAD',
                '#ADADAD'
            ],
            borderColor: [
                '#707070',
                '#707070',
                '#707070',
                '#707070',
                '#707070',
                '#707070',
                '#707070'
            ],
            borderWidth: 1
        }]
    },
    options: {

       layout: {
            padding: {
                left: 20,
                right: 20,
                top: 0,
                bottom: 0
            }
        }
    }
});


//chart 3

new Chart(document.getElementById("chart3"),
	{"type":"doughnut","data":
	{"labels":["Nitrogen","Oxygen","Argon"],"datasets":[
	{"label":"My First Dataset","data":
	[78,21,1],"backgroundColor":
	["#707070","#8F8F8F","#ADADAD"]
}
]}
});