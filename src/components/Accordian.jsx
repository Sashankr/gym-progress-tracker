import { useState } from "react";

const Accordian = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="accordian my-3">
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="accordian-header flex justify-between items-center bg-slate-100 p-3 rounded-lg cursor-pointer transition hover:bg-slate-200"
      >
        <h2>{title}</h2>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div
        className={`accordian-body  transition duration-500 relative shadow-lg rounded-lg p-3 ${
          isOpen ? `block` : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordian;
