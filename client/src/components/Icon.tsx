type Icon = 'left-arrow' | 'close';

type Props = React.SVGAttributes<HTMLOrSVGElement> & {
  name: Icon;
};

const Icon = ({ name, ...rest }: Props) => {
  const getEventIcon = (name: Icon) => {
    switch (name) {
      case 'left-arrow':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            {...rest}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        );
      case 'close':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            {...rest}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        );
      default:
        return <div>invalid eventType</div>;
    }
  };
  const Icon = getEventIcon(name);
  return Icon;
};

export default Icon;
