import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../components/home/dashboard/SingleProductCardDashboard";

const AllProducts = () => {

  const [products, setProducts] = useState([]);
  alert("you just deleted a product");

    useEffect(() => {
        fetch("http://localhost:3000/shoes/")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);
    
      const handleDeleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
      };

  return (
    <div>
    <h1 className="text-5xl font-bold text-center text-sky-950">All Products</h1>
    <div className="my-16 flex flex-wrap gap-4">
      {products.map((shoe) => (
        <SingleProductCardDashboard
          key={shoe.id}
          shoe={shoe}
          onDelete={handleDeleteProduct}
          onClick={"alert"}
        />
      ))}
    </div>
  </div>
  )
}

export default AllProducts
