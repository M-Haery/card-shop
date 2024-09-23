import React, { useState } from "react";
import Question from "./Question";
import useFetch from "../../hooks/useFetch";

export default function CommonQuestions() {
  const [datas] = useFetch("http://localhost:3000/questions");

  return (
    <div className="bg-[#f5f5f5] dark:bg-slate-900 pb-7">
      <h1 className="text-center text-3xl pt-20 dark:text-white">
        سوالات متداول
      </h1>
      <div className=" mt-10 m-auto  w-[90%] md:w-[60%] lg:w-[40%]">
      {datas.map((question) => (
        

        <Question key={question.id} {...question} />
        
      ))}
      
      </div>
    </div>
  );
}
