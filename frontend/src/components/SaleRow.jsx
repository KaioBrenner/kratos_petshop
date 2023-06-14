import { useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import InvoicePDF from "./InvoicePDF";

const SaleRow = ({
  _id,
  clientCPF,
  clientName,
  totalPrice,
  dateTime,
  paymentMethod,
  cart,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const globalStyles = StyleSheet.create({
    '@page': {
      backgroundColor: 'rgba(255, 255, 0, 0.3)',
    },
  });

  return (
    <>
      <tr
        className={`w-full text-center bg-white border-b-[1.24px] border-gray-200 hover:bg-gray-100`}
        onClick={toggleAccordion}
      >
        <td className="border-[1.24px] border-gray-200 p-4">{clientName}</td>
        <td className="border-[1.24px] border-gray-200 p-4">{clientCPF}</td>
        <td className="border-[1.24px] border-gray-200 p-4">
          R${totalPrice.toFixed(2)}
        </td>
        <td className="border-[1.24px] border-gray-200 p-4">{paymentMethod}</td>
        <td className="border-[1.24px] border-gray-200 p-4">{dateTime}</td>
      </tr>
      {isOpen && (
        <>
          <tr className="bg-gray-100 transition">
            <td colSpan="12" className="p-4">
              {/* Conteúdo adicional do accordion */}
              <h3 className="text-3xl">Nota Fiscal</h3>
              <ul className="list-disc pl-4">
                <div>

                  <PDFViewer width={500} height={300}>
                    <InvoicePDF
                      customerName={clientName}
                      items={cart}
                      total={totalPrice}
                      paymentMethod={paymentMethod}
                    />
                  </PDFViewer>
                </div>
                {/* {cart.map(({ productName, stock, price }) => (
                  <>
                    <li>
                      {productName} | {stock}x | R${price.toFixed(2)}
                    </li>
                  </>
                ))} */}
                {/* <li>Ração Premium | 12x | R$150.89</li>
              <li>Coleira Ajustável | 3x | R$150.89</li>
              <li>Shampoo Hipoalergênico | 2x | R$150.89</li>
              <li>Brinquedo de Pelúcia | R$150.89</li> */}
              </ul>
            </td>
          </tr>
        </>
      )}
    </>
  );
};

export default SaleRow;
