"use strict";

angular.module('transfeera-front')
.constant("AppConfig", {    
    "api_url": "http://localhost:3000/"
})

.constant("ERRORS", {
  "default": {
    codigo: "Desconhecido",
    descricao: "Ocorreu um erro desconhecido",
    causasProvaveis: ["Ocorreu um erro que não podemos diagnosticar"]
  },
  0: {
    codigo: 0,
    descricao: "Ocorreu um erro ao tentar acessar o servidor.",
    causasProvaveis: ["Houve algum problema na sua rede no momento em que a requisição foi realizada", "O servidor demorou muito para responder", "O servidor não permite requisições a partir desta origem", "O firewall está bloqueando acesso ao servidor", "Alguma extensão instalada no browser pode estar impedindo o acesso ao servidor"]
  },
  1: {
    codigo: -1,
    descricao: "Ocorreu um erro ao tentar acessar o servidor.",
    causasProvaveis: ["Houve algum problema na sua rede no momento em que a requisição foi realizada", "O servidor demorou muito para responder", "O servidor não permite requisições a partir desta origem", "O firewall está bloqueando acesso ao servidor", "Alguma extensão instalada no browser pode estar impedindo o acesso ao servidor"]
  },
  2: {
    codigo: 400,
    descricao: "Requisição inválida",
    causasProvaveis: ["O servidor não pôde compreender a solicitação e processá-la devido à sintaxe incorreta"]
  },
  3: {
    codigo: 401,
    descricao: "Não autorizado",
    causasProvaveis: ["Acesso negado devido a credenciais inválidas", "Você está logado, porém seu perfil de usuário não tem permissão de acesso a essas informações"]
  },
  4: {
    codigo: 403,
    descricao: "Acesso negado",
    causasProvaveis: ["Você pode estar acessando uma URL inválida", "Você não tem permissão para acessar esta página"]
  },
  5: {
    codigo: 404,
    descricao: "Página não encontrada",
    causasProvaveis: ["Você pode estar acessando uma URL inválida"]
  },
  6: {
    codigo: 499,
    descricao: "Dados inválidos"
  },
  7: {
    codigo: 500,
    descricao: "Erro interno de servidor",
    causasProvaveis: ["O servidor encoutrou um erro inesperado que impediu de realizar sua solicitação"]
  },
  8: {
    codigo: 999,
    descricao: "Erro ao processar sua solicitação",
    causasProvaveis: ["O seu navegador não tem suporte a todas as tecnologias exigidas pelo sistema"]
  }
});