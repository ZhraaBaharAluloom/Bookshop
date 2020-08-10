import React, {useState} from 'react';
import SigninModal from "../modals/SigninModal";



// Styles
import {SignupStyle} from "../../styles";

const SigninButton = () => {

    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (<>
   <SignupStyle onClick={openModal}> Sign in
    </SignupStyle>
    <SigninModal  isOpen={isOpen} closeModal={closeModal}/>
    </>);
};

export default SigninButton;