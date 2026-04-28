import NumerologyResultCard from "./NumerologyResultCard";

export default function NumerologyToolSection({
  title,
  fields = [],
  buttonText,
  resultItems = [],
  compact = false,
  bgImage,
}) {
  return (
    <section
      className={`relative overflow-hidden bg-center bg-cover bg-no-repeat py-[54px] ${
        compact ? "py-[34px]" : ""
      }`}
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}
    >
      <div className="absolute inset-0 z-1 bg-black/50" />

      <div className="relative z-2 mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-7 px-6 md:grid-cols-[minmax(0,1fr)_330px] md:gap-12">
        <div className="max-w-full md:max-w-[690px]">
          <h2 className="mb-[18px] text-[28px] font-extrabold leading-[1.1] text-white">
            {title}
          </h2>

          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <div
              className={`grid gap-3 ${
                fields.length <= 2
                  ? "grid-cols-2"
                  : fields.length <= 4
                  ? "grid-cols-3"
                  : "grid-cols-3"
              } max-[991px]:grid-cols-1`}
            >
              {fields.map((field, index) => {
                if (field.type === "select") {
                  return (
                    <div className="flex flex-col" key={index}>
                      <label className="mb-[6px] text-[12px] font-medium leading-[1.2] text-white">
                        {field.label}
                      </label>
                      <select
                        defaultValue=""
                        className="h-9 w-full rounded bg-[#efefef] px-3 text-[11px] text-[#111] outline-none ring-1 ring-white/10"
                      >
                        <option value="" disabled>
                          {field.placeholder}
                        </option>
                        {(field.options || []).map((option) => (
                          <option key={option} className="text-[#111]">
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                }

                return (
                  <div className="flex flex-col" key={index}>
                    <label className="mb-[6px] text-[12px] font-medium leading-[1.2] text-white">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="h-9 w-full rounded bg-[#efefef] px-3 text-[11px] text-[#111] outline-none ring-1 ring-white/10 placeholder:text-[#9f9f9f]"
                    />
                  </div>
                );
              })}
            </div>

            <button
              type="submit"
              className="mt-4 h-[42px] w-full max-w-[290px] cursor-pointer rounded-[6px] bg-primary text-[18px] font-extrabold text-black max-[991px]:max-w-full"
            >
              {buttonText}
            </button>
          </form>
        </div>

        <div className="flex justify-start md:justify-end">
          <NumerologyResultCard items={resultItems} />
        </div>
      </div>
    </section>
  );
}