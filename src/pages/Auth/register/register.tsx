import * as React from "react";
import image from "../../../assets/images/logo.png";
import background from "../../../assets/images/background.jpg";
import { Link } from "react-router-dom";
import { useQueryStrings } from "../../../components/atoms/Hooks";

import VerifyEmailModal from "./verify-email";
import { WaitForModal } from "../../../components/atoms/loadingComponents";

const Register = () => {
  const query = useQueryStrings();

  //for variables to backend
  const [type, setType] = React.useState<string>("");
  const [id, setId] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirm, setConfirm] = React.useState<string>("");

  const [showVerifyModal, setShowVerifyModal] = React.useState<boolean>(false);

  //listne on query change
  React.useEffect(() => {
    if (!query.get("user") || query.get("user") === "") {
      setType("");
    } else setType(query.get("user") || "");
  }, [query]);

  const HandleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setId(""); // set id here
    setShowVerifyModal(true);
  };

  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: "url(" + background + ")",

          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="min-h-screen bg-black bg-opacity-80 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full md:w-5/12">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="sm:mx-auto sm:w-full md:w-full">
                <img className="mx-auto h-14 w-auto" src={image} alt="AVC" />
                <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">
                  Sign up here as
                </h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3">
                  <Link to={"/register?user=client"}>
                    <div
                      className={`w-full inline-flex  py-2 px-4 border ${
                        type === "client" ? "border-red-300" : "border-gray-300"
                      } rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 group hover:border-red-300`}
                    >
                      <div className="flex">
                        <div>
                          <h4
                            className={`${
                              type === "client"
                                ? "text-red-500"
                                : "text-gray-500"
                            } text-lg font-bold group-hover:text-red-500`}
                          >
                            Client
                          </h4>
                          <p
                            className={`${
                              type === "client"
                                ? "text-red-500"
                                : "text-gray-500"
                            } text-xs group-hover:text-red-500`}
                          >
                            Post legal work and get assistance from an AVC
                            lawyer.
                          </p>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <svg
                            className={`${
                              type === "client"
                                ? "text-red-500"
                                : "text-gray-500"
                            } w-7 h-7 sm:w-7 sm:h-7 md:w-10 md:h-10 group-hover:text-red-500`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/register?user=lawyer"}>
                    <div
                      className={`w-full inline-flex  py-2 px-4 border ${
                        type === "lawyer" ? "border-red-300" : "border-gray-300"
                      } rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 group hover:border-red-300`}
                    >
                      <div className="flex">
                        <div>
                          <h4
                            className={`${
                              type === "lawyer"
                                ? "text-red-500"
                                : "text-gray-500"
                            } text-lg font-bold group-hover:text-red-500`}
                          >
                            Lawyer
                          </h4>
                          <p
                            className={`${
                              type === "lawyer"
                                ? "text-red-500"
                                : "text-gray-500"
                            } text-xs group-hover:text-red-500`}
                          >
                            Help Clients with their Legal works on this
                            platforms
                          </p>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <svg
                            className={`${
                              type === "lawyer"
                                ? "text-red-500"
                                : "text-gray-500"
                            } w-7 h-7 sm:w-7 sm:h-7 md:w-10 md:h-10 group-hover:text-red-500`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className={"flex flex-col items-center"}>
                <form
                  onSubmit={HandleRegister}
                  className="space-y-4 w-full mt-5"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address <span className={"text-red-400"}>*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => setEmail(event?.target?.value)}
                        placeholder={"Email here.."}
                        className="appearance-none block w-full px-3  py-4 border border-gray-300 bg-gray-50 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div
                    className={
                      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3"
                    }
                  >
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password <span className={"text-red-400"}>*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          value={password}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => setPassword(event?.target?.value)}
                          placeholder={"Password here.."}
                          className="appearance-none block w-full px-3 py-4 border border-gray-300 rounded-md bg-gray-50 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Confirm Password{" "}
                        <span className={"text-red-400"}>*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          value={confirm}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => setConfirm(event?.target?.value)}
                          placeholder={"Confirm Password here.."}
                          className="appearance-none block w-full px-3 py-4 border border-gray-300 rounded-md bg-gray-50 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center" />

                    <div className="text-sm">
                      <Link
                        to={"/login"}
                        className="font-medium hover:underline text-red-600 hover:text-red-500"
                      >
                        Already Have An Account?
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className={"flex justify-center"}>
                    <p className={"text-center w-9/12"}>
                      By clicking on `Sign up`, I agree to the{" "}
                      <a
                        className={"text-yellow-600 underline mx-1"}
                        href="https://africanventurecounsel.com/terms-and-conditions"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        terms and conditions
                      </a>
                      offered by the AVC team
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Suspense fallback={WaitForModal()}>
        <VerifyEmailModal
          email={email}
          id={id}
          show={showVerifyModal}
          setShow={setShowVerifyModal}
        />
      </React.Suspense>
    </React.Fragment>
  );
};
export default Register;
