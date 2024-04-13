// For Join Group Button
// Check if the button element exists
if (document.getElementById("nav-btn")) {
  document.getElementById("nav-btn").addEventListener("click", function () {
    if (this.textContent === "Join Group") {
      this.textContent = "Leave Group";
    } else {
      this.textContent = "Join Group";
    }
  });
}

// Join group button for larger screen
const joinBtn = document.getElementById("join-grp-btn");
const leaveBtn = document.getElementById("leave-grp-btn");

if (joinBtn) {
  joinBtn.addEventListener("click", () => {
    leaveBtn.style.display = "block";
    joinBtn.style.display = "none";
  });
}
if (leaveBtn) {
  leaveBtn.addEventListener("click", () => {
    joinBtn.style.display = "block";
    leaveBtn.style.display = "none";
  });
}

// When user click the Sign in button in larger screen
document.addEventListener("DOMContentLoaded", function () {

  const signInButton = document.getElementById("signin-btn-lg");
  const signedUserDiv = document.getElementById("signed-in");
  const createAccountDiv = document.getElementById("create-account");
  const recommendedGroupDiv = document.getElementById("recommended-grp-div");
  const locationInput = document.querySelector(".location-input");
  const locationIcon = document.getElementById("location-icon");

  // Check if the sign-in button exists
  if (signInButton) {
    signInButton.addEventListener("click", function (e) {
      e.preventDefault();
      signedUserDiv.style.display = "block";
      createAccountDiv.style.display = "none";
      recommendedGroupDiv.style.display = "block";

      // Reset location input value
      locationInput.value = "";
      // Change icon to cross icon
      locationIcon.classList.remove("fa-pen");
      locationIcon.classList.add("fa-times");

      // Closing modal after clicking Sign In button
      const modal = document.getElementById("signInLg");
      const modalBackdrop = document.querySelector(".modal-backdrop");
      // Check if the modal exists
      if (modal) {
        modal.style.display = "none";
        modalBackdrop.style.display = "none";
        // Reset the body overflow to allow scrolling
        document.body.style.overflow = "auto";
        document.body.style.padding='0'
      }
    });
  }
});

// Follow group button
if (document.querySelectorAll(".follow-group-btn").length > 0) {
  const followButtons = document.querySelectorAll(".follow-group-btn"); // Select all buttons with class "follow-group-btn"

  followButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Toggle button text and class
      this.classList.toggle("followed-btn");
      this.textContent = this.classList.contains("followed-btn")
        ? "Followed"
        : "Follow";
    });
  });
}
