const ContactForm = () => {
  return (
    <article className="flex flex-col justify-center items-center gap-4 my-20">
      {/* heading */}
      <h3 className="font-Montserrat font-extrabold text-lg md:text-xl">
        Connect with Our Digital Marketing Experts
      </h3>
      {/* sub heading */}
      <p className="font-sans text-center  font-semibold mx-[10%]">
        Reach Out for Tailored Strategies and Results-Driven Solutions. Let's
        Elevate Your Online Presence Together
      </p>
      {/* form elements */}
      <form className="bg-white rounded-3xl shadow-md shadow-gray-300 px-6 py-10  w-[80%] max-w-[800px]">
        {/* Grid elements */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Name, phone, email */}
          <div>
            <div className="inputBox">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                required
                className="input"
                placeholder="Enter your name"
              />
            </div>
            <div className="inputBox">
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                id="phone"
                minLength={8}
                maxLength={13}
                required
                className="input"
                placeholder="Enter your Number"
              />
            </div>
            <div className="inputBox">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                className="input"
                placeholder="Enter your Email"
              />
            </div>
          </div>
          {/* Message */}
          <div className="inputBox">
            <label htmlFor="Message">Message</label>
            <textarea
              name=""
              id=""
              rows={7}
              cols={8}
              placeholder="Enter your Message"
              className="input"
            ></textarea>
          </div>
        </div>
        {/* button */}
        <div className="flex justify-center mt-6">
          <button type="submit" className="btn w-[50%]">
            Get Started
          </button>
        </div>
      </form>
    </article>
  );
};

export default ContactForm;
