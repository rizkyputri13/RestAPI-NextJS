import React from "react";
import { render } from "react-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { GetJobdetailRequest } from './redux-saga/Action/JobListAction';
import { GetJoblistRequest } from "./redux-saga/Action/JobListAction";

export default function JobDetail(props) {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.joblistStated);
  useEffect(() => {
    dispatch(GetJoblistRequest(props.id));
  }, []);

  return (
    <div>
      {jobs &&
        jobs?.data?.map((jobd) => (
          <>
            <h2 className="font-medium px-10 py-5">
              {jobd.type}/{jobd.location}
            </h2>
            <h1 className="font-bold px-10">{jobd.title}</h1>
            <br></br>
            <div className="grid grid-cols-2 divide-x">
              <ul className="w-200 divide-y divide-gray-200 dark:divide-gray-700 px-10 py-2 border border-gray-100">
                <li className="pb-3 sm:pb-4">
                  <div className="mt-6">
                    <div className="text-gray-700 ">
                      <div
                        dangerouslySetInnerHTML={{ __html: jobd.description }}
                      />
                    </div>
                  </div>
                </li>
              </ul>
              <div>
                <div className="max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 py-10">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {jobd.company}
                  </h5>
                  <img
                    className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                    src={jobd.company_logo}
                    alt=""
                  />
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:underline"
                  >
                    {jobd.company_url}
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </div>
                <div className="max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 py-10">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    How to Apply
                  </h5>
                  <div>
                    <div
                      className="flex "
                      dangerouslySetInnerHTML={{ __html: jobd.how_to_apply }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}
