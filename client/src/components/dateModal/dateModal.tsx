import { forwardRef } from 'react';
import AddNotesSection from './addNotesSection';
import ViewNotesSection from './viewNotesSection';

type Props = React.DialogHTMLAttributes<HTMLDialogElement> & {
  setAddingMode: React.Dispatch<React.SetStateAction<boolean>>;
  addingMode: boolean;
};

const ViewDateModal = forwardRef<HTMLDialogElement, Props>(
  ({ setAddingMode, addingMode, ...rest }, ref) => {
    return (
      <dialog
        ref={ref}
        {...rest}
        className="duration-500
          translate-y-full fixed inset-0 mb-0 h-[50vh] w-full max-w-full rounded-t-3xl p-8 transition-[transform,display,overlay] allow-discrete z-50
          open:starting:translate-y-full open:translate-y-0 backdrop:bg-none "
        // backdrop:backdrop-blur-[2px] backdrop:bg-neutral-900/40
        // backdrop:transition-opacity backdrop:duration-300 backdrop:opacity-0 open:backdrop:opacity-100 open:backdrop:starting:opacity-0"
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
        {addingMode ? (
          <AddNotesSection setAddingMode={setAddingMode} />
        ) : (
          <ViewNotesSection setAddingMode={setAddingMode} />
        )}
      </dialog>
    );
  }
);

export default ViewDateModal;
