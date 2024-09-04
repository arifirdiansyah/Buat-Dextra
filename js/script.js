// List of image sources
const images = [
  'image/tessssss.jpg',
  'image/3.jpeg',
  'image/t.jpeg',
  'image/4.jpeg',
  'image/5.jpg',
  'image/6.jpg',
  'image/7.jpg',
  'image/8.jpg',
  'image/9.jpg',
  'image/10.jpeg',
  'image/11.jpg'
];
let currentImageIndex = 0;

// Function to handle form submission and start background music
function getNama() {
  var nama = document.getElementById('mynama').value;
  if (nama.trim() === '') {
    alert('Harap isi nama terlebih dahulu!');
    return;
  }
  
  localStorage.setItem('nama', nama);
  $('#tombol').modal('hide'); // Close the modal after getting the name

  var music = document.getElementById('background-music');
  music.play(); // Start playing the background music

  tampilkanPesan(); // Call function to start showing messages
}

// Function to display messages with typing effect
function tampilkanPesan() {
  var namakamu = localStorage.getItem('nama') || 'User';

  // Hide initial text and button after name is input
  document.getElementById('ketikawal').style.display = 'none';
  document.getElementById('btnAwl').style.display = 'none';

  // Initialize Typed.js for typing effect
  var typed = new Typed('#typed-messages', {
    strings: [
      'Halooo ' + namakamu + '.',
      'Sebenarnya ni agak alayy dikit sii 🗿',
          'Aku mau ngomong serius nii yaaa',
          'Sebenarnya aku tuu udah suka kau tuu dari 5 tahun laluuu',
          'Tapi sayang pastu aku di ninjaaa',
          'Dari pertama kali liat pas habis senam sii wkwkw',
          'Langsung aja dah, aku gabisa buat kata kata soalnya',
         'Jadi, Annisa Dextraliani Pertiwi apakah kamu mau menjadii pacarkuuuuuu?'
    ],
    typeSpeed: 100, // Speed of typing (ms per character)
    startDelay: 500, // Delay before typing starts
    backSpeed: 50, // Speed of deleting (ms per character)
    backDelay: 1000, // Delay before starting deletion
    loop: false, // Do not loop the animation
    showCursor: false, // Hide cursor
    onComplete: function() {
      document.getElementById('buttons-container').style.display = 'block';
      
      // Stop music after messages are done
      var music = document.getElementById('background-music');
      music.pause();
      music.currentTime = 0; // Reset music position to the beginning
    }
  });
}

// Function to display surprise message with typing effect
function tampilkanPesanCerita() {
  setTimeout(function() {
    document.getElementById('surprise-container').style.display = 'flex';
    
    // Initialize Typed.js for story message typing effect
    var storyMessage = new Typed('#story-message', {
      strings: ['LET\'S MAKE A LOT OF STORIES❤️'],
      typeSpeed: 100, // Speed of typing (ms per character)
      startDelay: 500, // Delay before typing starts
      backSpeed: 50, // Speed of deleting (ms per character)
      backDelay: 1000, // Delay before starting deletion
      loop: true, // Loop the animation indefinitely
      showCursor: true // Show cursor
    });
  }, 1000); // Delay before showing the surprise message
}

// Function to change the image source
function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById('surprise-image').src = images[currentImageIndex];
}

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
  const noBtn = document.getElementById('noBtn');

  // Add event listener to move the "No" button around when hovered
  noBtn.addEventListener('mouseenter', function() {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });

  // Add event listener for "Yes" button click
  document.getElementById('yesBtn').addEventListener('click', function() {
    // Hide messages and buttons
    document.getElementById('typed-messages').style.display = 'none';
    document.getElementById('buttons-container').style.display = 'none';

    // Show the gift box
    var giftBox = document.getElementById('gift-box');
    giftBox.style.display = 'flex';

    // Start playing the new music
    var newMusic = document.getElementById('new-music');
    newMusic.play();

    // Show the surprise message and confetti
    tampilkanPesanCerita();
  });

  // Add event listener for "No" button click
  document.getElementById('noBtn').addEventListener('click', function() {
    // Hide messages and buttons
    document.getElementById('typed-messages').style.display = 'none';
    document.getElementById('buttons-container').style.display = 'none';
  });

  // Add event listener for gift box click to show surprise image
  document.getElementById('gift-box').addEventListener('click', function() {
    document.getElementById('surprise-container').style.display = 'flex';
    document.getElementById('surprise-image').addEventListener('click', changeImage);
  });
});
