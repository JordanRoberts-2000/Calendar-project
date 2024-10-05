import useStore from '@/store';
import { Button } from '../ui/button';

const addNotesSection = ({}) => {
  return (
    <div>
      <Button
        onClick={() => useStore.setState(() => ({ eventTabs: 'viewEvents' }))}
      >
        Back
      </Button>
    </div>
  );
};

export default addNotesSection;
