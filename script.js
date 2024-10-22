const usuarios = [];

function cadastrarUsuario() {
    const fotoInput = document.getElementById('foto');
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cidade = document.getElementById('cidade').value;

    if (!fotoInput.files[0] || !nome || !idade || !cidade) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const usuario = {
            foto: e.target.result,
            nome: nome,
            idade: idade,
            cidade: cidade
        };

        usuarios.push(usuario);
        mostrarUsuarios();
    };
    reader.readAsDataURL(fotoInput.files[0]);
    
    // Limpa os campos após o cadastro
    document.getElementById('foto').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('cidade').value = '';
}

function mostrarUsuarios() {
    const disponiveisDiv = document.getElementById('disponiveis');
    disponiveisDiv.innerHTML = '';

    usuarios.forEach(usuario => {
        const usuarioDiv = document.createElement('div');
        usuarioDiv.innerHTML = `
            <img src="${usuario.foto}" alt="Foto de ${usuario.nome}" style="width: 50px; height: 50px;">
            <p>Nome: ${usuario.nome}</p>
            <p>Idade: ${usuario.idade}</p>
            <p>Cidade: ${usuario.cidade}</p>
        `;
        disponiveisDiv.appendChild(usuarioDiv);
    });
}
