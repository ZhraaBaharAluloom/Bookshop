import React from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import BookList from "./BookList";

//buttons
import DeleteButton from "../Components/Buttons/DeleteButton";
import UpdateButton from "./Buttons/UpdateButton";
import AddButton from "./Buttons/AddButton";

//style
import { VendorDetailWrapper, Title } from "../styles";

//stores
import vendorStore from "../stores/vendorStore";
import bookStore from "../stores/bookStore";
import authStore from "../stores/authStore";

const VendorDetail = () => {
  const { vendorSlug } = useParams();
  const vendor = vendorStore.vendors.find(
    (vendor) => vendor.slug === vendorSlug
  );

  const books =
    vendor && vendor.books
      ? vendor.books
          .map((book) => bookStore.getBookById(book.id))
          .filter((book) => book)
      : [];

  if (!authStore.user || !vendor) return <Redirect to="/" />;
  return (
    <>
      <VendorDetailWrapper>
        <Title>{vendor.name}</Title>
        <img src={vendor.image} alt={vendor.name} />
        <UpdateButton vendor={vendor} />
        <DeleteButton vendorId={vendor.id} />
      </VendorDetailWrapper>
      <div className="container">
        <AddButton vendor={vendor} />
        <BookList books={books} />
      </div>
    </>
  );
};

export default observer(VendorDetail);
