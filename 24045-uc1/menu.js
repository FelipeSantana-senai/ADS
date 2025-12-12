// menu.js
const menuData = {
  menu: [
    {
      title: "Linguagem de Programação",
      icon: "bi bi-pin-fill",
      page: "index.html",
      isOpen: false,
      subitems: [
        {
          nivel: "1",
          title: "Apresentação",
          link: "index.html#aula0-section-1",
        },
        
      ],
    },
    {
      title: "Introdução à lógica de programação",
      icon: "bi bi-pin-fill",
      page: "aula-1.html",
      isOpen: false,
      subitems: [
        {
          nivel: "1",
          title: "Pensamento computacional e algoritmos: a base da programação",
          link: "aula-1.html#aula1-section-1",
        },
        {
          nivel: "1",
          title: "Praticando",
          link: "aula-1.html#aula1-section-2",
        },
       
      ],
    },
    {
      title: "Algoritmos e formas de representação",
      icon: "bi bi-pin-fill",
      page: "aula-2.html",
      isOpen: false,
      subitems: [
        {
          nivel: "1",
          title: "Planejando soluções: descrição, fluxograma e pseudocódigo",
          link: "aula-2.html#aula2-section-1",
        },
        {
          nivel: "1",
          title: "Praticando",
          link: "aula-2.html#aula2-section-2",
        },
       
      ],
    },


    {
      title: "Introdução à linguagem de programação Java",
      icon: "bi bi-pin-fill",
      page: "aula-3.html",
      isOpen: false,
      subitems: [
        {
          nivel: "1",
          title: "Java na prática: da lógica ao código",
          link: "aula-3.html#aula3-section-1",
        },
        {
          nivel: "1",
          title: "Praticando",
          link: "aula-3.html#aula3-section-2",
        },
       
      ],
    },


    {
      title: "Estrutura sequencial",
      icon: "bi bi-pin-fill",
      page: "aula-4.html",
      isOpen: false,
      subitems: [
        {
          nivel: "1",
          title: "Executando passo a passo: operações em sequência",
          link: "aula-4.html#aula4-section-1",
        },
        {
          nivel: "1",
          title: "Praticando",
          link: "aula-4.html#aula4-section-2",
        },
       
      ],
    },


    {
      title: "Estruturas de controle: condicionais – parte 1",
      icon: "bi bi-pin-fill",
      page: "aula-5.html",
      isOpen: false,
      subitems: [
        {
          nivel: "1",
          title: "Tomando decisões: condições simples e compostas",
          link: "aula-5.html#aula5-section-1",
        },
        {
          nivel: "1",
          title: "Praticando",
          link: "aula-5.html#aula5-section-2",
        },
       
      ],
    },


    {
      title: "Estruturas de controle: condicionais – parte 2",
      icon: "bi bi-pin-fill",
      page: "aula-6.html",
      isOpen: false,
      subitems: [
        {
          nivel: "1",
          title: "Estruturas de controle: condicionais – parte 2",
          link: "aula-6.html#aula6-section-1",
        },
        {
          nivel: "1",
          title: "Praticando",
          link: "aula-6.html#aula6-section-2",
        },
       
      ],
    },

    {
      title: "Estruturas de repetição – parte 1",
      icon: "bi bi-pin-fill",
      page: "aula-7.html",
      isOpen: false,
      subitems: [
        {
          nivel: "1",
          title: "Repetindo tarefas: laço enquanto (while)",
          link: "aula-7.html#aula7-section-1",
        },
        {
          nivel: "1",
          title: "Praticando",
          link: "aula-7.html#aula7-section-2",
        },
       
      ],
    },


    {
      title: "Estruturas de repetição – parte 2",
      icon: "bi bi-pin-fill",
      page: "aula-8.html",
      isOpen: false,
      subitems: [
        {
          nivel: "1",
          title: "Laços determinados: para (for) e faça...enquanto (do...while)",
          link: "aula-8.html#aula8-section-1",
        },
        {
          nivel: "1",
          title: "Praticando",
          link: "aula-8.html#aula8-section-2",
        },
       
      ],
    },


    {
      title: "Vetores",
      icon: "bi bi-pin-fill",
      page: "aula-9.html",
      isOpen: false,
      subitems: [
        {
          nivel: "1",
          title: "Organizando dados em lista: trabalhando com vetores",
          link: "aula-9.html#aula9-section-1",
        },
        {
          nivel: "1",
          title: "Praticando",
          link: "aula-9.html#aula9-section-2",
        },
       
      ],
    },


    {
      title: "Matrizes",
      icon: "bi bi-pin-fill",
      page: "aula-10.html",
      isOpen: false,
      subitems: [
        {
          nivel: "1",
          title: "Dados em Tabelas: Manipulando Matrizes (2D)",
          link: "aula-10.html#aula10-section-1",
        },
        {
          nivel: "1",
          title: "Praticando",
          link: "aula-10.html#aula10-section-2",
        },
       
      ],
    },


    {
      title: "Interface gráfica em Java",
      icon: "bi bi-pin-fill",
      page: "aula-11.html",
      isOpen: false,
      subitems: [
        {
          nivel: "1",
          title: "Do texto à janela: criando interfaces visuais no Java",
          link: "aula-11.html#aula11-section-1",
        },
        {
          nivel: "1",
          title: "Praticando",
          link: "aula-11.html#aula11-section-2",
        },
       
      ],
    },


    {
      title: "Encerramento",
      icon: "bi bi-pin-fill",
      page: "aula-12.html",
      isOpen: false,
      subitems: [
        {
          nivel: "1",
          title: "Encerramento",
          link: "aula-12.html#aula12-section-1",
        },
       
      ],
    },
    
   
  ]
};

// Exporta a variável para uso em outros arquivos (se usar módulos)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = menuData;
} else {
  window.menuData = menuData; // Disponível globalmente no navegador
}