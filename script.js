const API_URL = 'http://localhost:3000/alunos'; //verificar se está correto

//Selecionar os elementos do frontend
const alunosList = document.getElementById("alunos-list");
const form = document.getElementById("aluno-form");
const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const cursoInput = document.getElementById("curso");
const submitBtn = form.querySelector("button");

let editandoId = null;

//Funções
//Função para criar um novo registro
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const novoAluno = {
        nome: nomeInput.value,
        idade: parseInt(idadeInput.value),
        curso: cursoInput.value,
    };

    if (editandoId) {
        // Se estiver editando, faz PUT
        await fetch(`${API_URL}/${editandoId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(aluno),
        });
        editandoId = null;
        submitBtn.textContent = "Adicionar"; // volta ao normal
    } else {
        // Se não estiver editando, faz POST
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(aluno),
        });
    }

    nomeInput.value = "";
    idadeInput.value = "";
    cursoInput.value = "";
    carregarAlunos();
});

//Função para listar os registros já criados
async function carregarAlunos(){
    const res = await fetch(API_URL); //Extender a sintaxe do fetch api
    const alunos = await res.json();

    alunosList.innerHTML = "";

    alunos.forEach(aluno => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${aluno.nome} (${aluno.idade} anos) <br><span class='curso'>${aluno.curso}</span></span>
        <div class="actions">
            <button class="editar" onclick="atualizarAluno('${aluno._id}')">Editar</button>
            <button class="excluir" onclick="deletarAluno('${aluno._id}')">Excluir</button>
        </div>
        `;
        alunosList.appendChild(li);
    });
}
//Função para apagar um registro
async function deletarAluno(id) {
    if (confirm("Deseja realmente apagar o registro?")) {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        carregarAlunos();
    }
}
//Função para atualizar um registro
async function atualizarAluno(id){
    const res = await fetch(`${API_URL}/${id}`); //Extender a sintaxe do fetch api
    const aluno = await res.json();

    nomeInput.value = `${aluno.nome}`;
    idadeInput.value = `${aluno.idade}`;
    cursoInput.value = `${aluno.curso}`;

    editandoId = id;
    submitBtn.textContent = "Salvar";
}
//Chamar a função para listar os alunos
carregarAlunos();