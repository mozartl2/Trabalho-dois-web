document.querySelectorAll('.trocar-imagem').forEach(function(btn) {
    const imagens = JSON.parse(btn.getAttribute('data-imagens'));
    let idx = 0;
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const img = btn.closest('.card').querySelector('.produto-img');
        idx = (idx + 1) % imagens.length;
        img.src = imagens[idx];
    });
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Cadastro enviado com sucesso!');
    window.location.href = 'index.html';
});