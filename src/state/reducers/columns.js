export const Types = {
  SET_COLUMNS: 'structure/SET_COLUMNS',
};

const inititalState = {
  columns: {
      "c01": {
          "icone": "📝",
          "nome": "To Do",
          "cor": 0,
          "tarefas": [{
                  "id": "t01",
                  "nome": "Documentar padrões mobile",
                  "tags": ["To Do", "Tag 1", "Tag 2"]
              },
              {
                  "id": "t02",
                  "nome": "Ajustes fluxo de compra",
                  "tags": ["To Do"]
              },
              {
                  "id": "t03",
                  "nome": "Banners da home",
                  "tags": ["To Do"]
              },
              {
                  "id": "t04",
                  "nome": "Template de e-mail marketing",
                  "tags": ["To Do"]
              }
          ]
      },
      "c02": {
          "icone": "💻",
          "nome": "In Progress",
          "cor": 1,
          "tarefas": [{
              "id": "t05",
              "nome": "Wireframe das telas",
              "tags": ["Desenvolvimento"]
          }]
      },
      "c03": {
          "icone": "🚀",
          "nome": "Done",
          "cor": 2,
          "tarefas": [{
                  "id": "t06",
                  "nome": "Implementação do blog",
                  "tags": []
              },
              {
                  "id": "t07",
                  "nome": "Análise de métricas",
                  "tags": []
              },
              {
                  "id": "t08",
                  "nome": "UX Review",
                  "tags": []
              }
          ]
      }
  }
}

export default function reducer(state = inititalState, action) {
  switch (action.type){
    case Types.SET_COLUMNS:
      return {...state, columns: action.payload};
    default:
      return state;
  }
}

export function setColumns(columns) {
  return {
    type: Types.SET_COLUMNS,
    payload: columns,
  }
}