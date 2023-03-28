import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col">
      <div className="pb-2 text-center font-inter">
        <h2 className="text-4xl font-bold">CONOCIMIENTOS</h2>
      </div>
      <div className="grid items-center grid-cols-4 gap-4 font-inter">
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          C++
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          PHP
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          POSTGRESQL
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          HTML
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          CSS
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          PYTHON
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          TYPESCRIPT
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          ANGULAR
        </div>
      </div>
    </div>
  );
};

export default Skills;
