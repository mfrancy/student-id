# Student ID – Carteirinha Digital do Aluno

Este projeto é uma aplicação web simples desenvolvida como exercício de estudo em desenvolvimento front-end.

A aplicação simula um pequeno portal do aluno onde, após o login, é exibida uma carteirinha estudantil digital contendo as principais informações do estudante e um QR Code de validação.

## Objetivo do projeto

O objetivo deste projeto é praticar conceitos fundamentais de desenvolvimento web, incluindo:

* Estruturação de páginas HTML
* Organização de arquitetura de projeto
* Estilização com CSS
* Manipulação do DOM com JavaScript
* Uso de LocalStorage
* Geração de QR Code
* Responsividade para dispositivos móveis

Este projeto foi desenvolvido apenas para fins de aprendizado.

## Funcionalidades

* Tela de login simples utilizando RA e senha
* Armazenamento das informações do aluno no LocalStorage
* Redirecionamento para a página de carteirinha após login
* Exibição das informações do aluno:

  * Nome
  * Matrícula (RA)
  * Curso
  * Status da matrícula
  * Foto do aluno
* Geração automática de QR Code para validação do aluno
* Botão de logout
* Layout responsivo para desktop e dispositivos móveis

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* LocalStorage
* Biblioteca QRCode.js

## Estrutura do projeto

```
student-id/
│
├─ index.html
│
├─ pages/
│  └─ carteirinha.html
│
├─ styles/
│  └─ style.css
│
├─ js/
│  ├─ login.js
│  └─ carteirinha.js
│
├─ assets/
│  └─ images/
│
└─ README.md
```

## Como executar o projeto

1. Clone o repositório

```
git clone https://github.com/mfrancy/student-id.git
```

2. Abra a pasta do projeto.

3. Execute o arquivo:

```
index.html
```

A aplicação funciona diretamente no navegador e não requer instalação de dependências ou servidor.

## Observações

Este projeto foi desenvolvido como prática de desenvolvimento front-end e simulação de uma funcionalidade simples de carteirinha digital de estudante.
