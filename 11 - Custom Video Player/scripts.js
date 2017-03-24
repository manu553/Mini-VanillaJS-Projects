// Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const playButton = player.querySelector('.toggle');
const fullScreenButton = player.querySelector('.fullscreen');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//console.dir(video);


//Functions
function togglePlay()
{
	if(video.paused)
	{
		video.play();
	} else {
		video.pause();
	}
}

function updateButton()
{
	const icon = this.paused ? '►' : '❚ ❚';
	playButton.textContent = icon;
	console.log('button updated');
}

function skip()
{
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate()
{
	video[this.name] = this.value;
}

function handleProgress()
{
	const percentComplete = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percentComplete}%`;
}

function scrub(event)
{
	const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

function toggleFullScreen()
{
	console.log('hi :D')
	player.webkitRequestFullscreen();
}

//Event Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);


playButton.addEventListener('click', togglePlay);
skipButtons.forEach(skipbutton => skipbutton.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (event) => {
	if(mousedown)
	{
		scrub(event);
	}
});
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreenButton.addEventListener('click', toggleFullScreen);