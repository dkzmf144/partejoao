(function() {
  const copyBtn = document.getElementById('copyBtn');
  const pixCode = document.getElementById('pixCode');
  const feedback = document.getElementById('copyDesc');

  copyBtn.addEventListener('click', () => {
    const text = pixCode.textContent.trim();
    navigator.clipboard.writeText(text).then(() => {
      feedback.setAttribute('aria-hidden', 'false');
      feedback.classList.add('visible');
      setTimeout(() => {
        feedback.setAttribute('aria-hidden', 'true');
        feedback.classList.remove('visible');
      }, 1500);
    }).catch(() => {
      alert('Falha ao copiar o código. Por favor, copie manualmente.');
    });
  });
})();
