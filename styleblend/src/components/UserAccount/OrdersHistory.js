import React from "react";

const OrdersHistory = () => {
  const orders = [
    {
      ID: "#3456_768",
      Dates: "17/10/2023",
      Status: "Delivered",
      Price: "1234",
    },
    {
      ID: "#3456_768",
      Dates: "17/10/2023",
      Status: "Delivered",
      Price: "1234",
    },
  ];
  return (
    <div className="w-full md:px-4 flex-col justify-start items-start gap-10 inline-flex">
      <div className="w-full flex-col justify-start items-start gap-6 flex">
        <h3 className="text-black text-xl font-semibold font-['Inter'] leading-loose">
          Orders History
        </h3>
      </div>
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr className="w-full text-center border text-neutral-900 text-sm font-normal font-['Inter'] leading-snug">
            <th className="border border-slate-500">Order ID</th>
            <th className="border border-slate-500">Dates</th>
            <th className="border border-slate-500">Status</th>
            <th className="border min-w-[60px] border-slate-500">Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr className="w-full border text-center text-neutral-900 text-sm font-normal font-['Inter'] leading-snug">
                <td className="border">{order.ID}</td>
                <td className="border">{order.Dates}</td>
                <td className="border">{order.Status}</td>
                <td className="border">₹. {order.Price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersHistory;
