import React from "react";
import Header from "./Header";
import Output from "./Output";
import AddressForm from "../address/AddressForm";

type Props = {};

const Checkout = (props: Props) => {
  return (
    <div className="">
      <Header
        text="15 Ratti Amethyst Has Been Added To Your Cart"
        btn="Continue Shopping"
      />

      <Output
        firstName="Rashi"
        gender="Female"
        dob="August 30, 1995 "
        tob="10:03pm"
        birthLocation="Panipat"
        city="Panipat"
        state="Haryana"
        country="India"
        landmark="Kuch kuch"
      />
      <AddressForm />
    </div>
  );
};

export default Checkout;
