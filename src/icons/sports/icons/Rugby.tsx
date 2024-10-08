import { SportIconProps } from '../props';
import { getColor } from '../utils';

const Rugby = (props: Readonly<SportIconProps>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {props.children}
      <path
        d="M14.5 9.50002L9.50001 14.5M11.5 9.00002L15 12.5M9.00001 11.5L12.5 15M14.1035 2.36961C11.6512 2.71088 8.85733 3.82824 6.34285 6.34273C3.82831 8.85726 2.71095 11.6512 2.36971 14.1036M14.1035 2.36961C17.1682 1.94312 19.6994 2.72871 20.485 3.5143C21.2706 4.29995 22.0563 6.83141 21.6296 9.89635M14.1035 2.36961C14.695 6.24331 17.756 9.30457 21.6296 9.89635M21.6296 9.89635C21.2882 12.3485 20.1708 15.1422 17.6566 17.6564C15.1422 20.1708 12.3485 21.2881 9.89632 21.6295M9.89632 21.6295C6.83144 22.0561 4.30005 21.2705 3.51442 20.4849C2.72884 19.6993 1.94326 17.1682 2.36971 14.1036M9.89632 21.6295C9.3045 17.756 6.24332 14.6951 2.36971 14.1036"
        stroke={getColor(props.gradient)}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Rugby;
