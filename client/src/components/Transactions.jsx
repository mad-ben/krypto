import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  amount,
}) => {
  return (
    <div
      className="white-glassmorphism m-4 flex flex-1 
    2xl:min-w-[450px]
    2xl:max-w-[500px]
    sm:min-w-[270px]
    sm:max-w-[300px]

    flex-col p-3 rounded-md hover:shadow-2xl
    "
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="w-full mb-6 p-2">
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-emerald-300 text-base">
              From: {shortenAddress(addressFrom)}
            </p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-emerald-300 text-base">
              To: {shortenAddress(addressTo)}
            </p>
          </a>
          <p className="text-emerald-300 text-base">Amount: {amount} ETH</p>

          {message && (
            <>
              <br />
              <p className="text-emerald-300 text-base"> Message: {message}</p>
            </>
          )}
          <p className="text-emerald-300 text-base">Time: {timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-services2">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-emerald-300 text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-emerald-300 text-3xl text-center my-2">
            Connect your wallet to see lastest movements
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-1 my-2">
          {transactions.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
