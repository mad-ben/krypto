import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiE, SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { Loader } from "./";
import { shortenAddress } from "../utils/shortenAddress";

const SendEth = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center p-4">
      <h1 className="text-white">Page under construction...</h1>
    </div>
  );
};

export default SendEth;
