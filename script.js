document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('mode-toggle').addEventListener('change', function() {
    document.body.classList.toggle('light-mode', this.checked);
  });
});