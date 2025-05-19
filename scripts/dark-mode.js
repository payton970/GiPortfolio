// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const darkModeStyle = document.getElementById('dark-mode-style');
const html = document.documentElement;

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set initial theme
if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    enableDarkMode();
} else {
    disableDarkMode();
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    if (html.getAttribute('data-theme') === 'dark') {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// Functions to enable/disable dark mode
function enableDarkMode() {
    html.setAttribute('data-theme', 'dark');
    darkModeStyle.removeAttribute('disabled');
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    html.setAttribute('data-theme', 'light');
    darkModeStyle.setAttribute('disabled', 'true');
    localStorage.setItem('theme', 'light');
}

// Watch for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }
});