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
import React, { useRef, useState } from 'react';
import useStore from '@/store';

const addNotesSection = ({}) => {
  const [open, setOpen] = useState(false);
  const [eventIcon, setEventIcon] = useState<EventCategory>('default');
  const selectedDate = useStore((state) => state.selectedDate);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      category: eventIcon,
      message: textAreaRef.current!.value,
      date: selectedDate!,
    };
    const res = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      //close , alert, undisable button ect
      console.log('success');
    } else {
      console.log('fail!');
    }
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col gap-4 pt-8"
    >
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
          ref={textAreaRef}
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
    </form>
  );
};

export default addNotesSection;
