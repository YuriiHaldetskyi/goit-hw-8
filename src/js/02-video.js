import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoFrame = document.querySelector('#vimeo-player');
const LOCAL_KEY = 'videoplayer-current-time';
const player = new Player(videoFrame);

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime({ seconds }) {
  localStorage.setItem(LOCAL_KEY, seconds);
  console.log(seconds);
}

setCurrentTime();

function setCurrentTime() {
  const savedTime = localStorage.getItem(LOCAL_KEY);
  if (!savedTime) {
    return;
  }
  player.setCurrentTime(savedTime);
}
