import Modal from "./Modal";

const ProductRow = ({ name, category, stock, price }) => {
  return (
    <tr
      className={`w-full text-center bg-white border-b-[1.24px] border-gray-200 hover:bg-gray-100`}
    >
      <td className="border-[1.24px] border-gray-200 p-4">
        <Modal type="addProduct" name={name}></Modal>
      </td>
      <td className="border-[1.24px] border-gray-200 p-4">{category}</td>
      <td>{stock}</td>
      <td>R${price.toFixed(2)}</td>
      <td className="cursor-pointer text-red-500">Excluir</td>
    </tr>
  );
};

export default ProductRow;
