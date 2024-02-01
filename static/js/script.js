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
  
  function playSong(songUrl) {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = "https://open.spotify.com/playlist/1kwr4QbMOZHqzUhsumPedx"; // Set the source of the song to play
    audioPlayer.play(); // Start playing the song
  }
  