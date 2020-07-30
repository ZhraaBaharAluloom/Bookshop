import React from "react";
import { Switch, Route } from "react-router";
import { observer } from "mobx-react";

//Components
import BookList from "../BookList";
import BookDetail from "../BookDetail";
import VendorList from "../VendorList";
import VendorDetail from "../VendorDetail";

import HomePage from "../Home";

//Stores
import bookStore from "../../stores/bookStore";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/vendors/:vendorSlug">
          <VendorDetail />
        </Route>
        <Route path="/vendors">
          <VendorList />
        </Route>
        <Route path="/books/:bookSlug">
          <BookDetail />
        </Route>
        <Route path="/books">
          <BookList books={bookStore.books} />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};

export default observer(Routes);
