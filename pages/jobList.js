import React from 'react'

export default function JobList() {
  return (
    <><header className='flex px-5 py-3 border border-blue-200 bg-blue-500 dark:bg-blue-800 dark:border-blue-700 text-white font-bold'>
          GitHub Jobs
      </header>
      <br></br>
      <div className="flex text-sm flex-col items-center md:items-start md:flex-row gap-y-4 md:gap-y-0 gap-x-5 py-5 justify-center px-16 border shadow my-5 rounded">
            <input
                type="text"
                placeholder=" Filter by title, benefits, companies, expertise"
                className=" w-full md:w-4/12 bg-gray-50 border-gray-200 py-2"/>
            <input
                type="text"
                placeholder=" Filter by city, state, zip code or country"
                className="w-full md:w-4/12 bg-gray-50 border-gray-200 py-2"/>
                <div className="flex items-center mb-4">
            <input
                id="default-checkbox"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Full time only
            </label>
        </div>
            <button       
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 w-full md:w-min" >
                Search
            </button>
        </div>
        <div className='flex px-10 py-3 font-medium'>
            Job List
        </div>
        <div>
            <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700 px-10">
                <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                    </div>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Bonnie Green
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $3467
                    </div>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Michael Gough
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $67
                    </div>
                    </div>
                </li>
                </ul>

        </div>
 </>
  )
}
