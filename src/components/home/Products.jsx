import SingleProducts from "./SingleProducts"

const Products = () => {
  return (
    <div>
          <h1 className="my-8 text- 2xl font-bold text-center">Our Products</h1>
          <div className="flex gap-2">
          <SingleProducts />
          <SingleProducts />
          <SingleProducts/>
          </div>
          
    </div>
  )
}

export default Products
