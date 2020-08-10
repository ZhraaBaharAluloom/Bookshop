import React,{useState} from 'react';
import Modal from "react-modal";
import authStore from '../../stores/authStore';


// Styles
const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };


const SigninModal = ({isOpen, closeModal}) => {
    const [user, setUser] = useState({
        username: "",
        password:"",
        
    })

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        authStore.signin(user)
        closeModal();
      };


    return (
      
      <Modal isOpen={isOpen} onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}

      >
        <h1>Sign In</h1>
        <div>
        <form onSubmit={handleSubmit}>
    <div className="form-group">
        <label>Username</label>
        <input
        name="username"
        value={user.username}
        type="text"
        className="form-control"
        onChange={handleChange}
        />
    </div>
    <div className="form-group">
        <label>Password</label>
        <input
        name="password"
        value={user.password}
        type="password"
        className="form-control"
        onChange={handleChange}
        />
    </div>
    <button type="submit" className="btn btn-primary">Sign In </button>
</form>
        </div>
      </Modal>
    );
};

export default SigninModal;