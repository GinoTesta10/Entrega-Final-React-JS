import styles from "../components/items.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Items = ({ inicio }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // const fetchItems = () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(productos);
  //     }, 2000);
  //   });
  // };

  return (
    <div className={styles.inicio}>
      <h2>{inicio}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Items;
