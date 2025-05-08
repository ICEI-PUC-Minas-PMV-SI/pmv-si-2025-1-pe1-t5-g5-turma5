// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "contatos": [
        {
            "id": 11,
            "nome": "João Paulo",
            "cidade": "Belo Horizonte",
            "categoria": "Reformas",
            "email": "joaojp@csg.com.br",
            "telefone": "1-770-736-8031",
            "website": "Marceneiro"
        },
        {
            "id": 12,
            "nome": "Maria Silva",
            "cidade": "Betim",
            "categoria": "Limpeza e conservação",
            "email": "mariasilva@csg.com.br",
            "telefone": "010-692-6593",
            "website": "Diarista"
        },
        {
            "id": 13,
            "nome": "Regina Santos",
            "cidade": "Contagem",
            "categoria": "Serviços domésticos",
            "email": "regisantos@csg.com.br",
            "telefone": "1-463-123-4447",
            "website": "Babá"
        },
        {
            "id": 14,
            "nome": "José Carlos",
            "cidade": "Belo Horizonte",
            "categoria": "Outros serviços",
            "email": "jcpersonal@csg.com.br",
            "telefone": "493-170-9623 x156",
            "website": "Personal Trainner"
        },
        {
            "id": 15,
            "nome": "Carlos Eduardo",
            "cidade": "Contagem",
            "categoria": "Reformas",
            "email": "cadu@csg.com.br",
            "telefone": "024-648-3804",
            "website": "Pintor"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.contatos.length != 0)
      novoId = db.contatos[db.contatos.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "categoria": contato.categoria,
        "website": contato.website
    };

    // Insere o novo objeto no array
    db.contatos.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.contatos.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.contatos[index].nome = contato.nome,
    db.contatos[index].email = contato.email,
    db.contatos[index].telefone = contato.telefone,
    db.contatos[index].cidade = contato.cidade,
    db.contatos[index].categoria = contato.categoria,
    db.contatos[index].website = contato.website

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.contatos = db.contatos.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}
