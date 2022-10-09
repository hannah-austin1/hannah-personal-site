import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import clsx from "clsx";
import { Input } from "../components";
import { FormValues } from "../types";

const Contact: NextPage = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    message: Yup.string().required("Message is required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "all",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(JSON.stringify(data, null, 2));
  };
  return (
    <>
      <h1>Contact Me</h1>
      <div
        className={clsx(
          "mt-10",
          "w-full",
          "max-w-xl",
          "py-10",
          "px-10",
          "flex",
          "justify-center"
        )}
      >
        <form
          className={clsx("w-full", "h-max-content", "flex", "flex-wrap")}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            id="fullName"
            label="Full Name"
            errors={!!errors.fullName}
            errorMessage={errors.fullName?.message}
            register={register}
          />
          <Input
            id="email"
            label="Email"
            errors={!!errors.email}
            errorMessage={errors.email?.message}
            register={register}
          />
          <Input
            id="message"
            label="Message"
            type="textarea"
            errors={!!errors.message}
            errorMessage={errors.message?.message}
            register={register}
          />
          <button type="submit" className={clsx("btn", "btn-primary")}>
            Send
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className={clsx("btn", "btn-warning", "float-right")}
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
