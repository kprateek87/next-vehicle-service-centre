"use client";
type btntype = {
  type: number;
  text: string;
  click: ()=>void | Promise<void>;
};

function Button({ type, text, click }: btntype) {
  return (
    <button
      onClick={click}
      className={`border-2 border-blue-700 rounded-md p-3 text-lg font-semibold cursor-pointer 
         transition-colors duration-300 ease-in-out ${
        type
          ? "hover:bg-white hover:text-blue-700 bg-blue-700 text-white"
          : "bg-white text-blue-700 hover:bg-blue-700 hover:text-white"
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
