import React from "react";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

import { Redirect } from "react-router";

//styles
import { HomeTitle, HomeDescription } from "../styles";

const HomePage = () => {
  return (
    <>
      <HomeTitle>BOOKS & BOOKS</HomeTitle>
      <HomeDescription>Welcome To The Old Books World</HomeDescription>
    </>
  );
};

export default observer(HomePage);
