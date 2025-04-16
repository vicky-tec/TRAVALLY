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

// YUKTI BOT
// Sample data for bot responses

const yuktiBotResponses = {
  greetings: [
    "Namaste! How can I help you explore Bihar today?",
    "Hello! Looking for something in Bihar?",
    "Hi there! Want to discover places, temples, or culture of Bihar?",
    "Hey! YuktiBot at your service!"
  ],
  farewell: [
    "Goodbye! Visit Bihar soon!",
    "Take care! Hope you learned something new about Bihar!",
    "See you later! Keep exploring!",
    "Bye! Have a great day!"
  ],
  help: [
    "I can tell you about famous tourist places, temples, museums, malls, or travel distances in Bihar.",
    "Need information on any place in Bihar?",
    "Ask me about routes, culture, or sightseeing in Bihar!",
    "Want to know historical spots, local food, or temples? Just ask!"
  ],
  touristPlaces: [
    "Some famous tourist places in Bihar are: Nalanda, Bodh Gaya, Rajgir, Vikramshila, Vaishali, and Patna Sahib.",
    "Bodh Gaya, where Buddha attained enlightenment, is one of the top destinations.",
    "You must explore Nalanda University ruins and Rajgir hot springs!",
    "Patna Sahib, the birthplace of Guru Gobind Singh, is a must-visit for history lovers!",
    "Vaishali is known for its historical significance and ancient ruins.",
    "Badi Buddha Stupa in Bodh Gaya is a UNESCO World Heritage Site.",
    "Vikramshila is another ancient university site worth visiting.",
    "Patna is the capital city with many historical sites and museums.",
    "Gaya is famous for its temples and pilgrimage sites.",
    "Rajgir is known for its hot springs and ancient ruins.",
    "Rajgir is famous for its hot springs and ancient ruins.",
    "Nalanda is home to the ancient Nalanda University ruins, a UNESCO World Heritage Site.",
    "Vaishali is known for its historical significance and ancient ruins.",
    "Bihar Sharif is a historical town with ancient ruins and temples.",
    "Madhubani is famous for its beautiful Madhubani paintings.",
    "Bhagalpur is known for its silk industry and the Vikramshila ruins."
  ],
  temples: [
    "Mahabodhi Temple (Bodh Gaya), Vishnupad Temple (Gaya), Patan Devi Temple (Patna), and Mundeshwari Temple (Kaimur) are very famous.",
    "Mahavir Mandir in Patna is one of the most visited temples in Bihar.",
    "Bihar is known for its ancient temples and pilgrimage sites.",
    "Bihar is rich with spiritual history – especially Buddhist and Hindu temples.",
    "Badi patan Devi Temple in Patna is a popular pilgrimage site.",
    "Mundeshwari Temple in Kaimur is one of the oldest temples in India.",
    "Vishnupad Temple in Gaya is famous for its unique architecture.",
    "Mahabodhi Temple in Bodh Gaya is a UNESCO World Heritage Site and a major Buddhist pilgrimage site.",
    "Vishnupad Temple in Gaya is known for its unique architecture and significance in Hinduism.",
    "Mundeshwari Temple in Kaimur is one of the oldest temples in India, dedicated to Goddess Durga.",
    "Bihar Sharif has many ancient temples and ruins.",
    "Bihar is home to many ancient temples and pilgrimage sites.",
  ],
  museums: [
    "Patna Museum, Bihar Museum, and Jalan Museum are the top ones to visit.",
    "Bihar Museum in Patna offers a modern experience with ancient heritage!"
  ],
  malls: [
    "Famous malls in Bihar include P&M Mall (Patna), Patna Central, and Maurya Lok Complex.",
    "Patna Central is another popular shopping destination.",
    "Bihar has several shopping malls, especially in Patna.",
    "Patna Central Mall is one of the largest in Bihar.",
    "P&M Mall is a popular shopping destination in Patna.", 

  ],
  bot: [ 
    "I'm YuktiBot, your virtual guide to Bihar!",
    "I'm here to help you explore Bihar's culture, history, and tourist spots!",
    "I'm YuktiBot, your virtual assistant for all things Bihar!",
    "I'm YuktiBot, your friendly guide to Bihar's wonders!",
    "I'm YuktiBot, your virtual assistant for all things Bihar!",
  ],
  biharPlaces : {
    Bihar: ["Bihar is a state in eastern India, known for its rich history and culture. It is home to many ancient sites and universities"],
    patna: ["Patna is the capital city of Bihar, known for its rich history and culture. You can visit Patna Sahib Gurudwara, Golghar, and the Patna Museum."],
    arrah: ["Arrah is known for its historical significance and the famous Arrah battle. You can visit the Arrah Fort and the Sita Kund."],
    bhagalpur: ["Bhagalpur is famous for its silk industry and the Vikramshila ruins. You can also visit the Mandar Hill."],
    bodhaya: ["Bodh Gaya is a UNESCO World Heritage Site and the place where Buddha attained enlightenment. The Mahabodhi Temple is a must-visit."],
    gaya: ["Gaya is known for its temples and pilgrimage sites, including the Vishnupad Temple."],
    nalanda: ["Nalanda is home to the ancient Nalanda University ruins, a UNESCO World Heritage Site."],
    rajgir: ["Rajgir is known for its hot springs and ancient ruins. You can also visit the Vishwa Shanti Stupa."],
    madhubani: ["Madhubani is famous for its beautiful Madhubani paintings and cultural heritage."],
    sitamarhi: ["Sitamarhi is known for its historical significance and the Janaki Temple."],
    purnea: ["Purnea is known for its agricultural significance and natural beauty."],
    katihar: ["Katihar is known for its natural beauty and agricultural significance."],
    kisanganj: ["Kishanganj is known for its natural beauty and diverse culture."],
    araria: ["Araria is known for its agricultural significance and natural beauty."],
    supaul: ["Supaul is known for its agricultural significance and natural beauty."],
    biharSharif: ["Bihar Sharif is a historical town with ancient ruins and temples."],
    darbhanga: ["Darbhanga is known for its historical significance and beautiful palaces."],
    madhubani: ["Madhubani is famous for its beautiful Madhubani paintings and cultural heritage."],
    bhagalpur: ["Bhagalpur is known for its silk industry and the Vikramshila ruins."],
    patnaSahib: ["Patna Sahib is the birthplace of Guru Gobind Singh and has significant historical importance."],
    vaishali: ["Vaishali is known for its historical significance and ancient ruins."],
    vikramshila: ["Vikramshila is an ancient university site worth visiting."]
  
  },
 
  // Add more responses as needed

  distanceInfo: {
    "patna-arrah": "The distance from Patna to Arrah is approximately 60 km by road.",
    "arrah-bhagalpur": "The distance from Arrah to Bhagalpur is around 230 km.",
    "bhagalpur-madhubani": "The distance from Bhagalpur to Madhubani is about 260 km.",
    "bhagalpur-patna": "The distance from Bhagalpur to Patna is approximately 250 km.",
    "patna-gaya": "The distance from Patna to Gaya is around 100 km.",
    "gaya-bodhgaya": "The distance from Gaya to Bodh Gaya is about 15 km.",
    "patna-nalanda": "The distance from Patna to Nalanda is approximately 90 km.",
    "nalanda-rajgir": "The distance from Nalanda to Rajgir is around 15 km.",
    "rajgir-bodhgaya": "The distance from Rajgir to Bodh Gaya is approximately 70 km.",
    "patna-madhubani": "The distance from Patna to Madhubani is around 200 km.",
    "madhubani-sitamarhi": "The distance from Madhubani to Sitamarhi is approximately 100 km.",
    "sitamarhi-bhagalpur": "The distance from Sitamarhi to Bhagalpur is around 250 km.",
    "bhagalpur-purnea": "The distance from Bhagalpur to Purnea is approximately 150 km.",
    "purnea-araria": "The distance from Purnea to Araria is around 50 km.",
    "araria-kishanganj": "The distance from Araria to Kishanganj is approximately 60 km.",
    "kishanganj-patna": "The distance from Kishanganj to Patna is around 300 km.",
    "patna-sitamarhi": "The distance from Patna to Sitamarhi is approximately 150 km.",
    "sitamarhi-madhubani": "The distance from Sitamarhi to Madhubani is around 80 km.",
    "madhubani-supaul": "The distance from Madhubani to Supaul is approximately 120 km.",
    "supaul-kishanganj": "The distance from Supaul to Kishanganj is around 150 km.",
    "kishanganj-araria": "The distance from Kishanganj to Araria is approximately 60 km.",
    "araria-purnea": "The distance from Araria to Purnea is around 50 km.",
    "purnea-katihar": "The distance from Purnea to Katihar is approximately 70 km.",
    "katihar-bhagalpur": "The distance from Katihar to Bhagalpur is around 100 km.",
    "bhagalpur-katihar": "The distance from Bhagalpur to Katihar is approximately 100 km.",
    "katihar-purnea": "The distance from Katihar to Purnea is around 70 km.",
  }
};

const yuktiBotDefaultResponses = [
  "Hmm, I'm not sure how to respond to that. Can you rephrase?",
  "Interesting! Could you ask about something in Bihar?",
  "I'm learning new things every day. Ask me about tourist places, routes, or culture!",
  "Sorry, I don't have an answer for that yet. Try asking something else.",
  "That's a bit outside my knowledge. How about asking about Bihar's tourist spots?",
  "I don't have information on that. But I can help with Bihar tourism!",
  "I'm still learning. Can you ask about something related to Bihar?",
  "I don't have an answer for that. But I can help with Bihar tourism!",
];

function getBotResponse(userInput) {
  const input = userInput.toLowerCase();

  if (input.includes("hello") || input.includes("hi")|| input.includes("hey") || input.includes("namaste") || input.includes("greetings") || input.includes("welcome")|| input.includes("howdy")) {
    return randomFrom(yuktiBotResponses.greetings);
  }
  if (input.includes("bye") || input.includes("goodbye")|| input.includes("see you") || input.includes("farewell") || input.includes("take care") || input.includes("later")) {
    return randomFrom(yuktiBotResponses.farewell);
  }
  if (input.includes("help")|| input.includes("assist") || input.includes("support") || input.includes("info") || input.includes("information")) {
    return randomFrom(yuktiBotResponses.help);
  }
  if (input.includes("tourist") || input.includes("place") || input.includes("sightseeing") || input.includes("attraction") || input.includes("destination")) {
    return randomFrom(yuktiBotResponses.touristPlaces);
  }
  if (input.includes("temple")|| input.includes("mandir") || input.includes("shrine") || input.includes("religious site") || input.includes("spiritual")) {
    return randomFrom(yuktiBotResponses.temples);
  }
  if (input.includes("museum")|| input.includes("exhibition") || input.includes("gallery") || input.includes("artifacts") || input.includes("history")) {
    return randomFrom(yuktiBotResponses.museums);
  }
  if (input.includes("patna")) {
    return randomFrom(yuktiBotResponses.biharPlaces["patna"]);
  }
  if (input.includes("arrah")) {
    return randomFrom(yuktiBotResponses.biharPlaces["arrah"]);
  }
  if (input.includes("bhagalpur")) {
    return randomFrom(yuktiBotResponses.biharPlaces["bahgalpur"]);
  }
  if (input.includes("bodhgaya")) {
    return randomFrom(yuktiBotResponses.biharPlaces["badhgaya"]);
  }
  if (input.includes("darbhanga")) {
    return randomFrom(yuktiBotResponses.biharPlaces["darbhanga"]);
  }
  if (input.includes("vikramshila")) {
    return randomFrom(yuktiBotResponses.biharPlaces["vikramshila"]);
  }
  if (input.includes("vaishali")) {
    return randomFrom(yuktiBotResponses.biharPlaces["vaishali"]);
  }
  if (input.includes("nalanda")) {
    return randomFrom(yuktiBotResponses.biharPlaces["nalanda"]);
  }
  if (input.includes("rajgir")) {
    return randomFrom(yuktiBotResponses.biharPlaces["rajgir"]);
  }
  if (input.includes("Bihar")) {
    return randomFrom(yuktiBotResponses.biharPlaces["Bihar"]);
  }
  if (input.includes("sitamarhi")) {
    return randomFrom(yuktiBotResponses.biharPlaces["sitamarhi"]);
  }
  if (input.includes("purnea")) {
    return randomFrom(yuktiBotResponses.biharPlaces["purnea"]);
  }
  if (input.includes("katihar")) {
    return randomFrom(yuktiBotResponses.biharPlaces["katihar"]);
  }
  if (input.includes("kishanganj")) {
    return randomFrom(yuktiBotResponses.biharPlaces["kishanganj"]);
  }
  if (input.includes("araria")) {
    return randomFrom(yuktiBotResponses.biharPlaces["araria"]);
  }
  if (input.includes("supaul")) {
    return randomFrom(yuktiBotResponses.biharPlaces["supaul"]);
  }
  if (input.includes("bihar sharif")) {
    return randomFrom(yuktiBotResponses.biharPlaces["biharSharif"]);
  }
  if (input.includes("bot") || input.includes("yukti") || input.includes("assistant") || input.includes("virtual assistant") || input.includes("AI")) {
    return randomFrom(yuktiBotResponses.bot);
  }
  if (input.includes("patna") && input.includes("arrah")) {
    return yuktiBotResponses.distanceInfo["patna-arrah"];
  }
  if (input.includes("arrah") && input.includes("bhagalpur")) {
    return yuktiBotResponses.distanceInfo["arrah-bhagalpur"];
  }
  if (input.includes("bhagalpur") && input.includes("madhubani")) {
    return yuktiBotResponses.distanceInfo["bhagalpur-madhubani"];
  }
  if (input.includes("bhagalpur") && input.includes("patna")) {
    return yuktiBotResponses.distanceInfo["bhagalpur-patna"];
  }
  if (input.includes("patna") && input.includes("gaya")) {
    return yuktiBotResponses.distanceInfo["patna-gaya"];
  }
  if (input.includes("gaya") && input.includes("bodhgaya")) {
    return yuktiBotResponses.distanceInfo["gaya-bodhgaya"];
  }
  if (input.includes("patna") && input.includes("nalanda")) {
    return yuktiBotResponses.distanceInfo["patna-nalanda"];
  }
  if (input.includes("nalanda") && input.includes("rajgir")) {
    return yuktiBotResponses.distanceInfo["nalanda-rajgir"];
  }
  if (input.includes("rajgir") && input.includes("bodhgaya")) {
    return yuktiBotResponses.distanceInfo["rajgir-bodhgaya"];
  }
  if (input.includes("patna") && input.includes("madhubani")) {
    return yuktiBotResponses.distanceInfo["patna-madhubani"];
  }
  if (input.includes("madhubani") && input.includes("sitamarhi")) {
    return yuktiBotResponses.distanceInfo["madhubani-sitamarhi"];
  } 
  if (input.includes("sitamarhi") && input.includes("bhagalpur")) {
    return yuktiBotResponses.distanceInfo["sitamarhi-bhagalpur"];
  }
  if (input.includes("bhagalpur") && input.includes("purnea")) {
    return yuktiBotResponses.distanceInfo["bhagalpur-purnea"];
  }
  if (input.includes("purnea") && input.includes("araria")) {
    return yuktiBotResponses.distanceInfo["purnea-araria"];
  }
  if (input.includes("araria") && input.includes("kishanganj")) {
    return yuktiBotResponses.distanceInfo["araria-kishanganj"];
  }
  if (input.includes("kishanganj") && input.includes("patna")) {
    return yuktiBotResponses.distanceInfo["kishanganj-patna"];
  }
  if (input.includes("patna") && input.includes("sitamarhi")) {
    return yuktiBotResponses.distanceInfo["patna-sitamarhi"];
  }
  if (input.includes("sitamarhi") && input.includes("madhubani")) {
    return yuktiBotResponses.distanceInfo["sitamarhi-madhubani"];
  }
  if (input.includes("madhubani") && input.includes("supaul")) {
    return yuktiBotResponses.distanceInfo["madhubani-supaul"];
  }
  if (input.includes("supaul") && input.includes("kishanganj")) {
    return yuktiBotResponses.distanceInfo["supaul-kishanganj"];
  }
  if (input.includes("kishanganj") && input.includes("araria")) {
    return yuktiBotResponses.distanceInfo["kishanganj-araria"];
  }
  if (input.includes("araria") && input.includes("purnea")) {
    return yuktiBotResponses.distanceInfo["araria-purnea"];
  }
  if (input.includes("purnea") && input.includes("katihar")) {
    return yuktiBotResponses.distanceInfo["purnea-katihar"];
  }
  if (input.includes("katihar") && input.includes("bhagalpur")) {
    return yuktiBotResponses.distanceInfo["katihar-bhagalpur"];
  }
  if (input.includes("bhagalpur") && input.includes("katihar")) {
    return yuktiBotResponses.distanceInfo["bhagalpur-katihar"];
  }
  if (input.includes("katihar") && input.includes("purnea")) {  
    return yuktiBotResponses.distanceInfo["katihar-purnea"];
  }
  if ( input.includes("state") || input.includes("tourist") || input.includes("place") || input.includes("sightseeing") || input.includes("attraction") || input.includes("destination")) {
    return randomFrom(yuktiBotResponses.touristPlaces);
  }
  if (input.includes("temple") || input.includes("mandir") || input.includes("shrine") || input.includes("religious site") || input.includes("spiritual")) {
    return randomFrom(yuktiBotResponses.temples);
  }
  if ( input.includes("state") || input.includes("culture") || input.includes("food") || input.includes("history")) {
    return randomFrom(yuktiBotResponses.help);
  }
  if (input.includes("weather") || input.includes("climate") || input.includes("temperature")) {
    return "I currently don't have weather updates. Please check a weather app or website.";
  }
  if (input.includes("food") || input.includes("dish") || input.includes("cuisine") || input.includes("snack")) {
    return "Bihar is famous for Litti Chokha, Sattu Paratha, and Thekua!";
  }
  if (input.includes("festival") || input.includes("celebration") || input.includes("event")) {
    return "Bihar celebrates Chhath Puja, Makar Sankranti, and Holi with great enthusiasm!";
  }
  if (input.includes("history") || input.includes("historical") || input.includes("ancient")) {
    return "Bihar has a rich history, being the birthplace of Buddhism and Jainism!";
  }
  if (input.includes("transport") || input.includes("travel") || input.includes("bus") || input.includes("train")) {
    return "Bihar has a good network of buses and trains connecting major cities!";
  }
  if (input.includes("local") || input.includes("people") || input.includes("culture")) {
    return "Bihar is known for its diverse culture and warm hospitality!";
  }
  if (input.includes("language") || input.includes("dialect") || input.includes("speak")) {
    return "Hindi and Bhojpuri are widely spoken in Bihar!";
  }
  if (input.includes("transportation") || input.includes("getting around") || input.includes("travel")) {
    return "Bihar has a good network of buses and trains connecting major cities!";
  }
  if (input.includes("safety") || input.includes("secure") || input.includes("risk")) {
    return "Bihar is generally safe for tourists, but it's always good to stay alert!";
  }
  if (input.includes("accommodation") || input.includes("stay") || input.includes("hotel")) {
    return "Bihar has various hotels and guesthouses for comfortable stays!";
  }
  if (input.includes("shopping") || input.includes("buy") || input.includes("market")) {
    return "Patna has several markets and malls for shopping!";
  }
  if (input.includes("transport") || input.includes("bus") || input.includes("train")) {
    return "Bihar has a good network of buses and trains connecting major cities!";
  }
  if (input.includes("advice") || input.includes("tip") || input.includes("suggestion")) {
    return "Always carry some cash, as not all places accept cards!";
  }
  if (input.includes("emergency") || input.includes("help") || input.includes("assistance")) {
    return "In case of emergency, dial 100 for police or 108 for ambulance!";
  }
  if (input.includes("contact") || input.includes("phone") || input.includes("number")) {
    return "You can contact local tourism offices for assistance!";
  }
  if (input.includes("internet") || input.includes("wifi") || input.includes("connectivity")) {
    return "Most urban areas have good internet connectivity!";
  }
  
  
// Default response for unrecognized input
  if (input.includes("joke") || input.includes("funny") || input.includes("laugh")) {
    return "Why don't scientists trust atoms? Because they make up everything!";
  }
  if (input.includes("quote") || input.includes("inspiration") || input.includes("motivation")) {
    return "The best way to predict the future is to create it. - Peter Drucker";
  }
  if (input.includes("news") || input.includes("update") || input.includes("current")) {
    return "I currently don't have news updates. Please check a news app or website.";
  }
  if (input.includes("music") || input.includes("song") || input.includes("playlist")) {
    return "I currently don't have music recommendations. Please check a music app or website.";
  }
  if (input.includes("movie") || input.includes("film") || input.includes("show")) {
    return "I currently don't have movie recommendations. Please check a movie app or website.";
  }
  if (input.includes("book") || input.includes("read") || input.includes("literature")) {
    return "I currently don't have book recommendations. Please check a book app or website.";
  }
  if (input.includes("sports") || input.includes("game") || input.includes("team")) {
    return "I currently don't have sports updates. Please check a sports app or website.";
  }
  if (input.includes("travel") || input.includes("trip") || input.includes("journey")) {
    return "I currently don't have travel recommendations. Please check a travel app or website.";
  }
  if (input.includes("shopping") || input.includes("buy") || input.includes("market")) {
    return "I currently don't have shopping recommendations. Please check a shopping app or website.";
  }
  if (input.includes("health") || input.includes("fitness") || input.includes("wellness")) {
    return "I currently don't have health tips. Please check a health app or website.";
  }
  if (input.includes("technology") || input.includes("tech") || input.includes("gadget")) {
    return "I currently don't have tech updates. Please check a tech app or website.";
  }
  if (input.includes("fashion") || input.includes("style") || input.includes("trend")) {
    return "I currently don't have fashion tips. Please check a fashion app or website.";
  }
  if (input.includes("art") || input.includes("craft") || input.includes("design")) {
    return "I currently don't have art recommendations. Please check an art app or website.";
  }
  if (input.includes("photography") || input.includes("photo") || input.includes("picture")) {
    return "I currently don't have photography tips. Please check a photography app or website.";
  }
  if (input.includes("cooking") || input.includes("recipe") || input.includes("food")) {
    return "I currently don't have cooking tips. Please check a cooking app or website.";
  }
  if (input.includes("gardening") || input.includes("plant") || input.includes("grow")) {
    return "I currently don't have gardening tips. Please check a gardening app or website.";
  }
  if (input.includes("pets") || input.includes("animal") || input.includes("pet")) {
    return "I currently don't have pet care tips. Please check a pet care app or website.";
  }
  if (input.includes("finance") || input.includes("money") || input.includes("investment")) {
    return "I currently don't have finance tips. Please check a finance app or website.";
  }
  if (input.includes("business") || input.includes("startup") || input.includes("entrepreneur")) {
    return "I currently don't have business tips. Please check a business app or website.";
  }
  if (input.includes("career") || input.includes("job") || input.includes("work")) {
    return "I currently don't have career tips. Please check a career app or website.";
  }
  if (input.includes("education") || input.includes("study") || input.includes("learn")) {
    return "I currently don't have education tips. Please check an education app or website.";
  }
  if (input.includes("science") || input.includes("research") || input.includes("experiment")) {
    return "I currently don't have science updates. Please check a science app or website.";
  }
  if (input.includes("history") || input.includes("past") || input.includes("event")) {
    return "I currently don't have history updates. Please check a history app or website.";
  }
  if (input.includes("philosophy") || input.includes("thought") || input.includes("idea")) {
    return "I currently don't have philosophy updates. Please check a philosophy app or website.";
  }
  if (input.includes("psychology") || input.includes("mind") || input.includes("behavior")) {
    return "I currently don't have psychology updates. Please check a psychology app or website.";
  }
  return randomFrom(yuktiBotDefaultResponses);
}

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateBotResponse(userInput) {
  // Simulate AI processing time
  const response = getBotResponse(userInput);
  return response;
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
