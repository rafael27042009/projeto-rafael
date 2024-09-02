// scripts.js

document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para o servidor
    
    // Obtém os valores dos campos do formulário
    const link = document.getElementById('link').value;
    const comment = document.getElementById('comment').value;
    
    // Cria um novo item de lista para o comentário
    const li = document.createElement('li');
    
    // Adiciona o link e o comentário ao item de lista
    li.innerHTML = `<a href="${link}" target="_blank">${link}</a><p>${comment}</p>`;
    
    // Adiciona o novo comentário ao início da lista de comentários
    const commentsList = document.getElementById('comments-list');
    commentsList.insertBefore(li, commentsList.firstChild);
    
    // Limpa os campos do formulário
    document.getElementById('comment-form').reset();
});
