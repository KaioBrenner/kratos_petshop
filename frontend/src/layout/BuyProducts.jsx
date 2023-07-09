import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const BuyProducts = ({ closeModal }) => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");
  const [product, setProduct] = useState({
    _id: "",
    productName: "",
    category: "",
    stock: 0,
    price: 0,
  });
  const [cart, setCart] = useState([]);

  const inputRef = useRef(null);

  const cleanInput = () => {
    inputRef.current.value = "";
  };

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

  const handleStockBuy = () => {
    const isProductOnCart = cart.some((item) => item._id === id);

    if (product.stock <= stock && product.stock > 0) {
      if (cart.length === 0) {
        addToCart(product);
      } else {
        if (isProductOnCart) {
          Promise.all(
            cart.map(async (item) => {
              if (item._id === id) {
                if (item.stock + product.stock <= stock) {
                  console.log(item.stock + product.stock);
                  const itemIndex = cart.indexOf(item);
                  const cartItem = cart[itemIndex];

                  const updatedCartItem = {
                    ...cartItem,
                    stock: item.stock + product.stock,
                    price: price * (item.stock + product.stock),
                  };

                  // Chamada assíncrona para atualizar o item no carrinho
                  await new Promise((resolve) => {
                    setCart((prevCart) => {
                      const updatedCart = [...prevCart];
                      updatedCart[itemIndex] = updatedCartItem;
                      return updatedCart;
                    });
                    resolve();
                  });

                  console.log(updatedCartItem);
                } else {
                  alert(
                    `Quantidade ultrapassa o estoque do produto. Verifique e tente novamente.`
                  );
                }
              }
            })
          );
        } else {
          const newProduct = {
            ...product,
            stock: product.stock,
          };

          addToCart(newProduct);
        }
      }
    } else {
      alert(`Quantidade Inválida. Verifique e tente novamente.`);
    }
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

    console.log(saleData);

    async function decreaseProductStock(saleData) {
      try {
        const { cart } = saleData;
        const updatedProductsInCart = cart.map((item) => {
          for (const product of products) {
            if (item._id === product._id) {
              return { ...product, stock: product.stock - item.stock };
            }
          }
        });

        console.log(updatedProductsInCart);

        let response;

        for (const item of updatedProductsInCart) {
          for (const product of products) {
            if (item._id === product._id) {
              const { _id } = item;
              console.log(item);
              response = await axios.put(
                `http://localhost:3000/updateProduct/${_id}`,
                item
              );
            }
          }
        }

        return response.data;
      } catch (error) {
        // Se desejar, pode retornar a resposta do servidor
        console.log(error);
      }
    }

    async function createSellHistoric(saleData) {
      try {
        const response = await axios.post(
          "http://localhost:3000/newSellHistoric",
          saleData
        );

        console.log(saleData);
        alert("Compra efetuada com sucesso!");
        window.location.reload()
        return response.data;
      } catch (error) {
        // Se desejar, pode retornar a resposta do servidor
        console.log(error);
      }
    }

    decreaseProductStock(saleData);
    createSellHistoric(saleData);
  };

  useEffect(() => {
    console.log(product);
  }, [product]);

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

                  const selectedProductId =
                    e.target.options[e.target.selectedIndex].getAttribute(
                      "data-id"
                    );
                  setId(selectedProductId);

                  setProduct({
                    _id: `${selectedProductId}`,
                    productName: e.target.value,
                    category: category,
                    stock: Number(selectedProductStock),
                    price: Number(selectedProductPrice),
                  });
                }}
              >
                <option value=""></option>
                {products.map(
                  ({ productName, price, stock, category, _id }, index) => {
                    if (category !== "Serviço") {
                      return (
                        <option
                          value={`${productName}`}
                          data-price={price}
                          data-stock={stock}
                          data-category={`${category}`}
                          data-id={`${_id}`}
                        >
                          {productName}
                        </option>
                      );
                    }
                  }
                )}
              </select>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-1/2">
                <label htmlFor="name">Quantidade:</label>
                <input
                  type="number"
                  className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                  min={1}
                  max={stock}
                  ref={inputRef}
                  placeholder={`Quantidade máxima: ${stock}`}
                  onChange={(e) => {
                    console.log(id);
                    setProduct({
                      ...product,
                      stock: Number(e.target.value),
                      price: price * Number(e.target.value),
                    });
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
                  handleStockBuy();
                  cleanInput();
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
