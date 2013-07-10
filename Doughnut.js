
//Get the context of the canvas element we want to select

// var pieData = [
// 		{
// 		    value: 410,
// 		    color: "#2ecc71",
// 		    label: 'IQS',
// 		    labelColor: 'white',
// 		    labelFontSize: '12',
// 		    labelAlign: 'center'
// 		},
// 		{
// 		    value: 200,
// 		    color: "#e74c3c",
// 		    label: 'App',
// 		    labelColor: '#FFFFFF',
// 		    labelFontSize: '12',
// 		    labelAlign: 'center'
// 		},
// 		{
// 		    value: 2000,
// 		    color: "#e67e22",
// 		    label: 'ALG',
// 		    labelColor: '#FFFFFF',
// 		    labelFontSize: '12',
// 		    labelAlign: 'center'
// 		},
// 		{
// 		    value: 1500,
// 		    color: "#16a085",
// 		    label: 'ROI',
// 		    labelColor: '#000000',
// 		    labelFontSize: '4',
// 		    labelAlign: 'center'
// 		}
// ];

// var options = {
//     tooltips: {
//         fontSize: '75%'
//     }
// };

// var myChart = new Chart(document.getElementById("moneyChart").getContext("2d"), options);
// var myPie = myChart.Pie(pieData, {
//     animationSteps: 100,
//     animationEasing: 'easeOutBounce'
// });

var lineData = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label:"Lines Coded",
                    fillColor: "#9b59b6",
                    strokeColor: "#bdc3c7",
                    pointColor: "#34495e",
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

var radarData = {
	labels : ["Yoga","Meditation","Eating Vegan","Sleeping 8 hours","Journaling", "Push-Ups"],
	datasets : [
		{
			fillColor : "#95a5a6",
			strokeColor : "#bdc3c7",
			pointColor : "#34495e",
			pointStrokeColor : "#000000",
			data : [3, 5, 4, 1, 6, 5]
		},
        {
            fillColor : "#e74c3c",
            strokeColor : "#bdc3c7",
            pointColor : "#34495e",
            pointStrokeColor : "#000000",
            data : [0, 2, 4, 2, 7, 6]
        }
	]
}

myChart = new Chart(document.getElementById("healthChart").getContext("2d"), options);
    var myRadar = myChart.Radar(radarData, {
        animation: true,
        animationSteps: 100,
        animationEasing: 'easeOutQuart'
        });