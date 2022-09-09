import React from 'react';

const IncorrectIcon = ({
  color = '#ee0000',
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <g fill={color}>
        <path
          fill={color}
          // eslint-disable-next-line max-len
          d="M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0Zm4.95,15.536L15.536,16.95,12,13.414,8.464,16.95,7.05,15.536,10.586,12,7.05,8.464,8.464,7.05,12,10.586,15.536,7.05,16.95,8.464,13.414,12Z"
        ></path>
      </g>
    </svg>
  );
};

export default IncorrectIcon;
