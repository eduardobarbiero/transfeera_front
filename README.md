# Transfeera!
## Projeto teste para desenvolvedor na transfeera.

Cadastros de Estados, Cidades e CEPs

## Tecnologias
* React v16.4.0
* Node v7.10.0
* Npm v6.1.0
* Webpack v3.0.0
* Bootstrap v4

## Utilização
### Requisitos necessários:
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))

### Instalação
1. Clone o repositório: `git clone https://github.com/eduardobarbiero/transfeera_front.git`;
2. Instale as dependências: `npm install`;
3. A configuração do caminho do servidor de API, deve ser feito em `/src/app/config` e modificar o parâmetro `apiUrl`;
5. Execute `npm run dev` para iniciar o servidor em desenvolvimento;
6. Abra o navegador com o endereço `http://localhost:2200/#/`.

### Comandos 
#### Gulp
* `gulp run` -> executa o servidor com url de api de desenvolvimento;
* `gulp run --env {production, dev}` -> modificam a url do servidor para acesso;
* `gulp run-app` --> executa em desenvolvimento.

Obs: Os comandos gulps precisam ser configurados para as URLs desejadas.

#### Webpack Build
* `npm run build` -> compila os arquivos para produção e manda para uma pasta `/dist` na raiz do projeto (para execução deve ser utilizado um servidor de aplicação);
* `npm run dev` -> executa em desenvolvimento;

