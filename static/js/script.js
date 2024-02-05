const body = document.body;
const box = document.querySelectorAll(".audio")
const btn = document.querySelector(".btn");
const navItems = document.querySelectorAll(".nav-iteam")

btn.addEventListener("click", ()=>{
    body.style.background = "radial-gradient(788px at 0.7% 3.4%, rgb(164, 231, 192) 0%, rgb(255, 255, 255) 90%)";
    for(i=0; i<=box.length; i++){
        let presentBox = box[i]
        presentBox.style.backgroundColor = "#FFF"
        presentBox.style.color = "black"
        presentBox.style.boxShadow = ".1px .1px 14px 0.1px #a19f9f"
        btn.innerHTML = "light"
    }
})
document.addEventListener('DOMContentLoaded', (event) => {
    // Add event listeners to your cards
    document.querySelectorAll('.audio').forEach(card => {
      card.addEventListener('click', function() {
        // Call a function to update and show the modal
        updateAndShowModal(this.id);
      });
    });
  });
  
function updateAndShowModal(cardId) {
    const songData = {
        'card1': [
          { title: 'Shape of You', duration: '3:53', album: '÷ (Deluxe)', dateAdded: '2019-12-17' },
          // More songs...
        ],
        // Other cards...
      };
  
    // Find the table body to update
    const tableBody = document.querySelector('#songs-list');
    
    // Clear previous content
    tableBody.innerHTML = '';
    
    // Check if there is data for the card
    if(songData.hasOwnProperty(cardId)) {
      // Add songs to the table body
      songData[cardId].forEach((song, index) => {
        tableBody.innerHTML += `
          <tr>
            <th scope="row">${index + 1}</th>
            <td>${song.title}</td>
            <td>${song.album}</td>
            <td>${song.dateAdded}</td>
            <td>${song.duration}</td>
            <td>
            <i class="far fa-play-circle play-icon" onclick="playSong(this)"></i>
          </td>
          
          <td>
          <i class="far fa-heart like-icon" onclick="toggleLike(this)"></i>
        </td>
          </tr>
        `;
      });
    }
  }
  function toggleLike(element) {
    element.classList.toggle('fas'); // Solid heart
    element.classList.toggle('far'); // Regular heart
  }
// Global state
let isShuffle = false;
let isPlaying = false;
let isRepeat = false;
let currentSongIndex = 0;
let volume = 50; // Assuming a volume level from 0 to 100
let songs = []; // Assuming this is an array of your songs

// Utility function to shuffle an array (Fisher-Yates Shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  const shuffleIcon = document.querySelector('.shuffle-icon');
  shuffleIcon.classList.toggle('active', isShuffle);
  if (isShuffle) {
    // Shuffle the songs array
    shuffleArray(songs);
  } else {
    // Unshuffle or reorder the songs array to its original order
    // This would require you to have a copy of the original order stored
  }
}

function previousSong() {
  if (isShuffle) {
    currentSongIndex = Math.floor(Math.random() * songs.length);
  } else {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  }
  playSong(currentSongIndex);
}

function playPauseSong() {
  isPlaying = !isPlaying;
  const playPauseIcon = document.querySelector('.fa-play-circle');
  if (isPlaying) {
    playPauseIcon.classList.remove('fa-play-circle');
    playPauseIcon.classList.add('fa-pause-circle');
    // Code to play the song
  } else {
    playPauseIcon.classList.add('fa-play-circle');
    playPauseIcon.classList.remove('fa-pause-circle');
    // Code to pause the song
  }
}

function nextSong() {
  if (isShuffle) {
    currentSongIndex = Math.floor(Math.random() * songs.length);
  } else {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  }
  playSong(currentSongIndex);
}

function toggleRepeat() {
  isRepeat = !isRepeat;
  const repeatIcon = document.querySelector('.fa-redo');
  repeatIcon.classList.toggle('active', isRepeat);
  // Code to toggle repeat mode
}

function lowerVolume() {
  volume = Math.max(volume - 10, 0);
  updateVolume();
}

function increaseVolume() {
  volume = Math.min(volume + 10, 100);
  updateVolume();
}

function updateVolume() {
  // Code to set the volume
  const volumeControl = document.getElementById('volume-control');
  volumeControl.value = volume;
  // Additional code to update the audio element's volume
}

// Placeholder for playSong function
function playSong(index) {
  currentSongIndex = index;
  // Code to set the audio source and play it
  // Update UI accordingly
}
  
