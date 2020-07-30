import React from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";

//buttons
import DeleteButton from "../Components/Buttons/DeleteButton";
import UpdateButton from "./Buttons/UpdateButton";
import AddButton from "./Buttons/AddButton";

//style
import { VendorDetailWrapper, Title } from "../styles";

//stores
import vendorStore from "../stores/vendorStore";
import BookList from "./BookList";

const VendorDetail = () => {
  const { vendorSlug } = useParams();

  const vendor = vendorStore.vendors.find(
    (vendor) => vendor.slug === vendorSlug
  );
  if (!vendor) return <Redirect to="/vendors" />;

  return (
    <>
      <VendorDetailWrapper>
        <Title>{vendor.name}</Title>
        <img src={vendor.image} alt={vendor.name} />
        <UpdateButton vendor={vendor} />
        <DeleteButton vendorId={vendor.id} />
      </VendorDetailWrapper>
      <div className="container">
        <AddButton vendorId={vendor.id} />
        <BookList books={vendor.books} />
      </div>
    </>
  );
};

export default observer(VendorDetail);
