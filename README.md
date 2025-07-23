# 🛍️ Produto Web - Front-end React

Este é o front-end de um sistema de produtos, desenvolvido em **React**. Ele consome uma API REST que fornece dados sobre produtos, vendedores e formas de pagamento, definida por um contrato OpenAPI (Swagger).

---

## 📦 Tecnologias Utilizadas

- ⚛️ [React](https://reactjs.org/)
- 🧭 [React Router DOM](https://reactrouter.com/)
- 📦 [Axios](https://axios-http.com/) (para requisições HTTP)

---

## 🗂️ Estrutura de Pastas

```
src/
├── components/         # Componentes reutilizáveis
├── pages/              # Páginas principais (Home, Detalhes do Produto, etc.)
├── services/           # Integração com API (Axios, etc)
├── config/             # Configurações globais (ex: baseURL do axios)
├── App.jsx             # Componente principal
├── index.js            # Entrada da aplicação
```

---

## 🚀 Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/wandersonalvesqueiroz/mercadoLivreWeb.git
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar a URL da API

Certifique-se de que o **back-end** esteja rodando em `http://localhost:8080`.

### 4. Rodar a aplicação

```bash
npm start
```

Acesse em [http://localhost:3000](http://localhost:3000)

---

## 🔄 Funcionalidades

- Página de detalhes com:
  - Imagens
  - Preço atual e anterior
  - Parcelamento
  - Métodos de pagamento
  - Avaliações por estrelas
  - Informações do vendedor
- Responsivo para dispositivos móveis

---

## ✅ Integração com Back-end

Este front-end consome a API desenvolvida em Spring Boot.

---


## 👨‍💻 Desenvolvido por

- Wanderson Alves  
🔗 [LinkedIn](https://www.linkedin.com/in/wandersonalvesqueiroz/)  
📧 wandersonmg18@gmail.com