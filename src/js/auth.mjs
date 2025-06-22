// auth.mjs
export function setupLogin() {
  const loginForm = document.getElementById("loginForm");
  if (!loginForm) return;

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Mock auth validation (replace with real logic if needed)
    if (email && password) {
      const user = { email };
      localStorage.setItem("landviewUser", JSON.stringify(user));
      alert(`Welcome back, ${email}`);
      document.getElementById("accountDropdown").classList.add("hidden");
    } else {
      alert("Please enter valid credentials.");
    }
  });
}

export function setupRegister() {
  const registerForm = document.getElementById("registerForm");
  if (!registerForm) return;

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    if (name && email && password) {
      const newUser = { name, email };
      localStorage.setItem("landviewUser", JSON.stringify(newUser));
      alert(`Registration successful. Welcome, ${name}!`);
      document.getElementById("accountDropdown").classList.add("hidden");
    } else {
      alert("All fields are required.");
    }
  });
}

export function autoFillUserGreeting() {
  const user = JSON.parse(localStorage.getItem("landviewUser"));
  if (user && user.email) {
    const header = document.querySelector(".top-bar h1");
    if (header) {
      header.textContent = `LandView | Welcome, ${user.email}`;
    }
  }
}
