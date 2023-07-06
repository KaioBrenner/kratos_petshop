import Header from "../components/Header";
import Modal from "../components/Modal";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import PetList from "../components/PetList";
import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import service from "../assets/images/pet.png";
import product from "../assets/images/racao.png";
import user from "../assets/images/user-pet.png"
import sales from "../assets/images/sales.png"
import {
  FaUser,
  FaBriefcase,
  FaBox,
  FaMoneyBillWave,
  FaBone,
} from "react-icons/fa";
import {BiUserCircle} from "react-icons/bi"

const Home = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const getDates = () => {
      const today = new Date();
      const previousDates = [];

      // Itera pelos últimos 7 dias
      for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);

        let day = date.getDate();

        if (date.getDate() + 1 < 10) {
          day = `0${date.getDate()}`;
        }

        let month = date.getMonth() + 1;

        if (date.getMonth() + 1 < 10) {
          month = `0${date.getMonth() + 1}`;
        }

        previousDates.push({ day, month });
      }

      setDates(previousDates);
    };

    getDates();
  }, []);

  return (
    <div>
      <Header page="home" />

      <div className="w-full h-[92vh] flex justify-center items-center drop-shadow-xl shadow-neutral-900">
        <div className=" bg-white w-[800px] h-[500px] text-center rounded-l-lg flex flex-col items-center justify-evenly p-4 main">
          <div className="gap-4 w-full h-full text-left flex flex-col">
            <div className="flex h-full gap-4">
              <div className="bg-brand-orange w-1/2 h-full rounded-lg cursor-pointer slide-bck-center-home">
                <Link to="/clientes">
                  <div className="h-[80%] flex justify-start items-center text-[100px] text-neutral pl-8">
                    <img src={user} alt="" width={96} />
                  </div>
                  <div className="h-[20%] bg-brand-orange-paw text-xl font-semibold rounded-b-lg flex justify-center items-center">
                    Clientes
                  </div>
                </Link>
              </div>
              <div className="bg-brand-orange w-1/2 h-full rounded-lg cursor-pointer slide-bck-center-home">
                <Link to="/atendimentos">
                  <div className="h-[80%] flex justify-start items-center  text-neutral pl-8">
                    <img src={service} alt="" width={96} />
                  </div>
                  <div className="h-[20%] bg-brand-orange-paw text-xl font-semibold rounded-b-lg flex justify-center items-center">
                    Atendimentos
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex h-full gap-4">
              <div className="bg-brand-orange w-1/2 h-full rounded-lg cursor-pointer slide-bck-center-home">
                <Link to="/produtos">
                  <div className="h-[80%] flex justify-start items-center text-[100px] text-neutral pl-8">
                    <img src={product} alt="" width={96} />
                  </div>
                  <div className="h-[20%] bg-brand-orange-paw text-xl font-semibold rounded-b-lg flex justify-center items-center">
                    Produtos
                  </div>
                </Link>
              </div>
              <div className="bg-brand-orange w-1/2 h-full rounded-lg cursor-pointer slide-bck-center-home">
                <Link to="/vendas">
                  <div className="h-[80%] flex justify-start items-center text-[100px] text-neutral pl-8">
                    <img src={sales} alt="" width={96} />
                  </div>
                  <div className="h-[20%] bg-brand-orange-paw text-xl font-semibold rounded-b-lg flex justify-center items-center">
                    Vendas
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white w-[400px] h-[500px] rounded-r-lg flex flex-col p-4 main">
          <h1 className="text-2xl font-bold mb-2">Dashboard Financeiro</h1>

          <div className="border border-gray-300 h-full">
            {dates.map((date, index) => (
              <ProgressBar
                key={index}
                date={`${date.day}/${date.month}`}
                progress={120}
              ></ProgressBar>
            ))}
            {/* <ProgressBar progress={160}></ProgressBar>
            <ProgressBar progress={10}></ProgressBar>
            <ProgressBar progress={120}></ProgressBar>
            <ProgressBar progress={90}></ProgressBar>
            <ProgressBar progress={190}></ProgressBar>
            <ProgressBar progress={200}></ProgressBar>
            <ProgressBar progress={50}></ProgressBar> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
