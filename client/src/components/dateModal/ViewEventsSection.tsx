import Events from './Events';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import useStore from '@/store';

const viewNotesSection = ({}) => {
  return (
    <Tabs defaultValue="shared" className="flex flex-col gap-4 h-full py-12">
      <TabsList className="w-fit">
        <TabsTrigger value="shared">Shared events</TabsTrigger>
        <TabsTrigger value="private">Private events</TabsTrigger>
      </TabsList>
      <div className="flex-1 shrink-0 overflow-y-auto">
        <TabsContent value="shared">
          <Events />
        </TabsContent>
        <TabsContent value="private">
          Private notes <Events />
        </TabsContent>
      </div>
      <Button
        className="h-12 text-lg relative mt-auto"
        onClick={() => useStore.setState(() => ({ eventTabs: 'addEventForm' }))}
      >
        Add event
      </Button>
    </Tabs>
  );
};

export default viewNotesSection;
