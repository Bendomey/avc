import * as React from "react";
import { BreadCrumb } from "./components/breadcrumb";
import { Topbar } from "./components/topbar";
import { Footer } from "./components/footer";
import { StepOne, StepTwo, StepThree } from "./components/tab";

const AddJob = () => {
  const [step, setStep] = React.useState<number>(0);
  const [type, setType] = React.useState<number>(-1);

  return (
    <React.Fragment>
      <div className={"px-3"}>
        <BreadCrumb />
      </div>

      <div className={"mt-7 flex flex-col items-center"}>
        <h1 className={"font-bold mb-5 text-3xl mt-1 text-red-600"}>
          Post A New Job
        </h1>
        <Topbar step={step} />
        <div className={"w-full"}>
          {step === 0 && (
            <StepOne
              type={type}
              setType={setType}
              next={() => setStep((prev) => prev + 1)}
            />
          )}
          {step === 1 && (
            <StepTwo
              next={() => setStep((prev) => prev + 1)}
              back={() => setStep((prev) => prev - 1)}
            />
          )}
          {step === 2 && (
            <StepThree type={type} back={() => setStep((prev) => prev - 1)} />
          )}
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default AddJob;
