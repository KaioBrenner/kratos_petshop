import React, { useEffect, useState } from "react";

const ProgressBar = ({ progress, date }) => {
  const [progressPer, setProgressPer] = useState();
  const [valueAbove, setValueAbove] = useState();



  useEffect(() => {
    setProgressPer(progress);

    if (progress > 100) {
      const difference = progress - 100;

      setProgressPer(100);
      setValueAbove(difference);
    }
  }, []);

  return (
    <div className="bg-gray-200 flex flex-col items-start h-[14.28%] p-2">
      <div className="flex gap-2 text-sm">
        <p>{date}</p>
        <p className="">R$ 3000</p>
      </div>
      <div
        className="h-6 w-full bg-white rounded-lg relative"
        title={progress}
      >
        <div
          className={`h-full rounded bg-green-500`}
          style={{ width: `${progressPer}%` }}
        ></div>

        {valueAbove && (
          <div
            className={`h-full rounded bg-blue-500 absolute top-0`}
            style={{ width: `${valueAbove}%` }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
