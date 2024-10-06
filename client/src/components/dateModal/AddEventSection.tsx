import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import EventIcon, { EventCategory } from '../EventIcon';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import SelectIconPopover from './SelectIconPopover';
import useStore from '@/store';
import { useState } from 'react';

const addNotesSection = ({}) => {
  const [open, setOpen] = useState(false);
  const [eventIcon, setEventIcon] = useState<EventCategory>('default');
  return (
    <div className="flex flex-col gap-4 pt-8">
      <div className="flex justify-between">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger className="bg-white hover:bg-white shadow h-fit py-1 px-3 items-center flex rounded-lg">
            <span className="text-black mr-4">icon:</span>
            <EventIcon eventType={eventIcon} className="size-4" />
          </PopoverTrigger>
          <PopoverContent className="ml-2 w-fit">
            <SelectIconPopover setOpen={setOpen} setEventIcon={setEventIcon} />
          </PopoverContent>
        </Popover>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-8">
            <Label htmlFor="shared">Shared:</Label>
            <Switch defaultChecked={true} id="shared" />
          </div>
          <div className="flex items-center justify-between gap-8">
            <Label htmlFor="notify">Alert:</Label>
            <Switch id="notify" />
          </div>
        </div>
      </div>
      <div className="grid w-full gap-2 pt-4">
        <Label htmlFor="message">Your message:</Label>
        <Textarea
          placeholder="Type your message here."
          id="message"
          className="h-[100px] text-base"
        />
      </div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select message" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Go to the gym</SelectItem>
          <SelectItem value="dark">Go to morrisons</SelectItem>
        </SelectContent>
      </Select>
      <Button className="h-12 text-lg">Submit</Button>
    </div>
  );
};

export default addNotesSection;
