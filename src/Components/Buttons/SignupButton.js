import React, {useState} from 'react';
import SignupModal from "../modals/SignupModal";



// Styles
import {SignupStyle} from "../../styles";

const SignupButton = () => {

    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (<>
   <SignupStyle onClick={openModal}> Sign Up
    </SignupStyle>
    <SignupModal  isOpen={isOpen} closeModal={closeModal}/>
    </>);
};

export default SignupButton;