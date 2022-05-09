import React from 'react'

export default function Component1({state, setState}) {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote1</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <div className="bg-purple-700 text-white px-5 my-5 py-2 rounded-lg">State: {state}</div>
    <button className="bg-red-700 text-white px-5 py-2 rounded-lg" onClick={()=>setState(0)}>Clear State</button>
  </div>
  )
}
