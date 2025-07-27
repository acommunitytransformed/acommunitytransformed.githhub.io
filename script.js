      //   section for bd of hero landing campaign-section
        
        const backgroundImage = document.querySelector('.background-image');
    const animatedText = document.querySelector('.animated-text');

    if (backgroundImage && animatedText) {
      const images = [
        './gallery/see.jpg' ,             
        './gallery/water1.jpeg',
        
        './gallery/wells.jpg', 
        './gallery/water4.jpeg',   
        './gallery/see.jpg'
      ];
      const texts = [
        'A COMMUNITY TRANSFORMED - ACT MARATHON ',
        'To Contribute Buy Kits or Donate',
          'To Contribute Buy Kits or Donate',
        
        'Become ACT Member to Change the World',
        'Welcome to our Website'
      ];
      let currentImageIndex = 0;

      setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        backgroundImage.style.backgroundImage = `url(${images[currentImageIndex]})`;
        animatedText.textContent = texts[currentImageIndex];
        animatedText.classList.remove('animated-text');
        animatedText.offsetWidth;                  
        animatedText.classList.add('animated-text');
      }, 5000);
    } else {
      console.error('Elements not found');
    }
    
    
    //Whatsapp
    
         const whatsappHomeIcon = document.getElementById('whatsapp-home-icon');
const whatsappPopup = document.getElementById('whatsapp-popup');
const closePopupButton = document.getElementById('close-popup');
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');
const typingEffect = document.getElementById('typing-effect');
const emojiPopup = document.getElementById('emoji-popup');
const emojiIcon = document.getElementById('emoji-icon');

// Show the chat pop-up
whatsappHomeIcon.addEventListener('click', () => {
    whatsappPopup.style.display = 'flex';
});

// Close the chat pop-up
closePopupButton.addEventListener('click', () => {
    whatsappPopup.style.display = 'none';
});

// Add message to the chat window and then redirect to WhatsApp API
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        // Display message in the chat window
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'sent');
        userMessage.innerHTML = `
            <div class="message-bubble">${message}</div>
            <span class="blue-tick">✔✔</span>
        `;
        chatMessages.appendChild(userMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message

        // Display automated reply thanking the user
        setTimeout(() => {
            const replyMessage = document.createElement('div');
            replyMessage.classList.add('message', 'received');
            replyMessage.innerHTML = `
                <img src="profile-pic.jpg" alt="Avatar">
                <div class="message-bubble">Thank you for your valuable feedback. Together, we can make a difference for Busiro East!</div>
            `;
            chatMessages.appendChild(replyMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        // Redirect to WhatsApp API
        const phoneNumber = '+256758296217'; // Updated WhatsApp number
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

        // Clear the input field
        messageInput.value = '';
    } else {
        alert('Please enter a message.');
    }
});

// Emoji popup toggle
emojiIcon.addEventListener('click', () => {
    emojiPopup.style.display = emojiPopup.style.display === 'block' ? 'none' : 'block';
});

// Append emoji to input field
emojiPopup.addEventListener('click', (event) => {
    if (event.target.tagName === 'SPAN') {
        messageInput.value += event.target.textContent;
        emojiPopup.style.display = 'none'; // Close emoji popup after selection
    }
});

// Remove typing effect after animation
setTimeout(() => {
    typingEffect.classList.remove('typing');
}, 3000);
const whatsappIcon = document.querySelector('.whatsapp-home-icon');

// Add scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Change "200" to the desired scroll height
        whatsappIcon.style.display = 'flex'; // Show the button
        whatsappIcon.style.animation = 'slideInFromRight 0.5s ease forwards'; // Trigger the animation
    } else {
        whatsappIcon.style.display = 'none'; // Hide the button
    }
});

// Initially hide the button
whatsappIcon.style.display = 'none';
 
 
 
   //To Top button function
var backBtn = document.querySelector(".back-btn");
window.addEventListener("scroll", function() {
if (this.pageYOffset > 100) {
backBtn.classList.add("active");
} else {
backBtn.classList.remove("active");
}
});
backBtn.addEventListener("click", function() {
window.scrollTo({
top: 0,
behavior: 'smooth'
})
});

 const audio = document.getElementById('background-audio');
    const icon = document.getElementById('toggle-icon');

    function toggleAudio() {
      if (audio.paused) {
        audio.play();
        icon.textContent = 'volume_off';
      } else {
        audio.pause();
        icon.textContent = 'volume_up';
      }
    }
  

     //Shuffle Carousel
    const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
let intervalId;

carouselItems[currentSlide].classList.add('active');

intervalId = setInterval(() => {
  carouselItems[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % carouselItems.length;
  carouselItems[currentSlide].classList.add('active');
}, 3000);

prevBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  carouselItems[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
  carouselItems[currentSlide].classList.add('active');
  setTimeout(() => {
    intervalId = setInterval(() => {
      carouselItems[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % carouselItems.length;
      carouselItems[currentSlide].classList.add('active');
    }, 3000);
  }, 1000);
});

nextBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  carouselItems[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % carouselItems.length;
  carouselItems[currentSlide].classList.add('active');
  setTimeout(() => {
    intervalId = setInterval(() => {
      carouselItems[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % carouselItems.length;
      carouselItems[currentSlide].classList.add('active');
    }, 3000);
  }, 1000);
});


document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {                     document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });
  
  var listView = document.querySelector('.list-view');
  var gridView = document.querySelector('.grid-view');
  var projectsList = document.querySelector('.project-boxes');
  
  listView.addEventListener('click', function () {
    gridView.classList.remove('active');
    listView.classList.add('active');
    projectsList.classList.remove('jsGridView');
    projectsList.classList.add('jsListView');
  });
  
  gridView.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    projectsList.classList.remove('jsListView');
    projectsList.classList.add('jsGridView');
  });
  
  document.querySelector('.messages-btn').addEventListener('click', function () {
    document.querySelector('.messages-section').classList.add('show');
  });
  
  document.querySelector('.messages-close').addEventListener('click', function() {
    document.querySelector('.messages-section').classList.remove('show');
  });
});

