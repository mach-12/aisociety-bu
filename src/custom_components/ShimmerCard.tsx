import React from "react";

interface ShimmerButtonProps {
  text: string;
}

const ShimmerButton: React.FC<ShimmerButtonProps> = ({ text }) => {
  return (
    <button className="inline-flex h-9 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-bold text-slate-200 transition ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {text}
    </button>
  );
};

export default ShimmerButton;
