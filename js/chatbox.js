
// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const messageLink = document.querySelector("#kyle-message"); // Link to open messages-content
    const messagesContent = document.querySelector(".messages-content"); // Content to display
    const closeButton = document.querySelector(".messages-content .x"); // Close button inside messages-content
  
    // Function to show the messages-content
    const openMessagesContent = () => {
      if (messagesContent) {
        messagesContent.classList.add("active");
      }
    };
  
    // Function to hide the messages-content
    const closeMessagesContent = () => {
      if (messagesContent) {
        messagesContent.classList.remove("active");
      }
    };
  
    // Attach click event listener to the link
    if (messageLink) {
      messageLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        openMessagesContent();
      });
    }
  
    // Attach click event listener to the close button
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        closeMessagesContent();
      });
    }
  });

  // Clickable images in the timeline
  document.querySelectorAll(".bro, .seminars").forEach((image) => {
    image.addEventListener("click", () => {
      window.location.href = "visitprofile.html";
    });
  });

  // Search bar functionality
  const searchBar = document.querySelector(".searchbar .search");
  if (searchBar) {
    searchBar.addEventListener("click", () => {
      alert("Search functionality coming soon!");
    });
  }

  const menuIcon = document.querySelector(".menu-dropdown-icon");
  const menuContent = document.querySelector(".menu-content");
  
  if (menuIcon && menuContent) {
      menuIcon.addEventListener("click", () => {
          menuContent.classList.toggle("active");
      });
  
      document.addEventListener("click", (event) => {
          if (!menuContent.contains(event.target) && !menuIcon.contains(event.target)) {
              menuContent.classList.remove("active");
          }
      });
  }

  // Sidebar navigation active state logic
  const sidebarIcons = document.querySelectorAll(".sidebar img");
  
  sidebarIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      sidebarIcons.forEach((icon) => icon.classList.remove("active"));
      this.classList.add("active");
    });
  });

// JavaScript to handle navigation on image clicks and hover effects

// Add hover effect to elements
function addHoverEffect(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
      element.addEventListener("mouseover", () => {
          element.style.cursor = "pointer";
          element.style.opacity = "0.8";
      });
      element.addEventListener("mouseout", () => {
          element.style.opacity = "1";
      });
  });
}

// Redirect to specific URLs when elements are clicked
function addClickRedirect(selector, targetUrl) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
      element.addEventListener("click", () => {
          window.location.href = targetUrl;
      });
  });
}

// Add hover and click functionality for profile picture
addClickRedirect(".profile-pic[src='img/profile.jpg']", "profile.html");
addHoverEffect(".profile-pic[src='img/profile.jpg']");

// Add hover and click functionality for suggestion avatar (Kyle)
addClickRedirect(".kyle[src='img/kyle.png']", "visitprofile.html");
addHoverEffect(".kyle[src='img/kyle.png']");

addClickRedirect(".img[src='img/kyle.png']", "visitprofile.html");
addHoverEffect(".img[src='img/kyle.png']");

document.addEventListener("DOMContentLoaded", () => {
    // Get the necessary elements
    const divWrapper = document.querySelector(".div-wrapper");
    const sendWrapper = document.querySelector(".send-wrapper");
  
    if (divWrapper && sendWrapper) {
      // Make the div-wrapper content editable
      divWrapper.setAttribute("contenteditable", "true");
      divWrapper.setAttribute("role", "textbox");
      divWrapper.style.cursor = "text"; // Change cursor to indicate it's editable
      divWrapper.style.outline = "none"; // Remove the border or focus rectangle
  
      // Remove the "Aa" when the div-wrapper is clicked
      divWrapper.addEventListener("focus", () => {
        if (divWrapper.innerText.trim() === "Aa") {
          divWrapper.innerText = ""; // Clear the initial placeholder
        }
      });
  
      // Handle clicking on the send-wrapper
      sendWrapper.addEventListener("click", () => {
        const typedText = divWrapper.innerText.trim(); // Get the typed text
        if (typedText) {
          alert(`You typed: ${typedText}`); // Display the typed text
          divWrapper.innerText = "Aa"; // Reset to "Aa" after sending
        } else {
          alert("Please type something before sending.");
        }
      });
    }
  
    // Functionality: Redirect to specific pages when clicking on icons
    const pageRedirects = {
      ".home": "socmed.html",
      ".chat": "chatbox.html",
      ".event": "event.html",
      ".book": "elearningplatform.html",
    };
  
    Object.keys(pageRedirects).forEach((selector) => {
      const element = document.querySelector(selector);
  
      if (element) {
        element.addEventListener("click", () => {
          window.location.href = pageRedirects[selector]; // Redirect to the specified page
        });
      }
    });
  });
  


  
  
  
  