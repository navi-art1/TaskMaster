import React from "react";
import ReactDOM from "react-dom";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function Modal({ children }) {
  const { openModal } = useContext(TodoContext);

  React.useEffect(() => {
    console.log("Modal state:", openModal);
  }, [openModal]);

  return ReactDOM.createPortal(
    <>
      <div
        className={`Modal__Overlay ${openModal ? 'Modal__Overlay--open' : ''}`}
      />
      <div 
        className={`Modal__Content ${openModal ? 'Modal__Content--open' : ''}`}
      >
        {children}
      </div>
    </>,
    document.getElementById('modal')
  );
}

export { Modal };
