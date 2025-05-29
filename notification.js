document.addEventListener("DOMContentLoaded", function () {
  // Create the notification container
  let notification = document.createElement("div");
  notification.id = "custom-notification";
  notification.innerHTML = `
    <div class="notification-content">
      <p><strong>मेरो Web App हेर्नुहोस् | View My Web App</strong></p>
      <button id="view-demo">Visit Demo</button>
      <button id="dismiss-notification">Not Now</button>
    </div>
  `;

  // Append to body
  document.body.appendChild(notification);

  // Redirect on "Visit Demo"
  document.getElementById("view-demo").addEventListener("click", function () {
    window.location.href = "https://github.com/DolenSharma/infotech-hrms-2023"; // Replace with real link
  });

  // Dismiss notification on "Not Now"
  document.getElementById("dismiss-notification").addEventListener("click", function () {
    notification.style.display = "none";
  });
});

// CSS Styling with Brand Colors
const style = document.createElement("style");
style.innerHTML = `
  #custom-notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #0A552F; /* avocado-dark */
    color: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    max-width: 90%;
    width: 320px;
    text-align: center;
    font-family: Arial, sans-serif;
  }

  .notification-content button {
    background: #7553A2; /* avocado-primary */
    color: white;
    border: none;
    padding: 6px 14px;
    border-radius: 6px;
    cursor: pointer;
    margin: 8px 6px 0;
    font-weight: bold;
    transition: background 0.3s;
  }

  .notification-content button:hover {
    background: #3BB44A; /* avocado-secondary */
  }
`;
document.head.appendChild(style);
