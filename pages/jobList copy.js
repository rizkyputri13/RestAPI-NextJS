/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch, useSelector } from 'react-redux'
//import Navbar from '../component/layout/Navbar'
import React, { useEffect, useState } from 'react'
import { GetJoblistRequest, GetSearchJobRequest } from './redux-saga/Action/JobListAction'
import JobDetail from './jobDetail'
import { useFormik } from 'formik'

export default function JobList() {
  const dispatch = useDispatch()
  const [refresh, setRefresh] = useState(false)
  const [id, setId] = useState()
  const [display, setDisplay] = useState(false)
  const { jobs } = useSelector(state => state.joblistStated)
  useEffect(() => {
    dispatch(GetJoblistRequest())
  }, [])

  const onClick = (id) => {
    setDisplay(true)
    setId(id)
  }

  const formik = useFormik({
    initialValues: {
      description: '',
      location: ''
    },
    onSubmit: async (values) => {
      let payload = {
        description: values.description,
        location: values.location
      }

      dispatch(GetSearchJobRequest(payload))
      setRefresh(true)
    }
  })

  return (
    <div>
      
        <>
          {
            display ?
              <JobDetail
                id={id}
                setDisplay={setDisplay}
                closeAdd={() => setDisplay(false)}
                onRefresh={() => setRefresh(true)}
              />
            :
            <>
              <div className="mt-4 lg:grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <div className="fixed">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mb-2">
                        <label htmlFor="description" className="w-full text-sm font-medium text-gray-700">
                          Job Description
                        </label>
                        <input
                          type="text"
                          name="description"
                          id="description"
                          value={formik.values.description}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="description"
                          placeholder="Filter by title, benefits, companies, expertise"
                          className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="location" className="w-full text-sm font-medium text-gray-700">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          id="location"
                          value={formik.values.location}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="location"
                          placeholder="Filter by city, state, zip code or country"
                          className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className='mb-4'>
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="comments"
                              name="comments"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="comments" className="font-medium text-md text-gray-700">
                              Full Time Only
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className='mb-4'>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="mt-5 lg:col-span-3 lg:mt-0 pl-8 border-l-2">
                  <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="min-w-0 flex-1">
                      <h2 className="mt-2 mb-4 text-2xl font-bold leading-7 text-gray-800">Job List</h2>
                      {
                        jobs && jobs.data.map(job => (
                          <><hr className="mt-2 mb-2"></hr>
                          <div key={job.id} className="grid grid-cols-12 gap-6 cursor-pointer" onClick={() => onClick(job.id)}>
                            <div className="col-span-9 px-2">
                              <h4 className="text-blue-500 text-lg font-semibold">{job.title}</h4>
                              <span className="text-gray-500 text-sm">{job.company} - </span>
                              <span className="text-green-500 text-sm font-semibold">{job.type}</span>
                            </div>
                            <div className="col-span-3 text-right">
                              <p className="text-gray-600 text-base">{job.location}</p>
                              <p className="text-gray-400 text-sm">{job.created_at}</p>
                            </div>
                          </div></>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        </>
      
    </div>
  )
}