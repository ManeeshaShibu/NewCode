document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const username = formData.get("username");
  const password = formData.get("password");
  
  // Send login data to the backend using fetch or AJAX
  // Example using fetch:
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      window.location.href = "/dashboard"; // Redirect to dashboard on successful login
    } else {
      document.getElementById("message").textContent = "Invalid username or password.";
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
});
