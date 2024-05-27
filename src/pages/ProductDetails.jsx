import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const shoe = useLoaderData();
    const { brand, description, image_url, price, title } = shoe;
  return (
    <div>
        <h1 className="text-5xl text-center font-bold">{title}</h1>

          <img className="h-[300px] mx-auto" src={image_url} alt="product image" />
          
          <h3 className="text-xl font-semibold">Brand : {brand}</h3>
          
          <h3 className="text-2xl font-semibold">Price : {price} $$</h3>
       
        <p className="text-lg font-light">{description}</p>
    </div>
  )
}

export default ProductDetails;
