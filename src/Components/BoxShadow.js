import React from "react";

const BoxShadow = () => {
  return (
    <>
      {/* <div className=" border-black px-32 py-20 flex justify-between flex-wrap gap-28">
        <div className=" border  w-56 h-56 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"></div>
        <div className="border w-72 h-72 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"></div>
        <div className="border w-72 h-72 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"></div>
        <div className="border w-72 h-72 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"></div>
        <div className="border w-72 h-72 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"></div>
        <div className="border w-72 h-72 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"></div>
        <div className="border w-72 h-72 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"></div>
        <div className="border w-72 h-72 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]"></div>
        <div className="border w-72 h-72 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"></div>
        <div className="border w-72 h-72 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"></div>
        <div className="border w-72 h-72 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
        <div className="border w-72 h-72 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"></div>
        <div className="border w-72 h-72 shadow-[inset_-12px_-8px_40px_#46464620]"></div>
        <div className="border w-72 h-72 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]"></div>
        <div className="border w-72 h-72 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"></div>
        <div className="border w-72 h-72 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"></div>
        <div className="border w-72 h-72 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"></div>
        <div className="border w-72 h-72 shadow-2xl shadow-blue-500/20"></div>
        <div className="border w-72 h-72 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"></div>
        <div className="border w-72 h-72 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"></div>
        <div className="border w-72 h-72 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"></div>
        <div className="border w-72 h-72 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"></div>
        <div className="border w-72 h-72 shadow-[5px_5px_0px_0px_rgba(109,40,217)]"></div>
        <div className="border w-72 h-72 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"></div>
        <div className="border w-72 h-72 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"></div>
        <div className="border w-72 h-72 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"></div>
      </div> */}
      {/* <div>
        <div className=" border-black  px-32 py-20 flex justify-between flex-wrap gap-28">
          <h1>Basic Drop Shadow</h1>
          <div className="border-black  flex justify-between flex-wrap gap-28">
            <div className=" border w-64 h-64 shadow-[0px_8px_10px_-5px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(25,28,33,0.2),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex justify-center items-center">
              Strong Outline Shadow
            </div>
            <div className=" border w-64 h-64 shadow-[0px_4px_5px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(255,0,0,0.15),0px_0px_0px_1px_rgba(0,0,0,0.1)] flex justify-center items-center">
              Layered Shadow with Color Tint
            </div>
            <div className=" border w-64 h-64 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.1)] flex justify-center items-center">
              {" "}
              Sharp and Subtle Shadow
            </div>
            <div className=" border w-64 h-64 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04),0px_0px_0px_1px_rgba(0,0,0,0.1)] flex justify-center items-center">
              Wide and Light Shadow
            </div>
            <div className=" border w-64 h-64 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] flex justify-center items-center">
              Soft and Deep Shadow
            </div>
            <div className=" border w-64 h-64 shadow-[0px_12px_17px_-4px_rgba(0,0,0,0.25),0px_6px_7px_-4px_rgba(0,0,0,0.15),0px_3px_4px_-3px_rgba(0,0,0,0.1),0px_0px_0px_1px_rgba(0,0,0,0.08)] flex justify-center items-center">
              Complex Multi-Layered Shadow
            </div>
          </div>
        </div>

        <div className=" border-black  px-32 py-20 flex justify-between flex-wrap gap-28">
          <h1>soft shadow</h1>
          <div className="border-black  flex justify-between flex-wrap gap-28">
            <div className="border w-64 h-64 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.05)] flex justify-center items-center">
              Soft Layered Shadow
            </div>
            <div className="border w-64 h-64 shadow-[0px_6px_8px_-2px_rgba(0,0,0,0.1),0px_3px_6px_-1px_rgba(0,0,0,0.05),0px_1px_3px_0px_rgba(0,0,0,0.02)] flex justify-center items-center">
              Gentle Gradient Shadow
            </div>

            <div className="border w-64 h-64 shadow-[0px_5px_10px_-3px_rgba(0,0,0,0.15),0px_2px_4px_0px_rgba(255,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-center items-center">
              Diffused Shadow with Color Tint
            </div>

            <div className="border w-64 h-64 shadow-[0px_8px_12px_-4px_rgba(0,0,0,0.1),0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_2px_4px_0px_rgba(0,0,0,0.02)] flex justify-center items-center">
              {" "}
              Wide and Soft Shadow
            </div>

            <div className="border w-64 h-64 shadow-[0px_10px_15px_-5px_rgba(0,0,0,0.1),0px_5px_8px_-3px_rgba(0,0,0,0.05),0px_2px_3px_0px_rgba(0,0,0,0.03)] flex justify-center items-center">
              Light and Airy Shadow
            </div>

            <div className="border w-64 h-64 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.05),0px_1px_3px_-1px_rgba(0,0,0,0.02),0px_0px_1px_0px_rgba(0,0,0,0.01)] flex justify-center items-center">
              Subtle Multi-Layer Shadow
            </div>
          </div>
        </div>

        <div className=" border-black  px-32 py-20 flex justify-between flex-wrap gap-28">
          <h1>Hard shadow</h1>
          <div className="border-black  flex justify-between flex-wrap gap-28">
            <div className="border w-64 h-64 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_2px_0px_rgba(0,0,0,0.15)] flex justify-center items-center">
              Sharp and Intense Shadow
            </div>

            <div className="border w-64 h-64 shadow-[0px_6px_6px_0px_rgba(0,0,0,0.3),0px_3px_3px_0px_rgba(0,0,0,0.2)] flex justify-center items-center">
              Strong Outline Shadow
            </div>

            <div className="border w-64 h-64 shadow-[0px_8px_8px_0px_rgba(0,0,0,0.35),0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center">
              Deep and Bold Shadow
            </div>

            <div className="border w-64 h-64 shadow-[0px_10px_10px_0px_rgba(0,0,0,0.4),0px_5px_5px_0px_rgba(0,0,0,0.3)] flex justify-center items-center">
              Crisp and Defined Shadow
            </div>

            <div className="border w-64 h-64 shadow-[0px_12px_12px_0px_rgba(0,0,0,0.45),0px_6px_6px_0px_rgba(0,0,0,0.35),0px_3px_3px_0px_rgba(0,0,0,0.25)] flex justify-center items-center">
              Hard Multi-Layered Shadow
            </div>

            <div className="border w-64 h-64 shadow-[0px_14px_14px_0px_rgba(0,0,0,0.5),0px_7px_7px_0px_rgba(0,0,0,0.4),0px_3px_3px_0px_rgba(0,0,0,0.3)] flex justify-center items-center">
              Dramatic and Angular Shadow
            </div>
          </div>
        </div>

        

        
      </div> */}
    </>
  );
};

export default BoxShadow;
