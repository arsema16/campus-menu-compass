const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Toggle to the registration form
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

// Toggle back to the login form
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Function to validate email with specific Gmail and ".com" requirements
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    return emailRegex.test(email);
}

// Function to validate strong password
function isStrongPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// Registration Process
document.querySelector('.sign-up form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('.sign-up input[type="text"]').value.trim();
    const email = document.querySelector('.sign-up input[type="email"]').value.trim();
    const password = document.querySelector('.sign-up input[type="password"]').value;

    if (!name || !email || !password) {
        alert("All fields are required!");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid Gmail address ending with @gmail.com!");
        return;
    }

    if (!isStrongPassword(password)) {
        alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character!");
        return;
    }

    // Save user data in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        alert("User already exists. Please log in.");
        container.classList.remove("active"); // Switch to login view
    } else {
        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful! Please log in.");
        container.classList.remove("active"); // Switch to login view
    }
});

// Login Process
document.querySelector('.sign-in form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('.sign-in input[type="email"]').value.trim();
    const password = document.querySelector('.sign-in input[type="password"]').value;

    if (!email || !password) {
        alert("Please fill in all fields!");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid Gmail address ending with @gmail.com!");
        return;
    }

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Welcome back, ${user.name}!`);
        window.location.href = "option.html"; // Redirect to option page
    } else {
        alert("Invalid email or password!");
    }
});
