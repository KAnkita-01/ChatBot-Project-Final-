function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === "") return;

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
        botMessage.innerHTML = `<img src="Robot.jpeg" alt="robot" class="bot-img"><p>${botResponse}</p>`;
        chatBox.appendChild(botMessage);

        // Scroll to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

function generateBotResponse(userInput) {
    const responses = {
        "hello": "Hi there! How can I help you today 😊?",
        "how are you": "I'm doing great, thank you for asking! How about you 😊?",
        "bye": "Goodbye! Have a nice day 😊!",
        "i'm happy today": "Great, nice to hear that 😀 ",
        "i'm sad today": "Oh no, sad to hear that. May I know what's bothering you 🥺?",
        "thank you": "Thanks for reaching out. In case you need any help, feel free to reach out to me. 😇",
        "thank you so much": "Thanks for reaching out. In case you need any help, feel free to reach out to me. 😇",
        "thanks": "Thanks for reaching out. In case you need any help, feel free to reach out to me. 😇",
        "thanks a lot": "Thanks for reaching out. In case you need any help, feel free to reach out to me. 😇",
        "tq": "Thanks for reaching out. In case you need any help, feel free to reach out to me. 😇",
        "had your breakfast?": "I'm a robot and I don't eat. Thanks for asking 😅",
        "had your lunch?": "I'm a robot and I don't eat. Thanks for asking 😅",
        "had your dinner?": "I'm a robot and I don't eat. Thanks for asking 😅",
        "bye": "Bye",
        "god bless you": "God bless you too"
    };

    // Normalize input by converting to lowercase
    const message = userInput.toLowerCase();
    
    return responses[message] || "I'm not sure how to respond to that. Could you please rephrase 🤔?";
}

  
