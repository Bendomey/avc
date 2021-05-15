import * as React from "react";

const ManageJobs = () => {
  return (
    <React.Fragment>
      <div
        className={"mb-5 mt-2 mx-6 sm:mx-6 md:mx-0 flex flex-row items-center"}
      >
        <div className={"border-b-2 border-red-500"}>
          <h1 className={"font-extrabold text-xl text-gray-700"}>
            All Your Job Listings (50)
          </h1>
        </div>
      </div>
      <div className={"bg-white p-5  w-full"}>
        <div className="flex flex-col w-full sm:flex-col md:flex-row justify-between items-center">
          <div>
            <label
              htmlFor="jobs"
              className="block text-sm font-medium text-gray-700"
            >
              SEARCH JOBS
            </label>
            <div className="mt-1">
              <input
                type="search"
                className="shadow-sm focus:ring-gray-200 focus:border-gray-50 block w-80 sm:w-80 md:w-96 sm:text-sm border-gray-200 bg-gray-100 rounded-none"
                placeholder="Search for jobs by title here..."
              />
            </div>
          </div>
          <div className={"mt-5 sm:mt-5 md:mt-0"}>
            <label
              htmlFor="jobs"
              className="block text-sm  font-medium text-gray-700"
            >
              FILTER JOBS
            </label>
            <div className="mt-1">
              <select
                className="shadow-sm  focus:ring-gray-200 focus:border-gray-50 block w-80 sm:w-80 md:w-56 sm:text-sm border-gray-200 bg-gray-100 rounded-none"
                placeholder="Search for jobs by title here..."
              >
                <option value="">All</option>
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
                <option value="InProgress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Canceled">Canceled</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ManageJobs;
