"use client";
import { Formik, Field, Form } from "formik";
import axios from "axios";

export default function OwnershipTransfer() {
  return (
    <div className="grid place-items-center ">
      <Formik
        initialValues={{
          phoneId: "",
          userId: "",
        }}
        onSubmit={async (values) => {
          axios
            .post(`https://blockchain-based-smartphone-ownership-backend.vercel.app/ownershiprecord`, {
              Owner: { OwnerId: parseInt(values.userId) },
              Phone: { PhoneId: parseInt(values.phoneId) },
              DateAcquired: new Date().toJSON(),
              DateRelinquished: new Date().toJSON(),
              CurrentOwner: true
            })
            .then(function (response) {
              alert("Phone Transferred Successfully");
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
                  Ownership Transfer
                </h3>
              </div>
              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="phoneId"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Phone ID
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <Field
                      type="text"
                      name="phoneId"
                      id="phoneId"
                      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="userId"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Transferred User ID
                  </label>
                  <div className="mt-1 sm:col-span-2 sm:mt-0">
                    <Field
                      type="text"
                      name="userId"
                      id="userId"
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
                Transfer
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
