// main.mjs
import { setupLogin, setupRegister, autoFillUserGreeting } from "./auth.mjs";

document.addEventListener("DOMContentLoaded", () => {
  autoFillUserGreeting();
  setupLogin();
  setupRegister();
});
