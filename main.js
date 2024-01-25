document.querySelectorAll('#about button').forEach(button => {
    button.addEventListener('click', () => {
      document.getElementById('popup-detail').textContent = button.dataset.detail;
      document.getElementById('popup').classList.remove('hidden');
    });
  });
  
  document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('popup').classList.add('hidden');
  });