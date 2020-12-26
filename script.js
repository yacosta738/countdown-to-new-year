//prevent loading error
	document.getElementById('warning').remove();

	//short getElementById
	elem = function (id){ return document.getElementById(id); }
	
	//count until date
	var newYearDate = new Date("Jan 1, 2021 00:00:00").getTime();
	
	//title angles
	var todayDate = new Date().getTime();
	var todaySecondsLeft = (newYearDate - todayDate) / 1000;
	var todayDays = parseInt(todaySecondsLeft / 86400);
	var randMer = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
	var randVen = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
	var randMar = Math.floor(Math.random() * (16 - 8 + 1)) + 8;
	var style = document.createElement('style'); style.innerHTML = '.orbit-mercury {transform: translate(-50%, -50%) rotate('+randMer+'deg)} .orbit-venus {transform: translate(-50%, -50%) rotate('+randVen+'deg)} .orbit-mars {transform: translate(-50%, -50%) rotate('+randMar+'deg)} .planet-mercury {transform:rotate(-'+randMer+'deg)} .planet-venus {transform:rotate(-'+randVen+'deg)} .planet-mars {transform:rotate(-'+randMar+'deg)} .planet-earth {transform:rotate('+todayDays+'deg)} .planet-venus {transform:rotate(-'+randVen+'deg)} '; document.head.appendChild(style);
	
	//countdown vars
	var days, hours, minutes, seconds;
	
	//countdown 
	var countDown = setInterval(function() {

		var rightNow = new Date().getTime();
		var timeTo = newYearDate - rightNow;
		
		days = Math.floor(timeTo / (1000 * 60 * 60 * 24));
		hours = Math.floor((timeTo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((timeTo % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((timeTo % (1000 * 60)) / 1000);
		
		if(hours<10)hours="0"+hours; 
        if(minutes<10)minutes="0"+minutes; 
        if(seconds<10)seconds="0"+seconds; 
		
		elem("cronoNewYear").innerHTML = days + " <span>DAYS</span> &nbsp;" + hours + ":" + minutes + ":" + seconds + " <span>LEFT</span>";
		var newDays;		
		if (days<0){ elem("cronoNewYear").style.display='none';	newDays = days.toString().substr(1); } else { newDays="-"+days; }
		elem("position-earth").style.transform = 'translate(-50%, -50%) rotate('+newDays+'deg';
		
		var solsDays;
		var cDays=days-11;			
		if (cDays<0){ elem("cronoWinterSolstice").style.display='none';	} else { solsDays=cDays	}
		elem("cronoWinterSolstice").innerHTML = solsDays + " <span>DAYS</span> &nbsp;" + hours + ":" + minutes + ":" + seconds + " <span>LEFT</span>";
		
		var opacityList = document.querySelectorAll('.planet');
		for(i=0;i<opacityList.length;i++){
			opacityList[i].style.opacity = '1';
		}
		
		if (timeTo < 0) {
			clearInterval(countDown);
		}
		
	}, 1000);