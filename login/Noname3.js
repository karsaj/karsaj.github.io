
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "karsaj" && password === "842557926") {
        window.location.replace("https://kar2.z9.web.core.windows.net/Portfolio.html");
        
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})