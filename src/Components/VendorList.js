import React, { useState } from "react";
import { observer } from "mobx-react";

//style
import { ListWrapper, Title } from "../styles";

//book item
import VendorItem from "./VendorItem";

//search bar
import SearchBar from "./SearchBar";

//buttons
import AddButton from "./Buttons/AddButton";

//stores
import vendorStore from "../stores/vendorStore";

const VendorList = () => {
  const [query, setQuery] = useState("");

  const vendorList = vendorStore.vendors
    .filter((vendor) => vendor.name.toLowerCase().includes(query.toLowerCase()))
    .map((vendor) => <VendorItem vendor={vendor} key={vendor.id} />);

  return (
    <div className="container">
      <Title>SHOPS</Title>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>
        {vendorList} <AddButton />
      </ListWrapper>
    </div>
  );
};
export default observer(VendorList);
