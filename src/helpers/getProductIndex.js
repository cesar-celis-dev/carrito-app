import { products } from "../data/products";

export const getProductIndex = (id) => {
  const index = products.findIndex(i => {
    return i.id === id;
  });
  return index
}