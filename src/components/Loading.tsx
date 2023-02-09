export const SkeletonLoading = () => {
  return (
    <div className="flex flex-col text-center   items-center border rounded-2xl shadow-lg h-[28rem] gap-2 pt-5 bg-white ">
      <div className="animate-pulse ">
        <div className="rounded-lg bg-slate-200 h-48 w-48"></div>
        <div className="flex-1 space-y-2 py-2">
          <div className="h-5 bg-slate-200 rounded"></div>
          <div className="h-5 bg-slate-200 rounded"></div>
          <div className="h-5 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonLoadingEtalase = () => {
  return (
    <div className="card shadow-lg bg-white">
      <div className="animate-pulse">
        <div className="rounded-lg bg-slate-200 h-96 w-56 m-2"></div>
        <div className=" flex flex-col card-normal space-y-2 p-2">
          <div className="h-5 w-56 bg-slate-200 rounded"></div>
          <div className="h-5 w-56 bg-slate-200 rounded"></div>
          <div className="h-5 w-56 bg-slate-200 rounded"></div>
        </div>
        <div className="card-actions px-2 justify-end">
          <div className="h-5 w-36 bg-slate-200 rounded "></div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonLoadingTabel = () => {
  return (
    <tr className="animate-pulse p-2">
      <td>
        <div className="h-5 w-48 bg-slate-200 rounded "></div>
      </td>
      <td>
        <div className="h-5 w-48 bg-slate-200 rounded "></div>
      </td>
      <td>
        <div className="h-5 w-48 bg-slate-200 rounded "></div>
      </td>
      <td>
        <div className="h-5 w-48 bg-slate-200 rounded "></div>
      </td>
      <td>
        <div className="h-5 w-48 bg-slate-200 rounded "></div>
      </td>
      <td className="flex col-span-2 space-x-2">
        <div className="h-5 w-12 bg-slate-200 rounded "></div>
        <div className="h-5 w-12 bg-slate-200 rounded "></div>
      </td>
    </tr>
  );
};
