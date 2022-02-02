const player = document.querySelector('.-player-');
const playBtn = document.querySelector('.-play-');
const prevBtn = document.querySelector('.-prev-');
const nextBtn = document.querySelector('.-next-');
const audio = document.querySelector('.-audio-');
const progressLine = document.querySelector('.-progress-line-');
const progress = document.querySelector('.-progress-');
const cover = document.querySelector('.-cover-');
const song = document.querySelector('.-song-');
const time = document.querySelector('.-time-start-');
const endTime = document.querySelector('.-time-end-');
const playerBtn = document.querySelector('.player-btn');

let songIndex = 0;
const artists = ['Slipknot', 'System of a down', 'Skillet'];
const songs = ['Drum Solo', 'Toxicity', 'Hero'];
const songsSrc = ['audio/Track1.mp3', 'audio/Track2.mp3', 'audio/Track3.mp3'];

if(player){
    function loadSong(art, music, way){
        cover.innerHTML = art;
        song.innerHTML = music;
        audio.src = way;
    }
    
    function statusAudio(){
        if(audio.paused){
            audio.play();
            playBtn.querySelector('use').setAttribute('xlink:href', 'icons/sprite.svg#player-pause');
        }else{
            audio.pause();
            playBtn.querySelector('use').setAttribute('xlink:href', 'icons/sprite.svg#player-play');
        }
    }

    playBtn.addEventListener('click', statusAudio);
    
    function nextSong(){
        songIndex++;
        if(songIndex > artists.length - 1){
            songIndex = 0;
        }
        loadSong(artists[0 + songIndex], songs[0 + songIndex], songsSrc[0 + songIndex]);
        statusAudio();
    }

    nextBtn.addEventListener('click', nextSong);
    
    prevBtn.addEventListener('click', () =>{
        songIndex--;
        if(songIndex < 0){
            songIndex = artists.length - 1;
        }
        loadSong(artists[0 + songIndex], songs[0 + songIndex], songsSrc[0 + songIndex]);
        statusAudio();
    });

    function audioTime(){
        percent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${percent}%`;
        let min = Math.floor(audio.currentTime / 60);
        if(min < 10){
            min = '0' + String(min);
        }
        let sec = Math.floor(audio.currentTime % 60);
        if(sec < 10){
            sec = '0' + String(sec);
        }
        time.innerHTML = `${min}:${sec}`;
        endTime.innerHTML = Math.floor(audio.duration / 60) + ":" + ("0" + Math.floor(audio.duration % 60)).slice(-2);;
    }
    
    function setProgress(e){
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    }

    progressLine.addEventListener('click', setProgress);
    
    audio.addEventListener('timeupdate', audioTime);
    
    audio.addEventListener("loadedmetadata", audioTime);

    audio.addEventListener('ended', nextSong);
    
    
    playerBtn.addEventListener('click', () => {
        playerBtn.classList.add('-player-btn-scale-');
        player.classList.add('-player-visible-');
    });
    
    document.addEventListener('scroll', () => {
        playerBtn.classList.remove('-player-btn-scale-');
        player.classList.remove('-player-visible-');
    });

}