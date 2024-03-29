import React, { useEffect, useState } from "react";
import axios from "axios";

const ProgressBar = ({ date }) => {
  const [progressPer, setProgressPer] = useState();
  const [progress, setProgress] = useState();
  const [valueAbove, setValueAbove] = useState();
  const [sales, setSales] = useState([]);
  const [dayBilling, setDayBilling] = useState(0);
  const [meta, setMeta] = useState(2000)

  useEffect(() => {
    async function fetchSales() {
      try {
        const response = await axios.get("http://localhost:3000/sellHistorics");
        const dataSales = response.data;
        setSales(dataSales);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSales();
  }, []);

  useEffect(() => {
    async function setBillings() {
      let newDayBilling = 0; // Inicializa uma variável auxiliar

      for (const sale of sales) {
        if (sale.dateTime.substring(0, 5) === date) {
          newDayBilling += sale.totalPrice;
        }
      }

      setDayBilling(newDayBilling);
    }

    setBillings();
  }, [sales]);

  useEffect(() => {
    const updatedProgressPer = (dayBilling / meta) * 100;
    setProgressPer(updatedProgressPer);
  
    console.log("Valor atual de progressPer:", updatedProgressPer);
  
    if (updatedProgressPer > 100) {
        setProgressPer(100)
        setValueAbove(updatedProgressPer - 100)
      console.log("acima");
    }
  }, [dayBilling, progressPer]);

  //   useEffect(() => {
  //     setProgressPer(progress);

  //     if (progress > 100) {
  //       const difference = progress - 100;

  //       setProgressPer(100);
  //       setValueAbove(difference);
  //     }
  //   }, []);

  return (
    <div className="bg-gray-200 flex flex-col items-start h-[14.28%] p-2">
      <div className="flex gap-2 text-sm">
        <p>{date}</p>
        <p>R$ {dayBilling.toFixed(2)} / R$ {meta}</p>
      </div>
      <div className="h-6 w-full bg-white rounded-lg relative" title={progress}>
        <div
          className={`h-full rounded bg-green-500`}
          style={{ width: `${progressPer}%` }}
        ></div>

        {valueAbove && (
          <div
            className={`h-full rounded bg-blue-500 absolute top-0`}
            style={{ width: `${valueAbove}%` }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
