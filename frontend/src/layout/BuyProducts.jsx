import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

const BuyProducts = ({ closeModal }) => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("")
  const [product, setProduct] = useState({
    productName: "",
    category: "",
    stock: 0,
    price: 0,
  });
  const [cart, setCart] = useState([]);

  const [fullName, setFullName] = useState("");
  const [cpf, setCpf] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
  };

  function formatarData(data) {
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    const horas = String(data.getHours()).padStart(2, "0");
    const minutos = String(data.getMinutes()).padStart(2, "0");

    return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
  }

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

    console.log(product);

    fetchProducts();
  }, []);

  useEffect(() => {}, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("rodou");

    const countTotalPrice = () => {
      let count = 0;
      for (let i = 0; i < cart.length; i++) {
        console.log(cart[i].price);
        count += cart[i].price;
      }
      return count;
    };

    const saleData = {
      cart,
      fullName,
      cpf,
      paymentMethod,
      totalPrice: countTotalPrice(),
      dateTime: formatarData(new Date()),
    };

    async function createSellHistoric(saleData) {
      try {
        const response = await axios.post(
          "http://localhost:3000/newSellHistoric",
          saleData
        );

        console.log(saleData);
        alert("Compra efetuada com sucesso!");
        return response.data;
      } catch (error) {
        // Se desejar, pode retornar a resposta do servidor
        console.log(error);
      }
    }

    createSellHistoric(saleData);
  };

  return (
    <>
      <div className="bg-gray-100 p-3 rounded-lg relative">
        <button
          className="p-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center mb-4 absolute right-3 top-3"
          onClick={closeModal}
        >
          <AiOutlineClose />
        </button>
        <h1 className="text-2xl font-bold mb-2">Comprar Produtos</h1>
        <form className="flex flex-col gap-4 justify-between w-[670px]">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label htmlFor="name">Produto:</label>
              <select
                name="porte"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                onChange={(e) => {
                  const selectedProductPrice =
                    e.target.options[e.target.selectedIndex].getAttribute(
                      "data-price"
                    );
                  setPrice(selectedProductPrice);

                  const selectedProductStock =
                    e.target.options[e.target.selectedIndex].getAttribute(
                      "data-stock"
                    );
                  setStock(selectedProductStock);

                  const selectedProductCategory =
                    e.target.options[e.target.selectedIndex].getAttribute(
                      "data-category"
                    );
                  setCategory(selectedProductCategory);

                  setProduct({
                    productName: e.target.value,
                    category: category,
                    stock: Number(selectedProductStock),
                    price: Number(selectedProductPrice),
                  });
                  console.log(product);
                }}
              >
                <option value=""></option>
                {products.map(
                  ({ productName, price, stock, category, _id }, index) => (
                    <option
                      value={`${productName}`}
                      data-price={price}
                      data-stock={stock}
                      data-category={`${category}`}
                    >
                      {productName}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-1/2">
                <label htmlFor="name">Quantidade:</label>
                <input
                  type="number"
                  className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                  min={0}
                  onChange={(e) => {
                    setProduct({
                      ...product,
                      stock: Number(e.target.value),
                      price: price * Number(e.target.value),
                    });
                    console.log(product);
                  }}
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="name">Preço:</label>
                <input
                  type="number"
                  className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                  readOnly
                  value={price}
                />
              </div>
            </div>
            <div className="w-full">
              <button
                className="w-[100%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(product);
                  addToCart(product);
                  console.log(cart);
                }}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
          <div className="max-h-44 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Produto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantidade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Preço Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Excluir
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cart.map(({ productName, stock, price }, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {productName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{stock}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        R${price.toFixed(2)}
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap hover:text-red-500 hover:underline cursor-pointer"
                        onClick={() => removeFromCart(index)}
                      >
                        Excluir
                      </td>
                    </tr>
                  );
                })}
                {/* <tr>
                  <td className="px-6 py-4 whitespace-nowrap">{ productName }</td>
                  <td className="px-6 py-4 whitespace-nowrap">{  }</td>
                  <td className="px-6 py-4 whitespace-nowrap">150.22</td>
                  <td className="px-6 py-4 whitespace-nowrap hover:text-red-500 hover:underline cursor-pointer">
                    Excluir
                  </td>
                </tr> */}
                {/* <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Shampoo Hipoalergênico
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">2</td>
                  <td className="px-6 py-4 whitespace-nowrap">30.99</td>
                  <td className="px-6 py-4 whitespace-nowrap hover:text-red-500 hover:underline cursor-pointer">
                    Excluir
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>

          <div className="w-full">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="name">Nome do Cliente:</label>
                <input
                  type="text"
                  className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                  placeholder="Ex: José Santos"
                  name="fullName"
                  defaultValue={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  min="3"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="name">CPF:</label>
                <input
                  type="number"
                  className="border border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                  placeholder="Ex: 12345678900"
                  name="cpf"
                  defaultValue={cpf}
                  onChange={(e) => {
                    setCpf(e.target.value);
                    console.log(cpf);
                    console.log(fullName);
                    console.log(paymentMethod);
                  }}
                  min="11"
                  max="11"
                />
              </div>
            </div>
            <div>
              <label htmlFor="name">Forma de Pagamento:</label>
              <select
                name="porte"
                className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                }}
              >
                <option value=""></option>
                <option value="Dinheiro">Dinheiro</option>
                <option value="Pix">Pix</option>
                <option value="Crédito">Crédito</option>
                <option value="Débito">Débito</option>
              </select>
            </div>
          </div>

          <div className="flex gap-5">
            <button
              type=""
              className="  w-[100%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2"
              onClick={handleFormSubmit}
            >
              Efetuar Compra
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BuyProducts;
