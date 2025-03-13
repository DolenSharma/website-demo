document.addEventListener("DOMContentLoaded", function () {
    // Create the notification container
    let notification = document.createElement("div");
    notification.id = "custom-notification";
    notification.innerHTML = `
        <div class="notification-content">
            <p>हालको डेटा डम्मी हो, म चाँडै वास्तविक डेटा अपलोड गर्नेछु। कृपया प्रतीक्षा गर्नुहोस्। <br> 
            **फुटरमा रहेको सम्पर्क जानकारी भने मान्य छ।**</p>
            <button id="close-notification">ठीक छ</button>
        </div>
    `;

    // Append to body
    document.body.appendChild(notification);

    // Close button event
    document.getElementById("close-notification").addEventListener("click", function () {
        notification.style.display = "none";
    });
});

// CSS Styling
const style = document.createElement("style");
style.innerHTML = `
    #custom-notification {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        max-width: 90%;
        width: 300px;
        text-align: center;
        font-family: Arial, sans-serif;
    }
    .notification-content button {
        background: red;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
    }
    .notification-content button:hover {
        background: darkred;
    }
`;
document.head.appendChild(style);
