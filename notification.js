document.addEventListener("DOMContentLoaded", function () {
  // Create the notification container
  let notification = document.createElement("div");
  notification.id = "custom-notification";
  notification.innerHTML = `
    <div class="notification-content">
      <p><strong>मेरो Web App हेर्नुहोस् | View My Web App</strong></p>
      <button id="view-demo">Visit Demo</button>
    </div>
  `;

  // Append to body
  document.body.appendChild(notification);

  // Redirect on click
  document.getElementById("view-demo").addEventListener("click", function () {
    window.location.href = "https://your-demo-link.com"; // Replace this with your real demo link
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
    margin-top: 12px;
    font-weight: bold;
    transition: background 0.3s;
  }

  .notification-content button:hover {
    background: #3BB44A; /* avocado-secondary */
  }
`;
document.head.appendChild(style);
