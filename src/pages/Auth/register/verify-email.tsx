import * as React from "react";
import { PopupModal } from "../../../components/atoms/Modals";
import { VerifyModalProp } from "../../../shared/interfaces/register";
import ClipLoader from "react-spinners/ClipLoader";
import VerifySVG from "../../../assets/sentMessage";

const loading = false;
const email = "domeybenjamin1@gmail.com";
const resendLoading = false;
const VerifyEmail: React.FC<VerifyModalProp> = ({ setShow, show }) => {
  const [countDown, setCountdown] = React.useState<number>(59);
  const [code, setCode] = React.useState<string>("");

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countDown > 0)
      timer = setTimeout(() => setCountdown(countDown - 1), 1000);
    return () => clearTimeout(timer);
  }, [countDown]);
  const handleResendVerification = () => {};
  const HandleSubmit = () => {};
  return (
    <React.Fragment>
      <PopupModal show={show} setShow={setShow} canClose={false}>
        <React.Fragment>
          <div className={"verifyRegisterEmailModalContainer"}>
            {loading && (
              <div
                className={
                  "absolute z-1 bg-white h-full w-full flex flex-col justify-center items-center "
                  //   styles.opacityBack
                }
              >
                <ClipLoader size={50} color={"#E21E47"} />
                <div className={"text-2xl text-yellow-600 mt-5"}>
                  Verifying...
                </div>
              </div>
            )}

            <div
              className={"flex flex-col h-full justify-between items-center "}
            >
              <div />
              <div
                className={"flex flex-col justify-center items-center w-full "}
              >
                <VerifySVG
                  className={"h-20 w-40 sm:w-40 sm:h-20 md:h-32 md:w-56 mb-2"}
                />
                <span className={"text-center font-light mt-4 mx-10"}>
                  Please enter the six digits code sent to this email:{" "}
                  <span className={"text-red-600"}>{email}</span>
                </span>
                <div className="mt-4 rounded-none shadow-sm w-3/4">
                  <input
                    type={"string"}
                    placeholder={"OTP eg 123456.."}
                    value={code}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCode(e.target.value)
                    }
                    className={`form-input block rounded-none bg-gray-50 text-center border w-full text-md sm:text-md md:text-lg font-light py-2 sm:py-2 md:py-4 transition duration-150 ease-in-out sm:text-sm sm:leading-5`}
                  />
                </div>

                <span className={"text-center font-light mt-2"}>
                  Didn't receive code?{" "}
                  {resendLoading ? (
                    <React.Fragment> Loading...</React.Fragment>
                  ) : countDown !== 0 ? (
                    <React.Fragment>
                      {" "}
                      <span className={"text-blue-500"}>
                        0:{countDown < 10 ? `0${countDown}` : countDown}
                      </span>
                    </React.Fragment>
                  ) : (
                    <button
                      onClick={handleResendVerification}
                      type={"button"}
                      className={"text-blue-600 focus:outline-none"}
                    >
                      resend
                    </button>
                  )}
                </span>
              </div>
              <div
                className={
                  "grid grid-cols-1 h-16 gap-0 w-full border-t border-gray-200"
                }
              >
                <button
                  onClick={HandleSubmit}
                  className={
                    "border-r border-gray-200 flex justify-center items-center hover:bg-gray-50 focus:outline-none"
                  }
                >
                  <span className={"font-light text-gray-500"}>
                    VERIFY EMAIL
                  </span>
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      </PopupModal>
    </React.Fragment>
  );
};

export default VerifyEmail;
