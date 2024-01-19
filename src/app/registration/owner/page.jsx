"use client";
import { Formik, Field, Form } from "formik";
import axios from "axios";

export default function OwnerRegistration() {
  return (
    <div className="grid place-items-center ">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          address: "",
          passport: "",
          nid: "",
          city: "",
          state: "",
          zip: "",
          phone: "",
          ownerType: "",
        }}
        onSubmit={async (values) => {
          axios
            .post("https://blockchain-based-smartphone-ownership-backend.vercel.app/owner", {
              FirstName: values.firstName,
              LastName: values.lastName,
              Email: values.email,
              Country: values.country,
              Address: values.address,
              Passport: values.passport,
              Nid: values.nid,
              City: values.city,
              State: values.state,
              Zip: values.zip,
              Phone: values.phone,
              OwnerType: "Customer",
            })
            .then(function (response) {
              alert("Owner Registered Successfully");
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          
        }}
      >
        <Form className="space-y-8 divide-y divide-gray-200 max-w-7xl">
          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Owner Registration
                </h3>
              </div>
              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    First name
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Last name
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Email address
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Phone number
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <Field
                      id="phone"
                      name="phone"
                      type="text"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Country
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <Field
                      as="select"
                      id="country"
                      name="country"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    >
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="USA">USA</option>
                    </Field>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="passport"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Passport
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <Field
                      type="text"
                      name="passport"
                      id="passport"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="nid"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    NID
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <Field
                      type="text"
                      name="nid"
                      id="nid"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Address
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <Field
                      type="text"
                      name="address"
                      id="address"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    City
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <Field
                      type="text"
                      name="city"
                      id="city"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    State
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <Field
                      type="text"
                      name="state"
                      id="state"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <Field
                      type="text"
                      name="zip"
                      id="zip"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Register
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
