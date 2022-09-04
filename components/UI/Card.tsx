import React from 'react'
interface CardProps {
  title: string;
  desc: string;
  path: string;
}

function Card({ title, desc, path }: CardProps) {
  return (
    <div className="card">
      <a href="/docs/basic-features/data-fetching/get-server-side-props.md">
        <b>{title}</b>
        <small>{desc}</small>
      </a>
    </div>
  )
}

export default Card