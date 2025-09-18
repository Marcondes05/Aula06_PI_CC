# 📘 Gerenciador de Alunos - Projeto Completo

Este projeto foi desenvolvido como parte da disciplina **Programação para Internet II (2025)** e é composto por **dois repositórios**:

- [Aula03_PI_CC](https://github.com/Marcondes05/Aula03_PI_CC) → **API (backend)**
- [Aula06_PI_CC](https://github.com/Marcondes05/Aula06_PI_CC) → **Frontend**

O sistema permite gerenciar alunos através de operações **CRUD**:  
Criar, Listar, Editar/Atualizar e Excluir.

---

# 🖥️ Frontend (Aula06_PI_CC)

## 🚀 Funcionalidades

✅ **Adicionar aluno**: formulário para cadastrar novos alunos.  
✅ **Listar alunos**: exibe todos os alunos cadastrados.  
✅ **Editar aluno**: permite atualizar as informações de um aluno existente.  
✅ **Cancelar edição**: botão que desfaz a ação de editar.  
✅ **Excluir aluno**: remove um aluno da lista com confirmação.  

---

## 📂 Estrutura do projeto

```
Aula06_PI_CC/
│── index.html     # Estrutura base do frontend
│── style.css      # Estilos da interface
│── script.js      # Lógica de integração com a API (fetch, eventos, CRUD)
```

---

## ⚙️ Como executar o frontend

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/Marcondes05/Aula06_PI_CC
```

### 2️⃣ Abrir no navegador
Abra o arquivo **index.html** em qualquer navegador moderno.  
⚠️ A API precisa estar rodando para que as operações funcionem.

---

# ⚙️ API (Aula03_PI_CC)

A API é responsável por gerenciar os dados de alunos e expor os endpoints REST para o frontend consumir.

## 📂 Estrutura do projeto

```
Aula03_PI_CC/
│── src/
│    ├── models/      # Definição dos modelos (Aluno)
│    ├── routes/      # Definição das rotas
│    └── index.js     # Inicialização do servidor
│── package.json
```

---

## ⚙️ Como executar a API

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/Marcondes05/Aula03_PI_CC
```

### 2️⃣ Instalar dependências
```bash
cd Aula03_PI_CC
npm install
```

### 3️⃣ Rodar a API
```bash
npm start
```

A API ficará disponível em:
```
http://localhost:3000/alunos
```

---

# 📚 Atividade Prática 03

Implementar o recurso de **editar/atualizar um registro (UPDATE)**:  
- Ao clicar em **Editar**, os dados do aluno são carregados no formulário do frontend.  
- O botão principal muda de **Adicionar** para **Salvar**.  
- Um botão **Cancelar edição** aparece, permitindo desfazer a ação.  
- Ao salvar, os dados são atualizados via `PUT` na API.  

---

# 🛠️ Tecnologias utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Fetch API  
- **Backend**: Node.js, Express, MongoDB (Mongoose)  

---

👨‍💻 Desenvolvido como prática da disciplina **Programação para Internet II - 2025**.
