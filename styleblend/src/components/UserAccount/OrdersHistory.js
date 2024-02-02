import React, { useContext } from "react";
import ProductContext from "../../context/ProductContext";

const OrdersHistory = () => {
  const context = useContext(ProductContext);
  const { orders } = context;
  return (
    <div className="w-full md:px-4 flex-col justify-start items-start gap-10 inline-flex ">
      <div className="w-full flex-col justify-start items-start gap-6 flex">
        <h3 className="text-black text-xl font-semibold font-['Inter'] leading-loose">
          Orders History
        </h3>
      </div>
      <div className="w-full pb-10 overflow-x-scroll md:overflow-visible">
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr className="w-full text-center border text-neutral-900 text-sm font-normal font-['Inter'] leading-snug">
              <th className="border border-slate-500 ">Order ID</th>
              <th className="border border-slate-500">Dates</th>
              <th className="border border-slate-500">Status</th>
              <th className="border min-w-[60px] border-slate-500">Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              return (
                <tr
                  key={index}
                  className="w-full border text-center text-neutral-900 text-sm font-normal font-['Inter'] leading-snug"
                >
                  <td className="border px-2 text-left">{order.orderId}</td>
                  <td className="border px-2">
                    {new Date(order.date).toLocaleDateString("en-US")}
                  </td>
                  <td className="border px-2">{order.status}</td>
                  <td className="border">{order.subTotal} ₹</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersHistory;
