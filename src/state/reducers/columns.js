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
                  "name": "Make deploy",
                  "tags": ["To Do", "Development"]
              },
              {
                "id": "t06",
                "name": "API Documentation",
                "tags": ["To do"]
              }
          ]
      },
      "c02": {
          "icon": "💻",
          "name": "In Progress",
          "color": 1,
          "tasks": [{
              "id": "t05",
              "name": "New UI for eCommerce",
              "tags": ["Design"]
          }]
      },
      "c03": {
          "icon": "🚀",
          "name": "Done",
          "color": 2,
          "tasks": []
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