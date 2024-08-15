import React, { useContext } from "react";
import BreadCrumbs from "../components/UI/BreadCrumbs";
import { observer } from "mobx-react-lite";
import { Context } from "../main";

const Payment = observer(() => {
  const { basket } = useContext(Context);
  return (
    <main className="max-w-[1440px] mx-auto">
      <BreadCrumbs title={"Оплата"} />
     
    </main>
  );
});

export default Payment;
