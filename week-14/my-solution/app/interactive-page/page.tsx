"use client";

import { useState } from "react";

export default function InteractivePage() {
    const [count, setCount] = useState<number>(0);

  return (
    <div className="flex justify-center">
      <div>
        <h1 className="font-bold">Welcome to Interactive Page</h1>
        <div className="w-[700px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
          quibusdam fugit, sint eaque ratione similique adipisci quasi nisi a
          eos, tempora eius! Ipsum architecto magni animi earum non, provident
          ullam?
        </div>
        <button className="border-2 border-black rounded-lg p-4" onClick={()=>setCount(count + 1)}>Count is {count}</button>
      </div>
    </div>
  );
}
