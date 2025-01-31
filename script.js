function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;
  
    const chatBox = document.getElementById('chat-box');
    
    // Create user message element
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.innerHTML = `<p>${userInput}</p>`;
    chatBox.appendChild(userMessage);
  
    // Clear input field
    document.getElementById('user-input').value = '';
  
    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
  
    // Simulate bot response after a slight delay
    setTimeout(() => {
      const botResponse = generateBotResponse(userInput);
  
      // Create bot message element
      const botMessage = document.createElement('div');
      botMessage.classList.add('bot-message');
      botMessage.innerHTML = `<img src="robot.png" alt="robot" class="bot-img"><p>${botResponse}</p>`;
      chatBox.appendChild(botMessage);
  
      // Scroll to the bottom
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }
  
  function generateBotResponse(userInput) {
    const responses = {
      "Hello": "Hi there! How can I help you today 😊?",
      "How are you": "I'm doing great, thank you for asking! How about you 😊?",
      "Bye": "Goodbye! Have a nice day 😊!",
      "Default": "I'm not sure how to respond to that. Could you please rephrase 🤔?",
      "I'm happy today": "Great, nice to hear that 😀 ",
      "I'm sad today": "Oh no, sad to hear that. May I know what's bothering you. 🥺 ",
      "Thank you": "Thanks for reaching out. Incase you need any help, feel free to reach out to me.😇",
      "Thank you so much": "Thanks for reaching out. Incase you need any help, feel free to reach out to me. 😇",
      "Thanks": "Thanks for reaching out. Incase you need any help, feel free to reach out to me. 😇",
      "Thanks a lot": "Thanks for reaching out. Incase you need any help, feel free to reach out to me. 😇",
      "Tq": "Thanks for reaching out. Incase you need any help, feel free to reach out to me.",
      "Had your breakfast?": "I'm a robot and I don't eat. Thanks for asking 😅 ",
      "Had your lunch?": "I'm a robot and I don't eat. Thanks for asking 😅",
      "Had you dinner?": "I'm a robot and I don't eat. Thanks for asking 😅",

    };
  
    // Simple keyword matching
    const message = userInput.toTitleCase;
    return responses[message] || responses['default'];
  }
  
