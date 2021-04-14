import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One push"]);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr className="mt-2" />
      <ul className="flex flex-col items-start">
        {categories.map((category) => <GifGrid category={category} key={category}/>)}
      </ul>
    </div>
  );
};
