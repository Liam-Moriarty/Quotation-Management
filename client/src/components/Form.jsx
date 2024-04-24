import React from "react";
import { useFormik } from "formik";

// initialize the schemas on the form you can
// add default values if necessary
const initialValues = {
  date: "",
  refNo: "",
  companyName: "",
  client1: "",
  client2: "",
  // employee1: "",
  // employee2: "",
};

// onSubmit is calling the formik with its
// handleSubmit object to store the values in values argument
// in the form that has handleSubmit
const onSubmit = (values) => {
  // We console loging the values here but in
  // real world we might call an api to this
  console.log("Form Values", values);
};

// this is to validate the values that gets in the form
// this check if the values is empty and prompt required field
// while in email the else if is to check
// the format of the user to enter
const validate = (values) => {
  let errors = {};

  if (!values.date) {
    errors.date = "Required Field";
  }

  if (!values.refNo) {
    errors.refNo = "Required Field";
  }

  if (!values.companyName) {
    errors.companyName = "Required Field";
  }

  if (!values.client1) {
    errors.client1 = "Required field";
  }

  // if (!values.email) {
  //   errors.email = "Required field";
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = "Invalid email address";
  // }

  if (!values.client2) {
    errors.client2 = "Required field";
  }

  return errors;
};

const Form = () => {
  // create a container to store useFormik hook
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("Form Touched", formik.touched);

  return (
    // the onChange is calling the built in handleChange function
    // on formik to get the values in the input
    // while the value is to where the values will store
    // the onBlur is a built in helper in formik
    // this will help us to track to track the click input fields
    // when its clicked it will send us true as an object
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col justify-center"
    >
      {/* Top section date, refno, company name */}
      <h3 className="text-accent-light dark:text-accent-dark text-base font-bold">
        Quote Details
      </h3>
      <section className="grid xl:grid-cols-3 md:gap-4 gap-2">
        <div className="flex flex-col">
          <label htmlFor="date" className="label">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
          {formik.errors.date ? (
            <div className="text-red-500 font-medium">{formik.errors.date}</div>
          ) : null}
        </div>

        <div className="flex flex-col">
          <label htmlFor="refNo" className="label">
            Reference No#:
          </label>
          <input
            type="text"
            id="refNo"
            name="refNo"
            className="input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.refNo}
          />
          {formik.errors.refNo ? (
            <div className="text-red-500 font-medium">
              {formik.errors.refNo}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col">
          <label htmlFor="companyName" className="label">
            Company name:
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyName}
          />
          {formik.errors.companyName ? (
            <div className="text-red-500 font-medium">
              {formik.errors.companyName}
            </div>
          ) : null}
        </div>
      </section>

      {/* second section client information */}
      <h3
        className="text-accent-light dark:text-accent-dark text-base
       mt-10 font-bold"
      >
        Client Details
      </h3>
      <section className="grid xl:grid-cols-2 md:gap-4 gap-2">
        <div className="flex flex-col">
          <label htmlFor="client1" className="label">
            Client Name:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.client1}
          />
          {formik.errors.client1 ? (
            <div className="text-red-500 font-medium">
              {formik.errors.client1}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col">
          <label htmlFor="client2" className="label">
            Client Name:
          </label>
          <input
            type="text"
            id="client2"
            name="client2"
            className="input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.client2}
          />
          {formik.errors.client2 ? (
            <div className="text-red-500 font-medium">
              {formik.errors.client2}
            </div>
          ) : null}
        </div>
      </section>

      <button
        type="submit"
        className="py-2 bg-accent-light dark:bg-accent-dark font-medium font-poppins text-text-light dark:text-text-dark mt-10"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
