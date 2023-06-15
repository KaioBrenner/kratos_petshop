import { useEffect } from "react";
import Modal from "./Modal";
import axios from "axios";
import {MdDeleteForever} from "react-icons/md"

const ProductRow = ({ productName, category, stock, price, id }) => {

  const handleDelete = () => {
    async function deleteProduct(productId) {
      try {
        console.log(productId)
        const response = await axios.delete(
          `http://localhost:3000/deleteProduct/${productId}`
        );
        return response;
      } catch (error) {
        console.log(error);
      }
    }

    deleteProduct(id);
    window.location.reload()
  }

  

  return (
    <tr className="border-y border-y-gray-200">
      <td className="px-6 py-4 text-center whitespace-nowrap border-r border-r-gray-200">
        <Modal type="editProduct" productName={productName} category={category} stock={stock} price={price} productId={id}></Modal>
      </td>
      <td className="px-6 py-4 text-center whitespace-nowrap border-r border-r-gray-200">
        {category}
      </td>
      <td className="px-6 py-4 text-center whitespace-nowrap border-r border-r-gray-200">
        {stock}
      </td>
      <td className="px-6 py-4 text-center whitespace-nowrap border-r border-r-gray-200">
        R${price.toFixed(2)}
      </td>
      <td
        className="px-6 py-4 whitespace-nowrap hover:text-red-500 hover:underline cursor-pointer flex justify-center items-center text-2xl"
        onClick={handleDelete}
      >
        <MdDeleteForever></MdDeleteForever>
      </td>
    </tr>
  );
};

export default ProductRow;
