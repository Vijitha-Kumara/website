type Props = {
  product: {
    id: number;
    name: string;
    price: number;
  };
  addToCart: (product: any) => void;
};

function ProductCard({ product, addToCart }: Props) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}> Add To Cart</button>
    </div>
  );
}

export default ProductCard;
