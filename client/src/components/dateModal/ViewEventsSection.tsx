import Events from './Events';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import useStore from '@/store';

const viewNotesSection = ({}) => {
  return (
    <Tabs defaultValue="shared" className="flex flex-col gap-4 h-full pb-12">
      <TabsList className="w-fit">
        <TabsTrigger value="shared">Shared events</TabsTrigger>
        <TabsTrigger value="private">Private events</TabsTrigger>
      </TabsList>
      <div className="pb-2 text-sm text-neutral-800 font-bold">8 Events</div>
      <div className="flex-1 h-full overflow-hidden">
        <TabsContent
          value="shared"
          className="h-full max-h-full overflow-y-auto"
        >
          <Events />
        </TabsContent>

        <TabsContent
          value="private"
          className="h-full max-h-full overflow-y-auto"
        >
          <Events />
        </TabsContent>
      </div>

      <Button
        className="h-12 text-lg relative mt-auto"
        onClick={() =>
          useStore.setState(() => ({ eventMainTab: 'addEventForm' }))
        }
      >
        Add event
      </Button>
    </Tabs>
  );
};

export default viewNotesSection;
