import DaysOffToggle from './DaysOffToggle';
import DaysOfWeek from './DaysOfWeek';

const Header = ({}) => {
  return (
    <header className="flex flex-col py-4 gap-2 border-b border-b-neutral-200 shadow-sm">
      <div className="p-4 flex relative">
        <DaysOffToggle />
        <h1 className="text-xl font-semibold absolute left-1/2 pb-4 top-1/2 -translate-x-1/2 font-serif -translate-y-1/2">
          Sezzi Calendar
        </h1>
        {/* <button className="border-neutral-900 border-2 font-bold px-3 rounded-md ml-auto">
        sign in
      </button> */}
      </div>
      <DaysOfWeek />
    </header>
  );
};

export default Header;
