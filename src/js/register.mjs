// register.mjs
export function setupRegister() {
  const registerForm = document.getElementById("registerForm");
  if (!registerForm) return;

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Registration successful (mock)");
  });
}
