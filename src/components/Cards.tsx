import { Card } from "@/data/card";

type CardsProps = {
  cardData: Card[];
  variant: "cards1" | "cards2";
};

function Cards({ cardData, variant }: CardsProps) {
  return (
    <div
      className={`${
        variant === "cards1"
          ? "flex md:flex-nowrap flex-wrap"
          : "grid grid-cols-2"
      }  gap-5 mt-5 `}
    >
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`p-5 flex flex-col gap-5 rounded-xl text-left
            ${
              variant === "cards1"
                ? "bg-white text-black"
                : "bg-gray-900 text-white"
            }`}
        >
          {variant === "cards1" && (
            <div className="text-red-600 text-2xl">{card.icon}</div>
          )}
          <div
            className={`${
              variant === "cards1" ? "" : "text-red-500 text-4xl"
            } text-2xl font-bold`}
          >
            {card.heading}
          </div>
          <div className="text-xs">{card.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
