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


const VendorDetail = () => {
  const { vendorSlug } = useParams();

  const vendor = vendorStore.vendors.find(
    (vendor) => vendor.slug === vendorSlug
  );
  if (!vendor) return <Redirect to="/vendors" />;

  let books = [];
if (vendor.books) { books = vendor.books
.map(book => bookStore.getBookById(book.id))
.filter(book => book)}


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
