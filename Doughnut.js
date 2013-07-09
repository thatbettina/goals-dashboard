
//Get the context of the canvas element we want to select

var pieData = [
		{
		    value: 10,
		    color: "#2ecc71",
		    label: 'IQS',
		    labelColor: 'white',
		    labelFontSize: '12',
		    labelAlign: 'center'
		},
		{
		    value: 35,
		    color: "#e74c3c",
		    label: 'Android app',
		    labelColor: '#FFFFFF',
		    labelFontSize: '12',
		    labelAlign: 'center'
		},
		{
		    value: 305,
		    color: "#e67e22",
		    label: 'ALG',
		    labelColor: '#FFFFFF',
		    labelFontSize: '12',
		    labelAlign: 'center'
		},
		{
		    value: 3,
		    color: "#16a085",
		    label: 'ROI',
		    labelColor: '#000000',
		    labelFontSize: '4',
		    labelAlign: 'center'
		}
];

var options = {
    tooltips: {
        fontSize: '75%'
    }
};

var myChart = new Chart(document.getElementById("moneyChart").getContext("2d"), options);
var myPie = myChart.Pie(pieData, {
    animationSteps: 100,
    animationEasing: 'easeOutBounce'
});

var lineData = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label:"Lines Coded",
                    fillColor: "#9b59b6",
                    strokeColor: "#8e44ad",
                    pointColor: "#8e44ad",
                    pointStrokeColor: "#fff",
                    data: [0, 0, 0, 0, 17, 22, 8]
                }
            ]
        }

myChart = new Chart(document.getElementById("codeChart").getContext("2d"), options);
var myLine = myChart.Line(lineData, {
    animation: true,
    animationSteps: 100,
    animationEasing: 'easeOutQuart'
});

var polarData = [
	        {
                label:"Yoga",
	            value: 5,
	            color: "#3498db"
	        },
	        {
                label:"Meditation",
	            value: 15,
	            color: "#d35400"
	        },
	        {
                label:"Wall Push-ups",
	            value: 22,
	            color: "#16a085"
	        },
	        {
                label:"Journaling",
	            value: 26,
	            color: "#c0392b"
	        }
        ];

        myChart = new Chart(document.getElementById("healthChart").getContext("2d"), options);
        var myLine = myChart.PolarArea(polarData, {
            animation: true,
            animationSteps: 100,
            animationEasing: 'easeOutQuart'
        });