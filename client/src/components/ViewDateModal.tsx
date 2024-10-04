import { forwardRef } from 'react';
import DateNotes from './DateNotes';

type Props = React.DialogHTMLAttributes<HTMLDialogElement>;

const ViewDateModal = forwardRef<HTMLDialogElement, Props>(
  ({ ...rest }, ref) => {
    return (
      <dialog
        id="egg"
        ref={ref}
        {...rest}
        className="w-full mb-0 h-[60vh] max-w-full rounded-t-3xl shadow-lg p-8 duration-300
          translate-y-full transition-[transform,display,overlay] allow-discrete
          open:starting:translate-y-full open:translate-y-0 
          backdrop:backdrop-blur-[2px] backdrop:bg-neutral-900/40 
          backdrop:transition-opacity backdrop:duration-300 backdrop:opacity-0 open:backdrop:opacity-100 open:backdrop:starting:opacity-0"
      >
        <form method="dialog" className="absolute top-0 right-0">
          <button className="size-6 m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </form>
        <div className="flex flex-col gap-4 h-full">
          <DateNotes />
          <div>
            <button className="bg-red-500 text-white w-full py-2 rounded-md font-bold text-xl">
              Add Event
            </button>
          </div>
        </div>
      </dialog>
    );
  }
);

export default ViewDateModal;
