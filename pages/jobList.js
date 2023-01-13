import React from 'react'
import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { GetJoblistRequest } from './redux-saga/Action/JobListAction';
import { handleGetJoblist } from './redux-saga/Middleware/JobListMiddle';

export default function JobList() {

    const handleGetJoblist = useSelector((state) => state.joblistStated.jobs);
    const dispatch = useDispatch();
    //const { jobs } = useSelector(state => state.joblistStated)
    useEffect(() => {
      dispatch(GetJoblistRequest());;
    }, [])
    
    const status = [
        {id: 0, value: 'Full Time'},
        {id: 1, value: 'No Full Time'},
    ]

  const [keyword1, setKeyword1] = useState("");
  const [keyword2, setKeyword2] = useState("");
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("");
  const [viewKeyword, setViewKeyword] = useState("");
  const [category, setCategory] = useState("1");

  const handleSearch = () => {
    setSearchTerm1(keyword1);
    setSearchTerm2(keyword2);
    setCategoryTerm(category);
  };

  const filteredJobs = useMemo(() => {
    if (categoryTerm.length > 0 || searchTerm1.length > 0 || searchTerm2.length > 0)   {
      setViewKeyword(searchTerm1);
      setViewKeyword(searchTerm2);
      return handleGetJoblist.filter((data) => {
        return (
          (data?.title.toLowerCase().includes(searchTerm1.toLowerCase()) || data?.company.toLowerCase().includes(searchTerm1.toLowerCase()) ||
            data?.benefits.toLowerCase().includes(searchTerm1.toLowerCase())) && data?.city.toLowerCase().includes(searchTerm2.toLowerCase()) &&
          categoryTerm.includes(data?.type)
        );
      });
    } 
    return handleGetJoblist;
  }, [searchTerm1, searchTerm2, categoryTerm, handleGetJoblist]);


  return (
    <><header className='flex px-5 py-3 border border-blue-200 bg-blue-500 dark:bg-blue-800 dark:border-blue-700 text-white font-bold'>
          GitHub Jobs
      </header>
      <br></br>
      <div className="flex text-sm flex-col items-center md:items-start md:flex-row gap-y-4 md:gap-y-0 gap-x-5 py-5 justify-center px-16 border shadow my-5 rounded">
            <input
                type="text"
                placeholder=" Filter by title, benefits, companies, expertise"
                className=" w-full md:w-4/12 bg-gray-50 border-gray-200 py-2"
                value={keyword1}
                onChange={(e) => setKeyword1(e.target.value)}/>
            <input
                type="text"
                placeholder=" Filter by city, state, zip code or country"
                className="w-full md:w-4/12 bg-gray-50 border-gray-200 py-2"
                value={keyword2}
                onChange={(e) => setKeyword2(e.target.value)}/>
                <div className="flex items-center mb-4">
            <select>
                id="default-checkbox"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            {status.map((data) => (
                <option key={data.id} value={data.value}>
                    {data.value}
                 </option>
                
            ))}
            </select>
            {/* <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Full time only
            </label> */}
        </div>
            <button       
                type='submit'
                onClick={handleSearch}
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 w-full md:w-min" >
                Search
            </button>
        </div>
        <div className='flex px-10 py-3 font-medium'>
            Job List
        </div>
        <br></br>
        <div>
            {filteredJobs && filteredJobs.data?.map(job => (
                <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700 px-10 py-2 border border-gray-100">
                    <li className="pb-3 sm:pb-4">
                        <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                            <p className= "font-medium text-blue-900 truncate dark:text-white">
                                <Link href="jobDetail">{job.title}</Link>
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-500">
                                {job.company} - {job.type}
                            </p>
                        </div>
                        <div className="flex-100 min-w-0">
                            <p className= "text-sm font-medium text-gray-600 truncate dark:text-white">
                                {job.location}
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-500">
                                {new Date(job.created_at).toDateString()}
                            </p>
                        </div>
                        </div>
                    </li>
                </ul>
            ))}
        </div>
 </>
  )
}
