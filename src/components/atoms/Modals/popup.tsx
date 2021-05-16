import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import Transition from "../transitions";
import { useOutsideListener } from "../Hooks";
import { BasicProps } from "./modal";

const Modal = ({ show, setShow, size, children, canClose }: BasicProps) => {
  const ref = useRef(null);
  useOutsideListener(ref, () => {
    if (canClose) setShow(false);
  });
  return (
    <Fragment>
      <Transition
        appear={undefined}
        show={show}
        enter="ease-in-out duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in-out duration-500"
        leaveFrom="translate-x-0"
        leaveTo="opacity-0"
      >
        <div className="fixed z-20 bg-black bg-opacity-75 inset-0 overflow-hidden"></div>
      </Transition>

      <Transition
        appear={undefined}
        show={show}
        enter="transform transition ease-int duration-700 sm:duration-700"
        enterFrom="translate-y-full"
        enterTo="translate-x-0"
        leave="transform transition ease-out duration-700 sm:duration-700"
        leaveFrom="translate-x-0"
        leaveTo="translate-y-full"
      >
        <div className="fixed z-20 bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
          <div
            ref={ref}
            className=" rounded-lg overflow-hidden transform transition-all sm:flex sm:items-center sm:justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {children}
          </div>
        </div>
      </Transition>
    </Fragment>
  );
};

Modal.defaultProps = {
  size: 35,
  canClose: true,
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  size: PropTypes.number,
  children: PropTypes.node,
  canClose: PropTypes.bool,
};

export default Modal;
