import React from "react";

export default function Title({ title, isH1, Class }) {
  return (
    <>
     {
        isH1 ? 
        <h1 className={`text-4xl md:text-[45px] xl:text-[52px] 2xl:text-[64px] leading-[1.05] font-primary ${Class}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      :
      <h2 className={`text-4xl md:text-[45px] xl:text-[52px] 2xl:text-[64px] leading-[1.05] font-primary ${Class}`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
     }
    </>
   
  );
}