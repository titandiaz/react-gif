import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const {data:gifs, loading} = useFetchGifs(category)
  return (
    <div className="m-auto mt-3">
      <h3 className="font-bold text-md">{category}</h3>

      {loading && <p className="animate-pulse font-bold text-lg text-center py-6">Loading...</p>}
      <div className="grid grid-flow-col grid-cols-1 md:grid-cols-5 grid-rows-2 gap-4">
        {gifs.map((gif) => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
      </div>
    </div>
  );
};
