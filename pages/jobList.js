import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GetJoblistRequest,
  GetSearchJobRequest,
} from "./redux-saga/Action/JobListAction";
import JobDetail from "./jobDetail";
import { useFormik } from "formik";

export default function JobList() {
  const { jobs } = useSelector((state) => state.joblistStated);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetJoblistRequest());
  }, []);

  const [id, setId] = useState();
  const [display, setDisplay] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const onClick = (id) => {
    setDisplay(true);
    setId(id);
  };

  const formik = useFormik({
    initialValues: {
      description: "",
      location: "",
    },
    onSubmit: async (values) => {
      let payload = {
        description: values.description,
        location: values.location,
      };

      dispatch(GetSearchJobRequest(payload));
      setRefresh(true);
    },
  });

  return (
    <div>
      <>
        {display ? (
          <JobDetail
            id={id}
            setDisplay={setDisplay}
            closeAdd={() => setDisplay(false)}
            onRefresh={() => setRefresh(true)}
          />
        ) : (
          <>
            <header className="flex px-5 py-3 border border-blue-200 bg-blue-500 dark:bg-blue-800 dark:border-blue-700 text-white font-bold">
              GitHub Jobs
            </header>
            <br></br>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex text-sm flex-col items-center md:items-start md:flex-row gap-y-4 md:gap-y-0 gap-x-5 py-5 justify-center px-16 border shadow my-5 rounded">
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder=" Filter by title, benefits, companies, expertise"
                  className=" w-full md:w-4/12 bg-gray-50 border-gray-200 py-2"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder=" Filter by city, state, zip code or country"
                  className="w-full md:w-4/12 bg-gray-50 border-gray-200 py-2"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="flex items-center mb-4">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Full time only
                  </label>
                </div>
                <button
                  type="submit"
                  className="whitespace-nowrap inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 w-full md:w-min"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="flex px-2 py-3 font-medium">Job List</div>
            <div>
              {jobs &&
                jobs?.data?.map((job) => (
                  <>
                    <hr className="mt-2 mb-2"></hr>
                    <div className="grid grid-cols-12 gap-6 cursor-pointer">
                      <div
                        key={job.id}
                        className="col-span-9 px-2"
                        onClick={() => onClick(job.id)}
                      >
                        <h4 className="text-blue-500 text-lg font-semibold">
                          {job.title}
                        </h4>
                        <span className="text-gray-500 text-sm">
                          {job.company} -{" "}
                        </span>
                        <span className="text-green-500 text-sm font-semibold">
                          {job.type}
                        </span>
                      </div>
                      <div className="col-span-3 text-right">
                        <p className="text-gray-600 text-base">
                          {job.location}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {new Date(job.created_at).toDateString()}
                        </p>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </>
        )}
      </>
    </div>
  );
}
