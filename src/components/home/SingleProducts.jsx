import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProducts = ({ shoe }) => {
  
  const { id, title, brand, price, description } = shoe;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">Brand : {brand}</h3>
        <h3 className="text-xl font-semibold">Price : {price}$</h3>
        <p>{description}</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary text-center mx-auto">
            <Link to={`/products/${id}`} className="px-8">See details</Link>
          </button>
      </div>
    </div>
  </div>
  )
}

export default SingleProducts
