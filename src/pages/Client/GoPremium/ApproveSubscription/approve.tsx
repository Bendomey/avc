import * as React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { PopupModal } from "../../../../components/atoms/Modals";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
}

const data = {
  name: "Starter",
};

const ApproveSubscription: React.FC<Props> = ({ show, setShow }) => {
  return (
    <React.Fragment>
      <PopupModal show={show} setShow={setShow}>
        <React.Fragment>
          <div className={"w-full sm:w-full md:w-6/12 rounded-md shadow-xl"}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationCircleIcon
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Yearly subscription plan?
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to subscribe to this {data?.name}{" "}
                      plan yearly? This action will create a subscription plan
                      for you and will redirect you to make your initial
                      payment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => setShow(false)}
              >
                Subscribe
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => setShow(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </React.Fragment>
      </PopupModal>
    </React.Fragment>
  );
};

export default ApproveSubscription;
