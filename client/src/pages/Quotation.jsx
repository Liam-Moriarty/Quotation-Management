import React, { useState, useEffect } from "react";
import { Form, QuotationDetails } from "../components";

const Quotation = () => {
  // This line sets up a state variable called width using the useState hook in React. It initializes width with the current width of the browser window (window.innerWidth), and setWidth is a function that we use later to update the width variable.
  const [width, setWidth] = useState(window.innerWidth);

  //  Here, we define a function called handleResize that updates the width state variable with the current width of the browser window whenever the window is resized.
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  // We add an event listener for the "resize" event on the window, and when the window is resized, it calls the handleResize function to update the width state variable.

  // The empty array [] as the second argument to useEffect means that this effect will only run once (on component mount) and clean up when the component unmounts.

  // The returned function inside useEffect removes the event listener when the component unmounts to avoid memory leaks or unnecessary computations.
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flex max-lg:block flex-1 gap-4 padding-x pt-4">
      {/* FORM */}
      {width > 522 ? (
        <div className="w-full h-screen shadow-3xl-light dark:shadow-3xl-dark overflow-auto p-5 text-text-light dark:text-text-dark">
          <Form />
        </div>
      ) : (
        <div className="w-full h-screen shadow-3xl-light dark:shadow-3xl-dark overflow-auto p-5 text-text-light dark:text-text-dark">
          Show this div page will not render recommend using laptop, computer or
          tablet
        </div>
      )}

      {/* FORM DETAILS */}
      <div className="w-full h-screen shadow-3xl-light dark:shadow-3xl-dark overflow-auto p-5 text-text-light dark:text-text-dark">
        <QuotationDetails />
      </div>
    </section>
  );
};

export default Quotation;
