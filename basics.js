// HTTP
// Sondeo => Polling

// SetInterval

const POLL_RATE = 500;

setInterval(async () => {
  const messages = await fetch('https://api.chat-app.com/messages'); 
}, POLL_RATE);


// IP Socket (Internet Protocol Socket)
    // Datagram o UDP Socket 
    // TCP Sockets 
        // Web sockets
                                // Http