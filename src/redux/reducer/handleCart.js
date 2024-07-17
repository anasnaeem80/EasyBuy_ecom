const cart = [];

const handleCart = (state = { items: cart }, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      const exist = state.items.find((x) => x.id === product.id);
      if (exist) {
        return {
          ...state,
          items: state.items.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty + 1 } : x
          ),
        };
      } else {
        const productWithQty = { ...product, qty: 1 };
        return {
          ...state,
          items: [...state.items, productWithQty],
        };
      }

    case "DELITEM":
      const exist1 = state.items.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return {
          ...state,
          items: state.items.filter((x) => x.id !== product.id),
        };
      } else {
        return {
          ...state,
          items: state.items.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty - 1 } : x
          ),
        };
      }

    case "LOGOUT":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default handleCart;
