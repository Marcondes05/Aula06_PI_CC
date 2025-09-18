const API_URL = 'http://localhost:3000/alunos';

//Selecionar os elementos do frontend
const alunosList = document.getElementById("alunos-list");
const form = document.getElementById("aluno-form");
const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const cursoInput = document.getElementById("curso");
const submitBtn = form.querySelector("button[type='submit']");
const cancelarBtn = document.getElementById("cancelar");

let editandoId = null; // <- controla se estamos editando

//Função para criar ou atualizar aluno
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const aluno = {
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
        resetarFormulario();
    } else {
        // Se não estiver editando, faz POST
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(aluno),
        });
        limparFormulario();
    }

    carregarAlunos();
});

//Função para listar os registros já criados
async function carregarAlunos(){
    const res = await fetch(API_URL);
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
    const res = await fetch(`${API_URL}/${id}`);
    const aluno = await res.json();

    nomeInput.value = aluno.nome;
    idadeInput.value = aluno.idade;
    cursoInput.value = aluno.curso;

    editandoId = id; 
    submitBtn.textContent = "Salvar"; 
    cancelarBtn.style.display = "inline-block"; // mostra botão cancelar
}

//Função para cancelar a edição
cancelarBtn.addEventListener("click", () => {
    resetarFormulario();
});

//Função para limpar os campos
function limparFormulario(){
    nomeInput.value = "";
    idadeInput.value = "";
    cursoInput.value = "";
}

//Função para resetar o formulário inteiro (sair do modo edição)
function resetarFormulario(){
    limparFormulario();
    editandoId = null;
    submitBtn.textContent = "Adicionar";
    cancelarBtn.style.display = "none";
}

//Chamar a função para listar os alunos
carregarAlunos();
