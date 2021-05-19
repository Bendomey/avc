import * as React from "react";
import image from "../../../assets/images/logo.png";
import background from "../../../assets/images/background.jpg";
import { Link, useHistory } from "react-router-dom";
import { ApolloError, useMutation } from "@apollo/client";
import {
  LOGIN,
  RESEND_VERIFICATION_CODE,
} from "../../../services/graphql/mutations";
import {
  LoginInputProps,
  LoginOutputProps,
  ResendVerificationCodeInputProps,
  ResendVerificationCodeOutputProps,
} from "../../../shared/interfaces/login";
import { toaster } from "evergreen-ui";
import _ from "lodash";
import Cookies from "../../../services/cookie.config";
import { AuthContext } from "../../../services/context";
import VerifyEmailModal from "../register/verify-email";
import { WaitForModal } from "../../../components/atoms/loadingComponents";

const Login = () => {
  const [{ signIn }] = React.useContext(AuthContext);
  const { push } = useHistory();
  const [email, setEmail] = React.useState<string>("");
  const [id, setID] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [showVerifyModal, setShowVerifyModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    document.title = "Login - African Venture Counsel";
    Cookies.clearCipher();
  }, []);

  const [invokeLogin, { loading }] =
    useMutation<LoginOutputProps, LoginInputProps>(LOGIN);

  const [invokeResend, { loading: loadResend }] = useMutation<
    ResendVerificationCodeOutputProps,
    ResendVerificationCodeInputProps
  >(RESEND_VERIFICATION_CODE);

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toaster.closeAll();

    invokeLogin({
      variables: {
        email,
        password,
      },
    })
      .then(async ({ data }) => {
        if (data) {
          setID(data?.loginUser?.user?.id); // set id
          if (!data?.loginUser?.user?.emailVerifiedAt) {
            invokeResend({
              variables: {
                id: data?.loginUser?.user?.id,
              },
            })
              .then(() => {
                return setShowVerifyModal(true);
              })
              .catch((e: ApolloError) => {
                if (e?.graphQLErrors?.length > 0) {
                  toaster.danger(
                    _.startCase(_.camelCase(e.graphQLErrors[0]?.message))
                  );
                }
              });
            return;
          }
          await signIn(data?.loginUser);
          push("/");
        }
      })
      .catch((e: ApolloError) => {
        if (e?.graphQLErrors?.length > 0) {
          if (
            ["UserNotFound", "PasswordIncorrect"].includes(
              e.graphQLErrors[0]?.message
            )
          ) {
            toaster.danger("Oops, your email address or password is incorrect");
          } else {
            toaster.danger(
              _.startCase(_.camelCase(e.graphQLErrors[0]?.message))
            );
          }
        }
      });
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
          <div className="mt-8 sm:mx-auto sm:w-full md:w-4/12">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-14 w-auto" src={image} alt="AVC" />
                <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">
                  Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600 max-w">
                  We Are Happy To Have You!
                </p>
              </div>
              <div className={"flex flex-col items-center"}>
                <form onSubmit={HandleSubmit} className="space-y-4 w-full mt-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
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
                        ) => setEmail(event.target.value)}
                        placeholder={"Email here.."}
                        className="appearance-none block w-full px-3  py-4 border border-gray-300 bg-gray-50 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
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
                        ) => setPassword(event.target.value)}
                        placeholder={"Password here.."}
                        className="appearance-none block w-full px-3 py-4 border border-gray-300 rounded-md bg-gray-50 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember_me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <button className="font-medium text-red-600 hover:text-red-500">
                        Forgot your password?
                      </button>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loadResend || loading}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      {loading || loadResend ? "loading..." : "Sign in"}
                    </button>
                  </div>
                </form>
                <div className="mt-6 w-full">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Or register as
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div>
                      <Link
                        to="/register?user=client"
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Sign in with Facebook</span>
                        <svg
                          className="w-5 h-5"
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

                        <span className={"ml-2"}>Client</span>
                      </Link>
                    </div>

                    <div>
                      <Link
                        to="/register?user=lawyer"
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Sign in with GitHub</span>
                        <svg
                          className="w-5 h-5"
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

                        <span className={"ml-2"}>Laywer</span>
                      </Link>
                    </div>
                  </div>
                </div>
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
export default Login;
