import React from "react";
// import PrizeContainer from "./PrizeContainer";
// import Prize from "./Prize";
// import DrawButton from "./DrawButton";

const prizes = [
  { name: "1等奖", description: "獎品" },
  { name: "2等奖", description: "獎品" },
  { name: "3等奖", description: "獎品" },
  { name: "4等奖", description: "獎品" },
  { name: "5等奖", description: "獎品" },
  { name: "6等奖", description: "獎品" },
];

export default function Turntable() {
  const handleDraw = () => {
    alert("抽獎");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[300px] h-[300px] bg-red-500 rounded-full flex justify-center items-center relative">
        <div className="w-[280px] h-[280px] rounded-full absolute overflow-hidden">
          {prizes.map((_, index) => (
            <PrizeContainer key={index} index={index} />
          ))}
        </div>
        {prizes.map((prize, index) => (
          <Prize
            key={index}
            index={index}
            name={prize.name}
            description={prize.description}
          />
        ))}
        <DrawButton onClick={handleDraw} />
      </div>
    </div>
  );
}

interface PrizeContainerProps {
  index: number;
}

function PrizeContainer({ index }: PrizeContainerProps) {
  return (
    <div
      className="w-[280px] h-[280px] bg-orange-200 absolute left-1/2 -top-1/2 border border-white origin-bottom-left"
      style={{ transform: `rotate(${index * 60}deg) skewY(-30deg)` }}
    ></div>
  );
}

interface PrizeProps {
  index: number;
  name: string;
  description: string;
}

function Prize({ index, name, description }: PrizeProps) {
  return (
    <div
      className="w-[140px] h-[140px] absolute left-1/2 top-0 origin-bottom-left"
      style={{ transform: `rotate(${index * 60}deg)` }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center transform rotate-[30deg] -translate-x-[15%] translate-y-[10%]">
        <div>{description}</div>
        <p>{name}</p>
      </div>
    </div>
  );
}

interface DrawButtonProps {
  onClick: () => void;
}

function DrawButton({ onClick }: DrawButtonProps) {
  return (
    <div
      className="w-20 h-20 rounded-full bg-red-500 text-white text-3xl leading-[80px] text-center absolute cursor-pointer"
      onClick={onClick}
    >
      抽
    </div>
  );
}
