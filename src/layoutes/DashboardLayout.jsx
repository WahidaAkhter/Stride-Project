import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-gray-300 min-h-screen p-12">
        <ul>
          <li className="border border-black p-4 text w-full">
            <Link to={"home"} className="font-semibold ">Dashboard</Link>
          </li>
          <li className="border border-black p-4 text w-full">
            <Link to={"all-products"}className="font-semibold ">All Products</Link>
          </li>
          <li className="border border-black p-4 text w-full">
            <Link to={"add-products"} className="font-semibold ">Add Product</Link>
          </li>
          <li className="border border-black p-4 text w-full">
            <Link to={"/"}className="font-semibold ">Home</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;