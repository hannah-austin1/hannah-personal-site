import clsx from "clsx";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../../../types";

interface IInputProps {
  id: keyof FormValues;
  label: string;
  errors: boolean;
  errorMessage?: string;
  type?: "input" | "textarea";
  register: UseFormRegister<FormValues>;
}

const Input = ({
  id,
  label,
  errors,
  errorMessage,
  type = "input",
  register,
  ...props
}: IInputProps) => {
  return (
    <div
      className={clsx(
        "flex",
        "flex-col",
        { "h-20": type === "input" },
        { "h-24": type === "textarea" },
        "w-full"
      )}
    >
      <div className={clsx("flex", "justify-between", "h-full")}>
        <label className={clsx("font-bold", "md:text-left")}>{label}</label>
        <div className={clsx("flex", "flex-col", "w-3/4")}>
          {type === "input" ? (
            <input
              type="text"
              {...register(id)}
              {...props}
              className={clsx("h-1/2", "w-full", "rounded-md", {
                ["border-2 border-red-500"]: errors,
              })}
            />
          ) : (
            <textarea
              className={clsx("h-full", "rounded-md", {
                ["border-2 border-red-500"]: errors,
              })}
              {...register(id)}
            />
          )}
          <span
            className={clsx({ visible: errors }, "text-red-500")}
            role="alert"
          >
            {errorMessage}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Input;
