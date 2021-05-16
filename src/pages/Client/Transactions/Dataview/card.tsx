import * as React from "react";
import { EyeIcon, RefreshIcon, CheckIcon } from "@heroicons/react/outline";

interface Props {
  data: any;
  retry: (data: any) => void;
}

const Card: React.FC<Props> = ({ data, retry }) => {
  return (
    <React.Fragment>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {new Date().toLocaleString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        USD 4,000.00
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
        {data.type}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <div className={"h-1.5 w-1.5 mr-1 bg-green-500 rounded-full"} />
          Success
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button className="rounded-full bg-rose-50 hover:bg-rose-100 cursor-pointer p-2">
          <EyeIcon className={"h-4 w-4 text-rose-500"} />
        </button>
        <button
          title={"retry"}
          onClick={() => retry(data)}
          className="rounded-full ml-3 bg-blue-50 hover:bg-blue-100 cursor-pointer p-2"
        >
          <RefreshIcon className={"h-4 w-4 text-blue-500"} />
        </button>
        <button
          title={"pay"}
          className="rounded-full ml-3 bg-green-50 hover:bg-green-100 cursor-pointer p-2"
        >
          <CheckIcon className={"h-4 w-4 text-green-500"} />
        </button>
      </td>
    </React.Fragment>
  );
};

export default Card;
