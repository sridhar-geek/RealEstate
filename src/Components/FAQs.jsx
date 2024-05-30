import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import PropTypes from "prop-types";

// Imports from another files
import data from "../faq";

const FAQItem = ({ faq, isOpen, toggleFAQ }) => {
  return (
    <div className="my-2 mx-5 ">
      <button
        className={`flex justify-between items-center w-full p-4 ${
          isOpen ? "bg-primary rounded-lg" : ""
        }`}
        onClick={() => toggleFAQ(faq.id)}
      >
        <div className="flex text-center gap-1 justify-center">
          <span className="font-bold text-xl">{faq.id} .</span>
          <span className=" font-Poppins text-xl font-bold ">
            {faq.question}
          </span>
        </div>
        <span>
          {isOpen ? (
            <FaAngleUp className="text-xl" />
          ) : (
            <FaAngleDown className="text-xl" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className=" px-4 font-Poppins pb-4 transform duration-300  ">
          <div className="font-semibold my-1">{faq.answer}</div>
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  // It stores Id of the question
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ((prevOpenFAQ) => (prevOpenFAQ === id ? null : id));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 my-10">
      {/* heading */}
      <h3 className="heading">Frequently Asked Questions</h3>
      {/* sub heading */}
      <p className="subHeading">
        Pinpoint your audience with precision, ensuring your marketing efforts
        reach those most likely to engage with your brand.
      </p>
      <div className="bg-white rounded-3xl shadow-md shadow-gray-300 py-4  w-[80%] max-w-[800px]">
        {data.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openFAQ === faq.id}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
    </div>
  );
};

FAQItem.propTypes = {
  faq: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleFAQ: PropTypes.func.isRequired,
};

export default FAQs;
