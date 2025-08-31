import { ReactElement } from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";

export interface Card {
  heading: string;
  content: string;
  icon?: ReactElement;
}
export const cards1: Card[] = [
  {
    heading: "Prompt Service",
    content: "We strive for quick turnaround without compromising on quality.",
    icon: <FaScrewdriverWrench />,
  },
  {
    heading: "Transparent Pricing",
    content:
      "You'll always know what you're paying for with competitive pricing.",
    icon: <FaHandHoldingUsd />,
  },
];
export const cards2: Card[] = [
  {
    heading: "24+",
    content: "Years of experience",
  },
  {
    heading: "1.2k+",
    content: "Setisfied Customers",
  },
  {
    heading: "35",
    content: "Skilled Technicians",
  },
  {
    heading: "99%",
    content: "Positive Reviews",
  },
];
