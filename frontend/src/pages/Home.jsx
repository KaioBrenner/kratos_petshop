import Header from "../components/Header";
import Modal from "../components/Modal";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import PetList from "../components/PetList";
import { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaBriefcase,
  FaBox,
  FaMoneyBillWave,
} from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Header page="home" />

      <div className="w-full h-[92vh] flex justify-center items-center">
        <div className=" bg-white w-[800px] h-[500px] text-center rounded-lg flex flex-col items-center justify-evenly p-4 drop-shadow-xl shadow-neutral-900 main">
          <div className="gap-4 w-full h-full text-left flex flex-col">
            <div className="flex h-full gap-4">
              <div className="bg-orange-500 w-1/2 h-full rounded-lg cursor-pointer slide-bck-center-home">
                <Link to="/clientes">
                  <div className="h-[80%] flex justify-start items-center text-[100px] text-neutral pl-8">
                    <FaUserCircle></FaUserCircle>
                  </div>
                  <div className="h-[20%] bg-orange-600 rounded-b-lg flex justify-center items-center">
                    Clientes
                  </div>
                </Link>
              </div>
              <div className="bg-blue-500 w-1/2 h-full rounded-lg cursor-pointer slide-bck-center-home">
                <Link to="/atendimentos">
                  <div className="h-[80%] flex justify-start items-center text-[100px] text-neutral pl-8">
                    <FaBriefcase></FaBriefcase>
                  </div>
                  <div className="h-[20%] bg-blue-600 rounded-b-lg flex justify-center items-center">
                    Atendimentos
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex h-full gap-4">
              <div className="bg-purple-500 w-1/2 h-full rounded-lg cursor-pointer slide-bck-center-home">
                <Link to="/produtos">
                  <div className="h-[80%] flex justify-start items-center text-[100px] text-neutral pl-8">
                    <FaBox></FaBox>
                  </div>
                  <div className="h-[20%] bg-purple-600 rounded-b-lg flex justify-center items-center">
                    Produtos
                  </div>
                </Link>
              </div>
              <div className="bg-green-500 w-1/2 h-full rounded-lg cursor-pointer slide-bck-center-home">
                <Link to="/vendas">
                  <div className="h-[80%] flex justify-start items-center text-[100px] text-neutral pl-8">
                    <FaMoneyBillWave></FaMoneyBillWave>
                  </div>
                  <div className="h-[20%] bg-green-600 rounded-b-lg flex justify-center items-center">
                    Vendas
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
