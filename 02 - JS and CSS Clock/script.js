const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const currentTime = document.querySelector('.currentTime');


function setDate()
{
	const now = new Date();
	
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds/60) * 360) + 90;
	if(secondsDegrees == 450);
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes/60) * 360) + 90;
	minHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hours = now.getHours();
	const hourDegrees = ((hours/12) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

	var AM_PM = "";

	if(hours > 12)
	{
		AM_PM = "PM";
	} else {
		AM_PM = "AM";
	}

	currentTime.innerHTML = (hours % 12 || 12) + " : " + minutes + " : " + seconds + " " + AM_PM;
}

setInterval(setDate, 1000);

