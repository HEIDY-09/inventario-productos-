export const LISTA_DE_PRODUCTOS = [
  { id: 1, nombre: "Producto 1", precio: 10, cantidad: 5 },
  { id: 2, nombre: "Producto 2", precio: 20, cantidad: 3 },
  { id: 3, nombre: "Producto 3", precio: 15, cantidad: 8 },
];

export const productReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_PRODUCTO":
      return [...state, action.payload];
    case "ELIMINAR_PRODUCTO":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
