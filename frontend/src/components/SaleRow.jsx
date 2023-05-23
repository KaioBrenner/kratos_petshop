import { useState } from "react";
import { Link } from "react-router-dom";
import { format } from 'date-fns';

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
        <td className="border-[1.24px] border-gray-200 p-4" onClick={CurrentDateTime}>{name}</td>
        <td className="border-[1.24px] border-gray-200 p-4">{cpf}</td>
        <td className="border-[1.24px] border-gray-200 p-4">{CurrentDateTime()}</td>
      </tr>
      {isOpen && (
        <tr className="bg-gray-100">
          <td colSpan="3" className="p-4">
            {/* Conteúdo adicional do accordion */}
            asdasdasdasdasd
          </td>
        </tr>
      )}
    </>
  );
};

export default SaleRow;
