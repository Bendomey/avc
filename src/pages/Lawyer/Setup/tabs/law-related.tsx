import { toaster } from "evergreen-ui";
import * as React from "react";
import { getYears } from "../../../../services/broker";
import { storage } from "../../../../services/firebase";
import _ from "lodash";
import { ApolloError } from "@apollo/client";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  firstYearOfBARAdmission: string;
  setFirstYearOfBARAdmission: React.Dispatch<React.SetStateAction<string>>;
  nationalIDFront: string;
  setNationalIDFront: React.Dispatch<React.SetStateAction<string>>;
  nationalIDBack: string;
  setNationalIDBack: React.Dispatch<React.SetStateAction<string>>;
  barMembershipCard: string;
  setBarMembershipCard: React.Dispatch<React.SetStateAction<string>>;
  lawCert: string;
  setLawCert: React.Dispatch<React.SetStateAction<string>>;
  cv: string;
  setCV: React.Dispatch<React.SetStateAction<string>>;
  letter: string;
  setLetter: React.Dispatch<React.SetStateAction<string>>;
  licenseNumber: string;
  setLicenseNumber: React.Dispatch<React.SetStateAction<string>>;
  loadSubmit: boolean;
  submitData: any;
}

const LawRelated: React.FC<Props> = ({
  setStep,
  firstYearOfBARAdmission,
  setFirstYearOfBARAdmission,
  licenseNumber,
  setLicenseNumber,
  nationalIDFront,
  setNationalIDFront,
  nationalIDBack,
  setNationalIDBack,
  barMembershipCard,
  setBarMembershipCard,
  lawCert,
  setLawCert,
  cv,
  setCV,
  letter,
  setLetter,
  loadSubmit,
  submitData,
}) => {
  const [nationalIDFrontFile, setNationalIDFrontFile] = React.useState<any>(
    null
  );
  const [uploadFront, setuploadFront] = React.useState<boolean>(false);
  const [nationalIDBackFile, setNationalIDBackFile] = React.useState<any>(null);
  const [uploadBack, setuploadBack] = React.useState<boolean>(false);
  const [barMembershipCardFile, setBarMembershipCardFile] = React.useState<any>(
    null
  );
  const [
    uploadbarMembershipCardFile,
    setuploadbarMembershipCardFile,
  ] = React.useState<boolean>(false);
  const [lawCertFile, setLawCertFile] = React.useState<any>(null);
  const [uploadlawCertFile, setuploadlawCertFile] = React.useState<boolean>(
    false
  );
  const [cvFile, setCVFile] = React.useState<any>(null);
  const [uploadcvFile, setuploadcvFile] = React.useState<boolean>(false);
  const [letterFile, setLetterFile] = React.useState<any>(null);
  const [uploadLetterFile, setuploadLetterFile] = React.useState<boolean>(
    false
  );

  const HandleSubmit = () => {
    if (licenseNumber.trim() === "")
      return toaster.warning("Please enter a license number");
    if (firstYearOfBARAdmission.trim() === "")
      return toaster.warning("Please enter your first year of BAR admission");
    if (nationalIDFront.trim() === "")
      return toaster.warning("Please upload national ID (Front)");
    if (nationalIDBack.trim() === "")
      return toaster.warning("Please upload national ID (Back)");
    if (barMembershipCard.trim() === "")
      return toaster.warning("Please upload BAR membership card");
    if (lawCert.trim() === "")
      return toaster.warning("Please upload law certificate");
    if (cv.trim() === "") return toaster.warning("Please upload CV");
    if (letter.trim() === "") return toaster.warning("Please upload letter");

    return submitData().catch((e: ApolloError) => {
      if (e?.graphQLErrors?.length > 0) {
        toaster.danger(_.startCase(_.camelCase(e.graphQLErrors[0]?.message)));
      }
    });
  };

  const HandleUpload = (
    file: any,
    model: string,
    setUpload: any,
    setModel: any
  ) => {
    if (file === null) return toaster.warning(`Please choose a ${model}`);

    setUpload(true);
    const fileNewName: string = new Date().toString() + "/" + file.name;
    const uploadTask = storage.ref(`uploads/${fileNewName}`).put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        setUpload(false);
        return toaster.warning("Error", {
          description: error?.message,
        });
      },
      () => {
        storage
          .ref("uploads")
          .child(fileNewName)
          .getDownloadURL()
          .then((url) => {
            setUpload(false);
            setModel(url);
          })
          .catch((e) => {
            setUpload(false);
            toaster.warning("Error", {
              description: e?.message,
            });
          });
      }
    );
  };

  return (
    <React.Fragment>
      <div className="mt-10 col-span-3 sm:mt-0">
        <div className={"mb-5"}>
          <button
            type="button"
            onClick={() => {
              toaster.closeAll();
              setStep((step) => step - 1);
            }}
            className="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
          >
            <svg
              className={"h-5 w-5 mr-3 text-white"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go Back
          </button>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Lawyer Related Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Enter your lawyer related details here
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-x-6 gap-y-3">
                    <div className="col-span-6 sm:col-span-6 lg:col-span-4">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        License Number <span className={"text-red-500"}>*</span>
                      </label>
                      <input
                        type="text"
                        value={licenseNumber}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => setLicenseNumber(event.target.value)}
                        placeholder={"License Number here ..."}
                        required
                        className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First year of BAR Admission{" "}
                        <span className={"text-red-500"}>*</span>
                      </label>
                      <select
                        value={firstYearOfBARAdmission}
                        onChange={(
                          event: React.ChangeEvent<HTMLSelectElement>
                        ) => setFirstYearOfBARAdmission(event.target.value)}
                        required
                        className="mt-1 block w-full py-3 bg-gray-50 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                      >
                        <option className={""}>Please select</option>
                        {getYears(1990, new Date().getFullYear() - 7)?.map(
                          (year: number, i: number) => {
                            return (
                              <React.Fragment key={i}>
                                <option value={year.toString()}>{year}</option>
                              </React.Fragment>
                            );
                          }
                        )}
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        National ID (Front){" "}
                        <span className={"text-red-500"}>*</span>
                      </label>
                      <input
                        type="file"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          e?.target?.files
                            ? setNationalIDFrontFile(e?.target?.files[0])
                            : setNationalIDFrontFile(nationalIDFrontFile)
                        }
                        className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-1">
                      {nationalIDFront.trim() === "" ? (
                        <button
                          type="button"
                          onClick={() => {
                            HandleUpload(
                              nationalIDFrontFile,
                              "National ID (front)",
                              setuploadFront,
                              setNationalIDFront
                            );
                          }}
                          disabled={uploadFront}
                          className="inline-flex mt-0 sm:mt-0 md:mt-5 justify-center py-3 sm:py-3 md:py-4 w-full px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                        >
                          {uploadFront ? "uploading..." : "Upload"}
                        </button>
                      ) : (
                        <div
                          className={
                            "mt-5 hidden sm:hidden md:flex flex-row items-center text-green-600 h-12"
                          }
                        >
                          <svg
                            className={"h-5 w-5"}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        National ID (Back){" "}
                        <span className={"text-red-500"}>*</span>
                      </label>
                      <input
                        type="file"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          e?.target?.files
                            ? setNationalIDBackFile(e?.target?.files[0])
                            : setNationalIDBackFile(nationalIDBackFile)
                        }
                        className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-1">
                      {nationalIDBack.trim() === "" ? (
                        <button
                          type="button"
                          onClick={() => {
                            HandleUpload(
                              nationalIDBackFile,
                              "National ID (back)",
                              setuploadBack,
                              setNationalIDBack
                            );
                          }}
                          disabled={uploadBack}
                          className="inline-flex mt-0 sm:mt-0 md:mt-5 justify-center py-3 sm:py-3 md:py-4 w-full px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                        >
                          {uploadBack ? "uploading..." : "Upload"}
                        </button>
                      ) : (
                        <div
                          className={
                            "hidden sm:hidden md:flex mt-5 flex-row items-center text-green-600 h-12"
                          }
                        >
                          <svg
                            className={"h-5 w-5"}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        BAR membership card{" "}
                        <span className={"text-red-500"}>*</span>
                      </label>
                      <input
                        type="file"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          e?.target?.files
                            ? setBarMembershipCardFile(e?.target?.files[0])
                            : setBarMembershipCardFile(barMembershipCardFile)
                        }
                        className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-1">
                      {barMembershipCard.trim() === "" ? (
                        <button
                          type="button"
                          onClick={() => {
                            HandleUpload(
                              barMembershipCardFile,
                              "Bar Membership Card",
                              setuploadbarMembershipCardFile,
                              setBarMembershipCard
                            );
                          }}
                          disabled={uploadbarMembershipCardFile}
                          className="inline-flex mt-0 sm:mt-0 md:mt-5 justify-center py-3 sm:py-3 md:py-4 w-full px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                        >
                          {uploadbarMembershipCardFile
                            ? "uploading..."
                            : "Upload"}
                        </button>
                      ) : (
                        <div
                          className={
                            "mt-5 hidden sm:hidden md:flex flex-row items-center text-green-600 h-12"
                          }
                        >
                          <svg
                            className={"h-5 w-5"}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Copy of law certificate{" "}
                        <span className={"text-red-500"}>*</span>
                      </label>
                      <input
                        type="file"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          e?.target?.files
                            ? setLawCertFile(e?.target?.files[0])
                            : setLawCertFile(lawCertFile)
                        }
                        className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-1">
                      {lawCert.trim() === "" ? (
                        <button
                          type="button"
                          onClick={() => {
                            HandleUpload(
                              lawCertFile,
                              "Law Certificate",
                              setuploadlawCertFile,
                              setLawCert
                            );
                          }}
                          disabled={uploadlawCertFile}
                          className="inline-flex mt-0 sm:mt-0 md:mt-5 justify-center py-3 sm:py-3 md:py-4 w-full px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                        >
                          {uploadlawCertFile ? "uploading..." : "Upload"}
                        </button>
                      ) : (
                        <div
                          className={
                            "mt-5 hidden sm:hidden md:flex flex-row items-center text-green-600 h-12"
                          }
                        >
                          <svg
                            className={"h-5 w-5"}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        CV <span className={"text-red-500"}>*</span>
                      </label>
                      <input
                        type="file"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          e?.target?.files
                            ? setCVFile(e?.target?.files[0])
                            : setCVFile(cvFile)
                        }
                        className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-1">
                      {cv.trim() === "" ? (
                        <button
                          type="button"
                          onClick={() => {
                            HandleUpload(cvFile, "CV", setuploadcvFile, setCV);
                          }}
                          disabled={uploadcvFile}
                          className="inline-flex mt-0 sm:mt-0 md:mt-5 justify-center py-3 sm:py-3 md:py-4 w-full px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                        >
                          {uploadcvFile ? "uploading..." : "Upload"}
                        </button>
                      ) : (
                        <div
                          className={
                            "mt-5 hidden sm:hidden md:flex flex-row items-center text-green-600 h-12"
                          }
                        >
                          <svg
                            className={"h-5 w-5"}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Letter of good standing from BAR
                        <span className={"text-red-500"}>*</span>
                      </label>
                      <input
                        type="file"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          e?.target?.files
                            ? setLetterFile(e?.target?.files[0])
                            : setLetterFile(letterFile)
                        }
                        className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-1">
                      {letter.trim() === "" ? (
                        <button
                          type="button"
                          onClick={() => {
                            HandleUpload(
                              letterFile,
                              "Letter",
                              setuploadLetterFile,
                              setLetter
                            );
                          }}
                          disabled={uploadLetterFile}
                          className="inline-flex mt-0 sm:mt-0 md:mt-5 justify-center py-3 sm:py-3 md:py-4 w-full px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                        >
                          {uploadLetterFile ? "uploading..." : "Upload"}
                        </button>
                      ) : (
                        <div
                          className={
                            "mt-5 hidden sm:hidden md:flex flex-row items-center text-green-600 h-12"
                          }
                        >
                          <svg
                            className={"h-5 w-5"}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="px-4 py-10 col-span-3 text-center sm:px-6">
        <button
          onClick={HandleSubmit}
          type="button"
          className="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
        >
          Submit
          <svg
            className={"h-5 w-5 ml-5 text-white"}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </React.Fragment>
  );
};

export default LawRelated;
