import { useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const SaleRow = ({ name, cpf, active }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const CurrentDateTime = () => {
    const currentDate = new Date();
    const formattedDateTime = format(currentDate, "dd/MM/yy HH:mm");

    console.log(formattedDateTime);

    return <p>{formattedDateTime}</p>;
  };

  return (
    <>
      <tr
        className={`w-full text-center bg-white border-b-[1.24px] border-gray-200 hover:bg-gray-100`}
        onClick={toggleAccordion}
      >
        <td
          className="border-[1.24px] border-gray-200 p-4"
          onClick={CurrentDateTime}
        >
          {name}
        </td>
        <td className="border-[1.24px] border-gray-200 p-4">{cpf}</td>
        <td className="border-[1.24px] border-gray-200 p-4">150.89</td>
        <td className="border-[1.24px] border-gray-200 p-4">Cacau</td>
        <td className="border-[1.24px] border-gray-200 p-4">
          {CurrentDateTime()}
        </td>
      </tr>
      {isOpen && (
        <tr className="bg-gray-100 transition">
          <td colSpan="12" className="p-4">
            {/* Conteúdo adicional do accordion */}
            <h3 className="text-3xl">Itens comprados</h3>
            <ul className="list-disc pl-4">
              <li>Ração Premium | 12x | R$150.89</li>
              <li>Coleira Ajustável | 3x | R$150.89</li>
              <li>Shampoo Hipoalergênico | 2x | R$150.89</li>
              <li>Brinquedo de Pelúcia | R$150.89</li>
            </ul>
          </td>
        </tr>
      )}
    </>
  );
};

export default SaleRow;
