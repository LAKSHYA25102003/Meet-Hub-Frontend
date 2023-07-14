import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { toast } from "react-toastify";

function MeetingDetailCard({ isOpen, openModal, closeModal }) {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        toast.success("Link is copied");
      })
      .catch((error) => {
        toast.error("Error copying text");
        console.error('Error copying text:', error);
      });
  };
  return (
    <div>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2  font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-lg"
        >
          Meeting Details
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed  inset-0 overflow-y-auto">
            <div className="flex min-h-fit absolute bottom-3 left-3 items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full relative max-w-md transform overflow-hidden rounded-2xl bg-white p-4 px-6 text-left align-middle shadow-xl transition-all">
                  <div className="">
                    <button
                      type="button"
                      className="inline-flex absolute right-2 top-3 justify-center rounded-md border border-transparent   text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      <CloseIcon />
                    </button>
                    <div>
                      <div className="text-lg font-medium">Joining Info</div>
                      <div className="text-gray-600">
                        {window.location.href}
                      </div>
                      <div onClick={()=>{handleCopy(window.location.href)}} className=" text-brand flex items-center p-3 gap-3 hover:bg-slate-100 rounded-md mt-2 cursor-pointer">
                        <ContentCopyIcon />
                        <span>Copy joining info</span>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default MeetingDetailCard;
