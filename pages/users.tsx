import React from "react";
export interface Props {
  id: number;
  name: string;
}
const Users: React.FC<Props> = ({ name, id }) => {
  return (
    <div className=" md:mr-4 pb-2 outline outline-[#042940] relative">
      <div className="bg-[#fff] flex justify-center items-center py-4 relative">
        <p>{name}</p>
      </div>
      <div className="px-4">
        <p className="text-lg text-black font-semibold mb-1">{name}</p>
        <div className="flex items-center justify-between">
          <p className=" w-8 h-8 bg-[#042940] mr-2 md:mr-0  text-white rounded mt-2 mb-2 flex items-center justify-center">
            20
          </p>
        </div>
      </div>
    </div>
  );
};

export default Users;
