import SingleProducts from "./SingleProducts"

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div>
          <h1 className="my-8 font-bold text-center text-3xl">Our Pro<span className="text-primary">ducts</span></h1>
          <div className="flex gap-2 px-6 justify-center items-center ">
        {
          // eslint-disable-next-line react/prop-types
          data.slice(0, 3).map((shoe) => (
            <SingleProducts key={shoe.id} shoe={shoe} />
          ))
        }
      </div>
          
    </div>
  )
}

export default Products
