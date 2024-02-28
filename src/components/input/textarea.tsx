"use client";

export const Textarea = ({
  name,
  value,
  onChange,
  placeholder,
  label,
}: {
  name: string;
  value: string;
  onChange: Function;
  placeholder: string;
  label?: string;
}) => {
  return (
    <div className="mt-3 flex flex-col w-full max-w-[30rem] ">
      <label
        htmlFor={name + "ID" + name.length}
        className="ml-2 py-2 font-semibold text-theme-text-main"
      >
        {label || name}
      </label>
      <textarea
        className={
          " font-medium p-2 w-full max-w-[30rem] h-40 text-base rounded outline-none bg-theme-text-alt border-theme-text-alt/50 border-2 " +
          "border-theme-grey hover:border-theme-accent focus:border-theme-accent"
        }
        id={name + "ID" + name.length}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
