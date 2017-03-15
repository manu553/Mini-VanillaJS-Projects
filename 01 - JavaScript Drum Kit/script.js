function playSound()
{
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

	if(!audio) return; // kills function 
	
	key.classList.add("playing");
	audio.currentTime = 0;
	audio.play();

	console.log(key);
}

function removeTransition(event)
{
	if(event.propertyName !== "transform") return;
	console.log(event.propertyName);
	this.classList.remove("playing");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

