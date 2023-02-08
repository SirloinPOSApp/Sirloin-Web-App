import React from "react";

export const SkeletonLoading = () => {
  return (
    <div className="flex flex-col text-center content-center justify-center items-center border rounded-2xl shadow-lg h-[28rem] gap-2 bg-white cursor-pointer">
      <div className="animate-pulse ">
        <div className="rounded-lg bg-slate-200 h-64 w-64"></div>
        <div className="flex-1 space-y-2 py-2">
          <div className="h-5 bg-slate-200 rounded"></div>
          <div className="h-5 bg-slate-200 rounded"></div>
          <div className="h-5 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};
