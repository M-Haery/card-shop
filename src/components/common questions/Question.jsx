import React, { useState } from "react";
import useToggle from "../../hooks/useToggle";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export default function Question(props) {
  const [isShow ,clickHandler] = useToggle()

  return (
    <>

        <div className=" text-center shadow-xl hover:shadow-2xl mt-5 p-6 rounded-xl bg-white hover:dark:bg-slate-800 dark:bg-slate-700 transition-all duration-100 dark:text-white cursor-pointer" onClick={clickHandler}>
          <div
            className="flex justify-between "
            
          >
            <h1>{props.question}</h1>
            <QuestionMarkIcon />
          </div>
          {isShow && <h1 className=" mt-7 text-justify text-gray-400">{props.answer}</h1>}
        </div>
    </>
  );
}
