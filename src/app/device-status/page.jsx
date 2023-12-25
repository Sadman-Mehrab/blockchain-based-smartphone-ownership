"use client";
import { useState } from "react";

export default function DeviceStatus() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="grid place-items-center ">
      <div className="space-y-8 divide-y divide-gray-200 max-w-7xl">
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Device Status
              </h3>
            </div>
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="deviceId"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Device IMEI
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="imei"
                    id="imei"
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
              onClick={() => {
                setIsVisible(true);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {isVisible && (
        <div className="bg-white rounded-md">
          <div>
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="flex mx-auto max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
                <div className="flex items-center gap-x-6">
                  <img
                    src="https://tailwindui.com/img/logos/48x48/tuple.svg"
                    alt=""
                    className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
                  />
                  <h1>
                    <div className="text-sm leading-6 text-gray-500">
                      IEMI <span className="text-gray-700">#861536030196001</span>
                    </div>
                    <div className="mt-1 text-base font-semibold leading-6 text-gray-900">
                      IPhone 14 Pro Max 512GB Green
                    </div>
                  </h1>
                </div>
                <div className="flex items-center gap-x-4 sm:gap-x-6">
                  <button
                    type="button"
                    className="hidden text-sm font-semibold leading-6 text-gray-900 sm:block"
                  >
                    Copy URL
                  </button>
                  <a
                    href="#"
                    className="hidden text-sm font-semibold leading-6 text-gray-900 sm:block"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Send
                  </a>

                  <div
                    
                    className="relative sm:hidden"
                  >
                    <button
                      type="button"
                      className="-m-3 block p-3"
                      id="more-menu-button"

                    >
                      <span className="sr-only">More</span>
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"></path>
                      </svg>
                    </button>

                    <div
                      
                      className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="more-menu-button"
                      tabindex="-1"
                    >
                      <button
                        type="button"
                        className="block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900"
                    
                        role="menuitem"
                        tabindex="-1"
                        id="more-menu-item-0"
                      >
                        Copy URL
                      </button>
                      <a
                        href="#"
                        className="block px-3 py-1 text-sm leading-6 text-gray-900"
                        role="menuitem"
                        tabindex="-1"
                        id="more-menu-item-1"
                      >
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
                <h2 className="text-base font-semibold leading-6 text-gray-900">
                  Current Owner
                </h2>
                <dl className="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
                  <div className="sm:pr-4">
                    <dt className="inline text-gray-500">861536030196001#</dt>
                    <dd className="inline text-gray-700">
                      <time datetime="2023-23-01">Fahim Haider</time>
                    </dd>
                  </div>
                  <div className="mt-2 sm:mt-0 sm:pl-4">
                    <dt className="inline text-gray-500">Owner From</dt>
                    <dd className="inline text-gray-700">
                      <time datetime="2023-31-01">January 31, 2023</time>
                    </dd>
                  </div>
                  <div className="mt-6 border-t border-gray-900/5 pt-6 sm:pr-4">
                    <dt className="font-semibold text-gray-900">Address</dt>
                    <dd className="mt-2 text-gray-500">
                      <span className="font-medium text-gray-900">Acme, Inc.</span>
                      <br />
                      7363 Cynthia Pass
                      <br />
                      Toronto, ON N3Y 4H8
                    </dd>
                  </div>
                  <div className="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pl-4 sm:pt-6">
                    <dt className="font-semibold text-gray-900">Other Devices</dt>
                    <dd className="mt-2 text-gray-500">
                      <span className="font-medium text-gray-900">
                        Nokia 3310 4G
                      </span>
                      <br />
                      <span className="font-medium text-gray-900">
                        Samgsung Galaxy A50
                      </span>
                    </dd>
                  </div>
                </dl>
                <table className="mt-16 w-full whitespace-nowrap text-left text-sm leading-6">
                  <colgroup>
                    <col className="w-full" />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <thead className="border-b border-gray-200 text-gray-900">
                    <tr>
                      <th scope="col" className="px-0 py-3 font-semibold">
                        Previous Owners
                      </th>
                      <th
                        scope="col"
                        className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell"
                      >
                        Ownership Started
                      </th>
                      <th
                        scope="col"
                        className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell"
                      >
                        Ownership Ended
                      </th>
                      <th
                        scope="col"
                        className="py-3 pl-8 pr-0 text-right font-semibold"
                      >
                        Transfer ID
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="max-w-0 px-0 py-5 align-top">
                        <div className="truncate font-medium text-gray-900">
                          Fahim Haider
                        </div>
                        <div className="truncate text-gray-500">23872957205</div>
                      </td>
                      <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                        2023-23-01
                      </td>
                      <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                        2023-31-11
                      </td>
                      <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">
                        4636636343
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="max-w-0 px-0 py-5 align-top">
                        <div className="truncate font-medium text-gray-900">
                          Fahim Haider
                        </div>
                        <div className="truncate text-gray-500">23872957205</div>
                      </td>
                      <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                        2023-23-01
                      </td>
                      <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                        2023-31-11
                      </td>
                      <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">
                        4636636343
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="max-w-0 px-0 py-5 align-top">
                        <div className="truncate font-medium text-gray-900">
                          Fahim Haider
                        </div>
                        <div className="truncate text-gray-500">23872957205</div>
                      </td>
                      <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                        2023-23-01
                      </td>
                      <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                        2023-31-11
                      </td>
                      <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">
                        4636636343
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="max-w-0 px-0 py-5 align-top">
                        <div className="truncate font-medium text-gray-900">
                          Fahim Haider
                        </div>
                        <div className="truncate text-gray-500">23872957205</div>
                      </td>
                      <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                        2023-23-01
                      </td>
                      <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                        2023-31-11
                      </td>
                      <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">
                        4636636343
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
