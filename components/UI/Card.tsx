import React from 'react'
interface CardProps {
  title: string;
  desc: string;
  path: string;
}

function Card({ title, desc, path }: CardProps) {
  return (
    <div className="cursor-pointer shadow-md hover:shadow-lg py-5 px-8 border border-gray-200 rounded-md">
      <a href={path}>
        <div className="font-bold text-md">{title}</div>
        <div className="text-sm text-gray-500 mt-2 font-light">{desc}</div>
      </a>
    </div>
  )
}

export default Card