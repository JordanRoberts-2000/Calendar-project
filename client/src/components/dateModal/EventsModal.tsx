import { forwardRef } from 'react';
import AddEventsSection from './AddEventSection';
import ViewEventsSection from './ViewEventsSection';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import useStore from '@/store';
import { Button } from '../ui/button';

type Props = React.DialogHTMLAttributes<HTMLDialogElement>;

const ViewDateModal = forwardRef<HTMLDialogElement, Props>(
  ({ ...rest }, ref) => {
    const eventTab = useStore((state) => state.eventTabs);
    return (
      <dialog
        ref={ref}
        {...rest}
        className="duration-500
          translate-y-full fixed inset-0 mb-0 h-[70vh] w-full max-w-full rounded-t-3xl px-8 pt-4 transition-[transform,display,overlay] allow-discrete z-20
          open:starting:translate-y-full open:translate-y-0"
        // backdrop:backdrop-blur-[2px] backdrop:bg-neutral-900/40
        // backdrop:transition-opacity backdrop:duration-300 backdrop:opacity-0 open:backdrop:opacity-100 open:backdrop:starting:opacity-0"
      >
        {eventTab === 'addEventForm' && (
          <Button
            className="size-fit p-2 bg-transparent m-2 hover:bg-white text-black absolute top-0 left-0 shadow-none"
            onClick={() =>
              useStore.setState(() => ({ eventTabs: 'viewEvents' }))
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </Button>
        )}
        <form method="dialog" className="absolute top-0 right-0">
          <Button className="size-fit p-2 bg-transparent m-2 text-black shadow-none hover:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </form>
        <p className="text-center text-lg font-bold absolute top-4 left-1/2 -translate-x-1/2">
          5th October
        </p>
        <Tabs value={eventTab} orientation="vertical" className="h-full">
          <TabsContent value="viewEvents" className="h-full">
            <ViewEventsSection />
          </TabsContent>
          <TabsContent value="addEventForm" className="h-full">
            <AddEventsSection />
          </TabsContent>
        </Tabs>
      </dialog>
    );
  }
);

export default ViewDateModal;
