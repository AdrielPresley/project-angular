# Arquitetura de Componentes

* Exemplificando os tipos de data binding do Angular.

# Explorando Diretivas com Angular: "Como preparar seu ambiente".

### 1) O que é o angular ?

* 1.1) Framework criado pelo google focado na criação de aplicativos de página única eficientes e sofisticados.

* 1.2) [Documentação Oficial](https://angular.io/)

### 2) O que é uma página SPA ?

* 2.1) Um SPA é uma aplicação web que roda em uma única página.

* 2.2) **Fonte:** [Artigo: O que é uma SPA: Single-Page Application?](https://angular.io/)

### 3) Objetivo

* 3.1) Aprender o que é o angular, para que serve e como construir uma aplicação inicial com angular e suas ferramentas.

### 4) Instalação angular CLI.

```bash
npm install -g @angular/cli
```

### 5) Como inicializar a sua aplicação.

```bash
ng new my-first-project
cd my-first-project
ng serve
```

### 6) Como compilar sua aplicacao para publicacao.

* 6.1) Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

### 7) Executando testes de unidade

* 7.1) Execute `ng test` para executar os testes de unidade via [Karma] (https://karma-runner.github.io).

### 8) Executando testes ponta a ponta (End-to-End)

* 8.1) Execute `ng e2e` para executar os testes de ponta a ponta por meio de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente recursos de teste de ponta a ponta(End-to-End).

### 9) Comandos úteis angular CLI

![Comandos uteis angular cli](https://i.stack.imgur.com/WczZ8.png)

* [Lista com outros comandos utilizados no angular CLI](https://malcoded.com/static/68c150aaaee9e8056f44fb81a08799ad/f9a96/angular-cli-cheat-sheet.webp)

## Projeto desenvolvido durante o Bootcamp Philips Fullstack Developer | You Are You - Digital Innovation One.
