import { twMerge } from "tailwind-merge";

interface Props {
  amount: number | undefined;
  className?: string;
}

const PriceFormatter = ({ amount, className }: Props) => {
  const formattedPrice = new Number(amount).toLocaleString("en-LK", {
    currency: "LKR",
    style: "currency",
    minimumFractionDigits: 0,
  });
  return (
    <span
      className={twMerge("text-sm font-black tracking-widest text-white/90", className)}
    >
      {formattedPrice}
    </span>
  );
};

export default PriceFormatter;
