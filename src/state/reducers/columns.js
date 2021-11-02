export const Types = {
  SET_COLUMNS: 'structure/SET_COLUMNS',
};

const inititalState = {
  columns: {
      "c01": {
          "icon": "📝",
          "name": "To Do",
          "color": 0,
          "tasks": [{
                  "id": "t01",
                  "name": "Documentar padrões mobile",
                  "tags": ["To Do", "Tag 1", "Tag 2"]
              },
              {
                  "id": "t02",
                  "name": "Ajustes fluxo de compra",
                  "tags": ["To Do"]
              },
              {
                  "id": "t03",
                  "name": "Banners da home",
                  "tags": ["To Do"]
              },
              {
                  "id": "t04",
                  "name": "Template de e-mail marketing",
                  "tags": ["To Do"]
              }
          ]
      },
      "c02": {
          "icon": "💻",
          "name": "In Progress",
          "color": 1,
          "tasks": [{
              "id": "t05",
              "name": "Wireframe das telas",
              "tags": ["Desenvolvimento"]
          }]
      },
      "c03": {
          "icon": "🚀",
          "name": "Done",
          "color": 2,
          "tasks": [{
                  "id": "t06",
                  "name": "Implementação do blog",
                  "tags": []
              },
              {
                  "id": "t07",
                  "name": "Análise de métricas",
                  "tags": []
              },
              {
                  "id": "t08",
                  "name": "UX Review",
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