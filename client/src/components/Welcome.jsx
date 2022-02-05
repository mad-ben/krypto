import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiE, SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { Loader } from "./";
import { shortenAddress } from "../utils/shortenAddress";
const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[2px] border-emerald-400 text-sm font-light text-emerald-400";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-small p-2 outline-none b-transparent text-white border-none text-small white-glassmorphism"
  ></input>
);

const Welcome = () => {
  {
    /* Transfer values from transaction context */
  }
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, message } = formData;

    {
      /** when you reaload the page info defaults. this prevents it */
    }
    e.preventDefault();

    {
      /** If form is not filled, do nothing */
    }
    if (!addressTo || !amount || !message) return;

    {
      /** send transaction */
    }
    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-5x1 sm:text-5xl text-white py-1">
            Next iteration of internet
          </h1>
          <h3 className="text-emerald-400">
            Platform to get latest news about <br />
            blockchain technology and cryptocurrency
          </h3>
          {/*<p className="text-emerald-200 md:9/12 w-11/12 text-base">
            Unleash web 3.0
  </p>*/}
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#3cffe2] p-3 rounded-none cursor-pointer hover:bg-[#45e0b4] text-black hover:text-white"
            >
              Connect Wallet
            </button>
          )}

          <div className="grid sm:grid-cols-3  grid-cols-2 w-full mt-10">
            <div className={commonStyles}>Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={commonStyles}>Ethereum</div>
            <div className={commonStyles}>Web 3.0</div>
            <div className={commonStyles}>Low Fees</div>
            <div className={commonStyles}>Blockchain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 crypto-card white-glassmorphism drop-shadow-[0_45px_45px_rgba(0,0,0,1)]">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-light text-lg mt-1">Ethereum</p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center green-glassmorphism ">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />
            <div className="h-[2px] w-full bg-emerald-300 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-emerald-300 w-full mt-2 border-[1px] p-2 border-[#3dfee2] rounded-none cursor-pointer hover:text-white"
              >
                Process
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
