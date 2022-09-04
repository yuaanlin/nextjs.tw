/* eslint-disable max-len */
import React from 'react';

const CorrectIcon = ({
  color = '#0070f3',
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" {...props}>
      <g fill={color}>
        <path
          fill={color}
          d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M7,11.4L3.6,8L5,6.6l2,2l4-4L12.4,6L7,11.4z"
        ></path>
      </g>
    </svg>
  );
};

export default CorrectIcon;
