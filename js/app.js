// Start Jquery Area
$(document).ready(function(){
	// Start Header
	// start nav bar
	$('.navbuttons').click(function(){
		$(this).toggleClass('crossxs');
	});

	// end nav bar


	// End Header


// Start Login Box
	$('#open-btn').click(function(){
		document.getElementById('form-popup').style.display="block";


	});

	$('#formclose-btn').click(function(){
		document.getElementById('form-popup').style.display = "none";
	})
// End Login Box


})




















// End Jquery Area


// Start Javascript Area
 // Start Student Counter Section
 var getcountervalues = document.querySelectorAll('.countervalues');
console.log(getcountervalues);

getcountervalues.forEach(function(getcountervalue){
	getcountervalue.innerText = 0;

	const updatecounter = function(){
		// console.log('i am working');

		const getcttarget = +getcountervalue.getAttribute('data-target');
		// console.log(typeof getcttarget);//+ or Number()


		const getctcontent = + getcountervalue.innerText;
		// console.log(typeof getctcontent);


		const incnumber = getcttarget / 100;
		// console.log(incnumber);

		if(getctcontent < getcttarget){
			getcountervalue.innerText = getctcontent+incnumber;

			setTimeout(updatecounter,100)
		}
	}

	updatecounter();

});





 // Start Student Counter Section

// Start Rating Section 

// Start google code for chart

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar',     8],
          ['Thailand',      2],
          ['Signapore',  4],
          ['Indonesia', 2],
          ['Srilaka',    8]
        ]);

        var options = {
          title: 'International Students',
          // is3D : true,
          // poleHole : 0.4,
          // width: '100%',
          // height :'100%'
          width:450,
          height:400
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
// Start google code for chart

// End Rating Section



const getyear = document.getElementById('getyear');
const getfullyear = new Date().getUTCFullYear();
getyear.textContent = getfullyear
;




// End Javascript Area

// 25CT