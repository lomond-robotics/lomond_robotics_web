(function () {
  "use strict";

  var storageKey = "lomond-theme";
  var root = document.documentElement;
  var themeColor = document.querySelector('meta[name="theme-color"]');
  var theme = "dark";

  // Restore before styles load to avoid a dark flash on light-mode pages.
  try {
    if (window.localStorage.getItem(storageKey) === "light") theme = "light";
  } catch (error) {
    // The switch still works when the browser blocks preference storage.
  }

  function applyTheme(value) {
    root.setAttribute("data-theme", value);
    if (themeColor) themeColor.setAttribute("content", value === "light" ? "#ffffff" : "#181818");
  }

  applyTheme(theme);

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    function updateLabel() {
      toggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
      toggle.setAttribute("aria-label", "Switch to " + (theme === "dark" ? "light" : "dark") + " mode");
    }

    updateLabel();
    toggle.hidden = false;
    toggle.addEventListener("click", function () {
      theme = theme === "dark" ? "light" : "dark";
      applyTheme(theme);
      updateLabel();
      try {
        window.localStorage.setItem(storageKey, theme);
      } catch (error) {
        // Keep the selected theme for this page even without storage access.
      }
    });
  });
})();
