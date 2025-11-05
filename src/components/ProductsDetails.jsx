import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }
  return (
    <>
      <div>Detalles del Producto</div>;<h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </>
  );
};

export default ProductsDetails;
