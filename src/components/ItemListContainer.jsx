// ItemListContainer.jsx
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase/config";
import ItemList from "./Itemlist.jsx";

const db = getFirestore(app);

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]); // lista filtrada
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const ref = collection(db, "Items"); //
        const snap = await getDocs(ref);

        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Productos cargados:", data);
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener items:", error);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    const s = search.toLowerCase();

    const results = items.filter(
      (item) =>
        item.name.toLowerCase().includes(s) ||
        (item.description && item.description.toLowerCase().includes(s))
    );

    setFiltered(results);
  }, [search, items]);

  if (loading)
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#F0A500",
          fontSize: 24,
        }}
      >
        Cargando productos...
      </p>
    );

  return (
    <div>
      {/* BARRA DE BUSQUEDA */}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: 8,
          width: "25%",
          marginBottom: 20,
          fontSize: 16,
        }}
      />
      {/* LISTA FILTRADA */}
      <ItemList items={filtered} />
    </div>
  );
};

export default ItemListContainer;
