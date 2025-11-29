// src/components/ItemDetailContainer.jsx
// ItemDetailContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../firebase/config";
import ItemDetail from "./ItemDetail";

const db = getFirestore(app);

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "Items", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem({
            id: docSnap.id,
            ...docSnap.data(),
          });
        } else {
          console.log("No existe el producto");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading)
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#F0A500",
          FontSize: 24,
        }}
      >
        Cargando detalles...
      </p>
    );
  if (!item)
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#F0A500",
          fontSize: 24,
        }}
      >
        Producto no encontrado
      </p>
    );

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
