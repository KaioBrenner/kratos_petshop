import Header from "../components/Header";
import ProductRow from "../components/ProductRow";
import { BiCheck } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState, useEffect } from "react";
import axios from "axios";
import { SlMagnifier } from "react-icons/sl";
import dataProducts from "../constants/dataProducts";

import Modal from "../components/Modal";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        const dataClients = response.data;
        setProducts(dataClients);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <Header page="client-list" />

      <main className="sm:px-16 px-6 flex flex-col justify-center my-20">
        <h1 className="text-5xl text-left font-bold mb-4 container">
          Produtos
        </h1>

        <div className="my-4 relative">
          <input
            type="search"
            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2 "
            onChange={handleSearch}
            placeholder="Pesquisar produto"
          />
          <SlMagnifier className="absolute top-5 right-4" />
        </div>

        <div className="bg-white p-3 rounded-lg">
          <div className="flex gap-5 justify-start">
            <Modal type="addProduct"></Modal>
            <Modal type="buyProducts"></Modal>
          </div>
          <div className="max-h-[60vh] bg-white overflow-y-auto border border-gray-200  rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Categoria
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estoque
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Preço
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                    Exclusão
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {searchTerm ? filteredProducts.map(
                  ({ productName, category, stock, price, _id }) => (
                    <ProductRow
                      productName={productName}
                      category={category}
                      stock={stock}
                      price={price}
                      id={_id}
                    ></ProductRow>
                  )
                ) : products.map(
                  ({ productName, category, stock, price, _id }) => (
                    <ProductRow
                      productName={productName}
                      category={category}
                      stock={stock}
                      price={price}
                      id={_id}
                    ></ProductRow>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductList;
