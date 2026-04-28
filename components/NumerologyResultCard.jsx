export default function NumerologyResultCard({
  items = [],
  buttonText = "Continue",
}) {
  return (
    <div className="w-full max-w-[330px] overflow-hidden rounded-[16px] bg-[#f3f3f3] shadow-[0_12px_26px_rgba(0,0,0,0.18)]">
      <div className="flex h-[52px] items-center justify-center bg-primary text-[18px] font-extrabold text-black">
        Result
      </div>

      <div className="p-[22px_20px_20px]">
        <div className="min-h-[130px]">
          {items.map((item, index) => (
            <p
              key={index}
              className="mb-[6px] text-[17px] leading-[1.55] text-[#111]"
            >
              <strong className="font-extrabold">{item.label}</strong>
              {item.value ? ` ${item.value}` : ""}
            </p>
          ))}
        </div>

        <button className="mt-[18px] h-[46px] w-full cursor-pointer rounded-[6px] bg-primary text-[18px] font-extrabold text-black">
          {buttonText}
        </button>
      </div>
    </div>
  );
}