 //queue number generation
 let queueNumber = 100;

 function handleRegistration(event) {
     event.preventDefault();
     queueNumber++;
     const name = document.getElementById('name').value;
     showNotification(`Queue Number: Q-${queueNumber} assigned to ${name}`);
     document.getElementById('registration').classList.add('hidden');
 }

 function handleFeedback(event) {
     event.preventDefault();
     const message = document.getElementById('feedbackMessage').value;
     showNotification(`Thank you for your feedback!`);
     event.target.reset();
 }

 function showNotification(message) {
     const notification = document.createElement('div');
     notification.className = 'notification fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg';
     notification.textContent = message;
     document.body.appendChild(notification);
     setTimeout(() => notification.remove(), 3000);
 }

 function toggleMenu() {
     const menu = document.getElementById('mobileMenu');
     menu.classList.toggle('hidden');
 }

 function showSection(sectionId) {
     const sections = ['home', 'registration', 'booking', 'tracking', 'admin'];
     sections.forEach(id => {
         const section = document.getElementById(id);
         section.classList.toggle('hidden', id !== sectionId);
     });
     toggleMenu();
 }

 function handleFormRegistration(event) {
     event.preventDefault();
     const button = event.target.querySelector('button');
     const originalText = button.innerHTML;
     button.innerHTML = '<div class="loading-spinner mx-auto"></div>';

     setTimeout(() => {
         showNotification('Registration successful!');
         button.innerHTML = originalText;
         event.target.reset();
     }, 1500);
 }

 document.addEventListener('DOMContentLoaded', () => {
     showSection('home');
 });

 function toggleChat() {
     let chatContainer = document.getElementById("chat-container");
     chatContainer.style.display = chatContainer.style.display === "block" ? "none" : "block";
 }

 function sendMessage() {
     let userInput = document.getElementById("user-input").value;
     if (!userInput.trim()) return;

     addMessage("user", userInput);
     setTimeout(() => botReply(userInput), 1000);
     document.getElementById("user-input").value = "";
 }

 function addMessage(sender, text) {
     let chatBox = document.getElementById("chat-box");
     let messageDiv = document.createElement("div");
     messageDiv.classList.add(sender);
     messageDiv.innerText = text;
     chatBox.appendChild(messageDiv);
     chatBox.scrollTop = chatBox.scrollHeight;
 }

 function botReply(userMessage) {
     let response = getBotResponse(userMessage.toLowerCase());
     addMessage("bot", response);
 }

 function getBotResponse(input) {
     if (input.includes("emergency")) {
         return "🚨 Please click the emergency button for quick assistance!";
     } else if (input.includes("doctor")) {
         return "We have specialists available. What department do you need? (e.g., cardiology, neurology)";
     } else if (input.includes("appointment")) {
         return "You can book an appointment via the RayCure website.";
     } else if (input.includes("medicine")) {
         return "Please consult a doctor for proper prescriptions.";
     } else {
         return "I'm here to help! Please ask about appointments, emergencies, or departments.";
     }
 }
 function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
  }
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service Worker registered'))
      .catch(error => console.error('Service Worker error:', error));
  }
  document.getElementById("emergency-btn").addEventListener("click", function () {
  document.getElementById("emergency-form").style.display = "block";
});

  
 
