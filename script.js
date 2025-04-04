// script.js
// Theme toggle logic
const themeToggleBtn = document.getElementById("themeToggle");

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);

  // Add rotation animation
  themeToggleBtn.classList.add("rotate");

  // Change icon after rotation
  setTimeout(() => {
    themeToggleBtn.textContent = newTheme === "dark" ? "🌙" : "☀️";
    themeToggleBtn.classList.remove("rotate");
  }, 500);
}

// Enhanced AI Chat logic
function sendMessage() {
  const userInput = document.getElementById('userInput');
  const chatWindow = document.getElementById('chatWindow');
  const message = userInput.value.trim();
  
  if (message === '') return;

  // Add user message to chat
  addMessage(message, 'user');
  userInput.value = '';
  
  // Process the message and get bot response
  setTimeout(() => {
    const botResponse = generateBotResponse(message);
    addMessage(botResponse, 'bot');
  }, 500); // Simulate thinking time
}

function addMessage(text, sender) {
  const chatWindow = document.getElementById('chatWindow');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;
  
  // Add timestamp
  const timeSpan = document.createElement('span');
  timeSpan.className = 'message-time';
  timeSpan.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  // Format message content
  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  contentDiv.textContent = text;
  
  messageDiv.appendChild(timeSpan);
  messageDiv.appendChild(contentDiv);
  chatWindow.appendChild(messageDiv);
  
  // Auto-scroll to latest message
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function generateBotResponse(userMessage) {
  const lowerMsg = userMessage.toLowerCase();
  
  // Enhanced response logic
  const responses = {
    greeting: ["Hello! How can I help you today?", "Hi there! What can I do for you?", "Hey! What brings you here today?"],
    farewell: ["Goodbye! Have a great day!", "See you later!", "Come back anytime!"],
    thanks: ["You're welcome!", "Happy to help!", "My pleasure!"],
    weather: ["The weather is great today! Perfect for exploring.", "It's a bit cloudy, but still a good day to be outside." ],
    Rain: ["It's raining, so don't forget your umbrella!", "Looks like a rainy day. Stay dry!"],
    sunny: ["It's sunny and bright! A perfect day for a tour.", "The sun is shining! Great time to explore."],
    Yash: ["Yash is a great friend! How can I help you with him?", "Yash is awesome! What would you like to know about him?"],
    Yuvraj: ["Yuvraj is a fantastic person! How can I assist you with him?", "Yuvraj is amazing! What do you want to know about him?"],
    Vivek: ["Vivek is a wonderful person! How can I assist you with him?", "Vivek is amazing! What do you want to know about him?"],
    Aryan: ["Aryan is a great friend! How can I help you with him?", "Aryan is awesome! What would you like to know about him?"],
    Aman: ["Aman is a fantastic person! How can I assist you with him?", "Aman is amazing! What do you want to know about him?"],
    Abi: ["Abi is a wonderful person! How can I assist you with him?", "Abi is amazing! What do you want to know about him?"],
    Rohit : ["Rohit is a great friend! How can I help you with him?", "Rotit is awesome! What would you like to know about him?"],
    Tejashwi: ["Tejashwi is a wonderful person! How can I assist you with him?", "Tejashwi is amazing! What do you want to know about him?"],
    name: [" You can call me Yukti Bot"],
    welcome: ["Welcome to Travally! How can I assist you today?", "Glad to have you here! What would you like to know?"],
    food: ["There are many great places to eat around here. What type of cuisine are you interested in?", "You can find local delicacies and international cuisine nearby."],
    transport: ["You can use local buses, auto-rickshaws, or taxis for transport. Do you need help with directions?", "Public transport is available, and I can help you find the best route."],
    safety: ["The area is generally safe, but always be aware of your surroundings. Do you have specific concerns?", "It's a safe place, but it's always good to stay cautious."],
    help: ["I can help with general questions. Try asking about our services, products, or company information.", "Feel free to ask me anything! I'm here to assist you."],
    location: ["Please provide a specific location or landmark you are interested in.", "I can help with directions. Where would you like to go?"],
    foodWalk: ["Food walks are a great way to explore local cuisine! Would you like recommendations?", "I can suggest some popular food spots for your food walk."],
    studyBuddy: ["Looking for a study buddy? I can help you find someone with similar interests!", "Study buddies can be great! What subjects are you interested in?"],
    sports: ["We have excellent sports facilities! What sport are you interested in?", "You can find various sports activities around here."],
    buddy: ["You can find buddies for various activities! What are you looking for?", "I can help you connect with others who share your interests."],
    video: ["Check out our video section for some amazing travel content!", "We have a great selection of travel videos!"],
    Cookie: ["Cookie is a  girl who can help you with your queries. Just ask!","You’re my favorite notification in this chaotic life. 📱💬","You’re like WiFi—I can’t function without you. 📶😂" ," You’re the kind of friend who makes bad days good and good days unforgettable. Love you! 💖" ],
    tourism: {
      rajgir: "Rajgir is an ancient city in Bihar, linked to Lord Buddha and Lord Mahavira. Nearby places: Vishwa Shanti Stupa, Hot Springs, Son Bhandar Caves.",
      nalanda: "Nalanda University was one of the world's oldest universities (5th-12th century CE). Nearby: Xuanzang Memorial Hall, Nalanda Archaeological Museum.",
      bodh_gaya: "Bodh Gaya is where Gautama Buddha attained enlightenment. Major attractions: Mahabodhi Temple, Great Buddha Statue, Sujata Stupa.",
      patna: "Patna, the capital of Bihar, is one of the world's oldest continuously inhabited cities. Nearby attractions: Golghar, Patna Museum, Takht Sri Patna Sahib."
    },
    group_project: ["Group projects can be challenging but rewarding! How can I assist you with yours?", "Need help with your group project? I'm here to help!"],
    study_buddy: ["Looking for a study buddy? I can help you find someone with similar interests!", "Study buddies can be great! What subjects are you interested in?"],
    default: ["I'm still learning. Can you ask that differently?", "Interesting question! I'll make sure to learn about that.", "I'm not sure I understand. Could you rephrase that?"]
  };

  if (/(hello|hi|hey)/i.test(lowerMsg)) {
    return randomChoice(responses.greeting);
  } else if (/(bye|goodbye|see you)/i.test(lowerMsg)) {
    return randomChoice(responses.farewell);
  } else if (/(group|project|capstone)/i.test(lowerMsg)) {
    return randomChoice(responses.group_project);
  } else if (/(Yash)/i.test(lowerMsg)) {
    return randomChoice(responses.Yash);
  } else if (/(Yuvraj)/i.test(lowerMsg)) {
    return randomChoice(responses.Yuvraj);
  } else if (/(Vivek)/i.test(lowerMsg)) {
    return randomChoice(responses.Vivek);
  } else if (/(Aryan)/i.test(lowerMsg)) {
    return randomChoice(responses.Aryan);
  } else if (/(Aman)/i.test(lowerMsg)) {
    return randomChoice(responses.Aman);
  } else if (/(Abi)/i.test(lowerMsg)) {
    return randomChoice(responses.Abi);
  } else if (/(Rohit)/i.test(lowerMsg)) {
    return randomChoice(responses.Rohit);
  } else if (/(Tejashwi)/i.test(lowerMsg)) {
    return randomChoice(responses.Tejashwi);
  } else if (/(weather|rain|sunny)/i.test(lowerMsg)) {
    return randomChoice(responses.weather);
  } else if (/(yukti bot|yukti)/i.test(lowerMsg)) {
    return randomChoice(responses.name);
  } else if (/(rajgir|nalanda|bodh gaya|patna)/i.test(lowerMsg)) {
    return responses.tourism[lowerMsg];
  } else if (/(thank|thanks|appreciate)/i.test(lowerMsg)) {
    return randomChoice(responses.thanks);
  } else if (/(tourism|tourist|travel)/i.test(lowerMsg)) {
    return randomChoice(responses.tourism);
  } else if (/(food|restaurant|eat)/i.test(lowerMsg)) {
    return randomChoice(responses.food);
  } else if (/(transport)/i.test(lowerMsg)) {
    return randomChoice(responses.transport);
  } else if (/(safety|secure|safe)/i.test(lowerMsg)) {
    return randomChoice(responses.safety);
  } else if (/(help|support)/i.test(lowerMsg)) {
    return randomChoice(responses.help);
  } else if (/(location|where)/i.test(lowerMsg)) {
    return randomChoice(responses.location);
  } else if (/(food walk|foodwalk)/i.test(lowerMsg)) {
    return randomChoice(responses.foodWalk);
  } else if (/(study buddy|studybuddy)/i.test(lowerMsg)) {
    return randomChoice(responses.studyBuddy);
  } else if (/(sports|sports facilities)/i.test(lowerMsg)) {
    return randomChoice(responses.sports);
  } else if (/(buddy|find buddy)/i.test(lowerMsg)) {
    return randomChoice(responses.buddy);
  } else if (/(video|videos)/i.test(lowerMsg)) {
    return randomChoice(responses.video);
  } else if (/(rajgir|rajgir tourism)/i.test(lowerMsg)) {
    return responses.tourism.rajgir;
  } else if (/(nalanda|nalanda tourism)/i.test(lowerMsg)) {
    return responses.tourism.nalanda;
  } else if (/(bodh gaya|bodhgaya|bodh gaya tourism)/i.test(lowerMsg)) {
    return responses.tourism.bodh_gaya;
  } else if (/(patna|patna tourism)/i.test(lowerMsg)) {
    return responses.tourism.patna;
  } else if (/(welcome|hi there|greetings)/i.test(lowerMsg)) {
    return randomChoice(responses.welcome);
  } else if (/(goodbye|see you later|take care)/i.test(lowerMsg)) {
    return randomChoice(responses.farewell);
  } else if (/(help|assist|support)/i.test(lowerMsg)) {
    return randomChoice(responses.help);
  } else if (/(time|current time)/i.test(lowerMsg)) {
    return `The current time is ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  } else if (/(date|today)/i.test(lowerMsg)) {
    return `Today is ${new Date().toLocaleDateString()}`;   
  } else if (/(interest|hobby)/i.test(lowerMsg)) {
    return "What are your interests? I can help you find buddies with similar hobbies!";
  } else if (/(thanks|thank you|appreciate)/i.test(lowerMsg)) {
    return randomChoice(responses.thanks);
  } else if (/(weather|rain|sunny)/i.test(lowerMsg)) {
    return randomChoice(responses.weather);
  } else if (/(name|who are you)/i.test(lowerMsg)) {
    return randomChoice(responses.name);
  } else if (/(Cookie)/i.test(lowerMsg)) {
    return randomChoice(responses.Cookie);
  } else if (/(nalanda)/i.test(lowerMsg)) {
    return responses.tourism.nalanda;
  } else if (/(bodh gaya|bodhgaya)/i.test(lowerMsg)) {
    return responses.tourism.bodh_gaya;
  } else if (/(patna)/i.test(lowerMsg)) {
    return responses.tourism.patna;
  } else if (/(location|where)/i.test(lowerMsg)) {
    return "Please provide a specific location or landmark you are interested in.";
  } else if (/(food|restaurant|eat)/i.test(lowerMsg)) {
    return "There are many great places to eat around here. What type of cuisine are you interested in?";
  } else if (/(bus)/i.test(lowerMsg)) {
    return "You can use local buses, auto-rickshaws, or taxis for transport. Do you need help with directions?";
  } else if (/(Train)/i.test(lowerMsg)) {
    return  "Train is available for transport. Do you need help with directions?"
  } else if (/(safety|secure|safe)/i.test(lowerMsg)) {
    return "The area is generally safe, but always be aware of your surroundings. Do you have specific concerns?";
  } else if (/(time|what time)/i.test(lowerMsg)) {
    return `The current time is ${new Date().toLocaleTimeString()}`;
  } else if (/(date|today)/i.test(lowerMsg)) {
    return `Today is ${new Date().toLocaleDateString()}`;
  } else if (/(help|support)/i.test(lowerMsg)) {
    return "I can help with general questions. Try asking about our services, products, or company information.";
  } else {
    // For unknown queries, try to give a more contextual response
    const keywords = userMessage.split(/\s+/).slice(0, 3).join(' ');
    return `I understand you're asking about "${keywords}". ${randomChoice(responses.default)}`;
  }
}

// Helper function to get random response
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Add event listener for Enter key
document.getElementById('userInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Video slideshow logic
let currentVideo = 0;
const videos = document.querySelectorAll('#videoSlideshow video');

setInterval(() => {
  videos[currentVideo].classList.remove('active');
  videos[currentVideo].pause();

  currentVideo = (currentVideo + 1) % videos.length;

  videos[currentVideo].classList.add('active');
  videos[currentVideo].play();
}, 30000); // Switch every 30 seconds

// Preloader logic
window.addEventListener("load", function(){
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.style.display = "none";
});
