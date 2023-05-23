import Header from "../components/Header";
import ProductRow from "../components/ProductRow";
import { BiCheck } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";

import dataProducts from "../constants/dataProducts";

const ProductList = () => {
  return (
    <div>
      <Header page="client-list" />

      <main className="sm:px-16 px-6 flex flex-col justify-center my-20">
        <h1 className="text-5xl text-left font-bold mb-4 container">
          Produtos
        </h1>

        <div className="flex container justify-between flex-col bg-white m-auto max-h-[726px] rounded-lg">
          <table className="w-full overflow-y-scroll">
            <thead>
              <tr className="w-full">
                <th className="border border-gray-950 p-3">Nome</th>
                <th className="border border-gray-950 p-3">Tipo</th>
                <th className="border border-gray-950 p-3">Quantidade</th>
                <th className="border border-gray-950 p-3">Preço</th>
                <th className="border border-gray-950 p-3">Exclusão</th>
              </tr>
            </thead>
            <tbody className="w-full overflow-y-scroll">
              {dataProducts.map(({ name, category, stock, price }, index) => (
                <ProductRow name={name} category={category} stock={stock} price={price} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ProductList;
