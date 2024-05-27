const AddProducts = () => {
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const form = e.target;
      const id = form.id.value;
      const title = form.title.value;
      const brand = form.brand.value;
      const price = form.price.value;
      const description = form.description.value;
  
      const data = { id, title, brand, price, description, };
  
      await fetch("http://localhost:3000/shoes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          form.reset();
        });
    };
  
    return (
        <div>
            
            <h1 className="text-5xl font-bold text-center" >
                Add Your Product</h1>
  
        <div className="my-16">
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="title"
                placeholder="Title"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="brand"
                placeholder="Brand"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="number"
                name="price"
                placeholder="Price"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="description"
                placeholder="Description"
              />
            </div>
            
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="id"
                placeholder="ID"
              />
            </div>
            <div className="mt-2 flex justify-center items-center">
              <input
                className="bn btn mt-4 w-full bg-green-500 text-white p-4"
                type="submit"
                value="Add product"
              />
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default AddProducts;