import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductEdit = ({
  closeModal,
  productName,
  category,
  stock,
  price,
  productId,
}) => {
  //   const [productName, setProductName] = useState("");
  //   const [category, setCategory] = useState("Alimento");
  //   const [stock, setStock] = useState("");
  //   const [price, setPrice] = useState("");

  const [productData, setProductData] = useState({
    productName,
    category,
    stock,
    price,
  });

  useEffect(() => {
    console.log(productData);
  }, []);

  const [productNameError, setProductNameError] = useState("");
  const [stockError, setStockError] = useState("");
  const [priceError, setPriceError] = useState("");

  const [products, setProducts] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    async function updatePet(productId, productData) {
      try {
        const response = await axios.put(
          `http://localhost:3000/updateProduct/${productId}`,
          productData
        );
        window.location.reload();
        return response.data; // Se desejar, pode retornar a resposta do servidor
      } catch (error) {
        console.log(error);
      }
    }

    updatePet(productId, productData);
  };

  useEffect(() => {
    if (category === "Serviço") {
      setStock(1);
    }
    console.log(productName, category, stock, price);
    // Outras ações que dependem do estado atualizado podem ser executadas aqui
  }, [category]);

  return (
    <>
      <div className="bg-gray-100 p-3 rounded-lg relative">
        <button
          className="p-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center mb-4 absolute right-3 top-3"
          onClick={closeModal}
        >
          <AiOutlineClose />
        </button>
        <h1 className="text-2xl text-left font-bold mb-2">Editar Produto</h1>
        <div className="flex flex-col gap-4 justify-between w-[400px] text-left">
          <div className="flex flex-col gap-4">
            <div className="w-full flex flex-col">
              <label htmlFor="productName">Nome:</label>
              <input
                name="productName"
                type="text"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                min="3"
                defaultValue={productName}
                onChange={(e) => {
                  setProductData({
                    ...productData,
                    productName: e.target.value,
                  });
                  console.log(productData);
                }}
              />
              {/* {productNameError && (
                <span className="text-red-400 text-sm mt-40">
                  {productNameError}
                </span>
              )} */}
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="category">Categoria:</label>
              <select
                name="category"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                defaultValue={category}
                onChange={(e) => {
                  setProductData({ ...productData, category: e.target.value });
                  console.log(productData);
                }}
              >
                <option value="Alimento">Alimento</option>
                <option value="Acessório">Acessório</option>
                <option value="Higiene">Higiene</option>
                <option value="Brinquedo">Brinquedo</option>
                <option value="Serviço">Serviço</option>
              </select>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="stock">Quantidade:</label>

              {category !== "Serviço" ? (
                <>
                  <input
                    type="number"
                    name="stock"
                    className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                    min={0}
                    defaultValue={stock}
                    onChange={(e) => {
                      setProductData({
                        ...productData,
                        stock: Number(e.target.value),
                      });
                      console.log(productData);
                    }}
                  />
                  {/* {stockError && (
                    <span className="text-red-400 text-sm mt-40">
                      {stockError}
                    </span>
                  )} */}
                </>
              ) : (
                <>
                  <input
                    type="number"
                    name="stock"
                    className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                    min={0}
                    value={1}
                    readOnly
                    onChange={(e) => {
                      setProductData({
                        ...productData,
                        stock: Number(e.target.value),
                      });
                      console.log(productData);
                    }}
                  />
                  {stockError && (
                    <span className="text-red-400 text-sm mt-40">
                      {stockError}
                    </span>
                  )}
                </>
              )}
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="price">Preço:</label>
              <input
                type="number"
                name="price"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                min={0}
                defaultValue={price}
                onChange={(e) => {
                  setProductData({
                    ...productData,
                    price: Number(e.target.value),
                  });
                  console.log(productData);
                }}
              />
              {/* {priceError && (
                <span className="text-red-400 text-sm mt-40">{priceError}</span>
              )} */}
            </div>
          </div>

          <div className="flex gap-5 justify-center">
            <button
              type=""
              className="  w-[50%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2"
              onClick={handleFormSubmit}
            >
              Editar Produto
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductEdit;
