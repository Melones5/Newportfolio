export const toggleTheme = () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

export const initializeTheme = () => {
  const theme = localStorage.getItem("theme") ||
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  document.documentElement.classList.toggle("dark", theme === "dark");
};