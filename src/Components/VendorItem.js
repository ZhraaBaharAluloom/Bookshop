import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//style
import { VendorWrapper } from "../styles";



const VendorItem = ({ vendor }) => {
  return (
    <>
      <VendorWrapper>
        <Link to={`/vendors/${vendor.slug}`}>
          <img alt={vendor.name} src={vendor.image} />
        </Link>
        <p>{vendor.name}</p>
      </VendorWrapper>
    </>
  );
};

export default observer(VendorItem);
