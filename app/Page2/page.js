"use client";

import { useState } from "react";

function Satu({ nama, children, className }) {
  return (
    <div className={`text-[20px] font bold ${className}`}>
      Halo {nama} {children}
    </div>
  );
}

const UseState = () => {
  const [angka, setAngka] = useState(1);
  const tanganiklik = () => {
    setAngka(1);
  };
  const handleclick = () => {
    setAngka(angka * 2);
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleclick}
        className="bg-[pink] hover:bg-[purple] text-[white] p-2 rounded-[10px]"
      >
        Click here
      </button>
      <div className="p-1"></div>
      <button
        type="button"
        onClick={tanganiklik}
        className="bg-[pink] hover:bg-[purple] text-[white] p-2 rounded-[10px]"
      >
        Reset
      </button>
      <h1>Angka saat ini: {angka}</h1>
    </div>
  );
};

export default function Page() {
  return <UseState />;
}

// export default function Page() {
//   const Baris = ["Akmal", "Nasya", "Izzan", "Muhammad"];
//   return (
//     <div className="bg-[pink] w-full h-screen">
//       {Baris.map(function (value, index) {
//         return (
//           <Satu key={JSON.stringify(value, index)} nama={value}>
//             {index}
//           </Satu>
//         );
//       })}

//       {/*tanpa map*/}
//       {/* <Satu nama="Akmal" />
//       <Satu nama="Nasya" />
//       <Satu nama="Izzan" />
//       <Satu nama="Muhammad" className={"text-[red]"}>
//         Alif
//       </Satu> */}
//     </div>
//   );
// }
