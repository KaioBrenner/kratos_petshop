import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductRegistration = ({ closeModal }) => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("Alimento");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  const [productNameError, setProductNameError] = useState("");
  const [stockError, setStockError] = useState("");
  const [priceError, setPriceError] = useState("");

  const [products, setProducts] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (productName.length <= 3) {
      setProductNameError("O campo de nome é obrigatório");
    } else {
      setProductNameError("");
    }

    if (stock.length === 0) {
      setStockError("O campo de quantidade é obrigatório");
    } else {
      setStockError("");
    }

    if (price.length === 0) {
      setPriceError("O campo de preço é obrigatório");
    } else {
      setPriceError("");
    }

    const productData = {
      productName,
      category,
      stock,
      price,
    };

    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        const dataProducts = response.data;
        setProducts(dataProducts);
      } catch (error) {
        console.log(error);
      }
    }

    console.log(productData);

    async function createProduct(productData) {
      try {
        fetchProducts();

        products.map((product) => {
          console.log(product.productName);
          console.log(productData.productName);
        });

        const isProductRegistered = products.some(
          (product) => product.productName === productData.productName
        );

        console.log(isProductRegistered);

        if (isProductRegistered) {
          alert("Erro ao cadastrar o produto!");
        } else {
          const response = await axios.post(
            "http://localhost:3000/newProduct",
            productData
          );

          window.location.reload();
          if (
            !(
              productName.length <= 3 ||
              stock.length === 0 ||
              price.length === 0
            )
          ) {
            alert("Produto cadastrado com sucesso!");
          }
          return response.data;
        }

        // const response = await axios.post(
        //   `http://localhost:3000/newProduct`,
        //   productData
        // );
        // console.log(productData);
        // return response.data;
      } catch (error) {
        console.log(error);
      }
    }

    createProduct(productData);
  };

  useEffect(() => {
    if (category === "Serviço") {
      setStock(1)
    }
    console.log(productName, category, stock, price)
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
        <h1 className="text-2xl font-bold mb-2">Cadastro de Produto</h1>
        <div className="flex flex-col gap-4 justify-between w-[400px] text-left">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label htmlFor="productName">Nome:</label>
              <input
                name="productName"
                type="text"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                min="3"
                defaultValue={productName}
                onChange={(e) => {
                  setProductName(e.target.value);
                  console.log(productName, category, stock, price);
                }}
              />
              {productNameError && (
                <span className="text-red-400 text-sm mt-40">
                  {productNameError}
                </span>
              )}
            </div>
            <div className="w-full">
              <label htmlFor="category">Categoria:</label>
              <select
                name="category"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                defaultValue={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Alimento">Alimento</option>
                <option value="Acessório">Acessório</option>
                <option value="Higiene">Higiene</option>
                <option value="Brinquedo">Brinquedo</option>
                <option value="Serviço">Serviço</option>
              </select>
            </div>
            <div className="w-full">
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
                      setStock(Number(e.target.value));
                    }}
                  />
                  {stockError && (
                    <span className="text-red-400 text-sm mt-40">
                      {stockError}
                    </span>
                  )}
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
                      setStock(Number(e.target.value));
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
            <div className="w-full">
              <label htmlFor="price">Preço:</label>
              <input
                type="number"
                name="price"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                min={0}
                defaultValue={price}
                onChange={(e) => {
                  setPrice(Number(e.target.value));
                }}
              />
              {priceError && (
                <span className="text-red-400 text-sm mt-40">{priceError}</span>
              )}
            </div>
          </div>

          <div className="flex gap-5 justify-center">
            <button
              type=""
              className="  w-[50%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2"
              onClick={handleFormSubmit}
            >
              Cadastrar Produto
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductRegistration;
