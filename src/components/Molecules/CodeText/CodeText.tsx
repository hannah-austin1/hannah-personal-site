import clsx from "clsx";

interface ICodeTextProps {
  staticText: string;
  typedText: string;
}

const CodeText = ({ staticText, typedText }: ICodeTextProps) => {
  return (
    <h1
      className={clsx(
        "mb-1",
        "font-mono",
        "text-4xl",
        "text-gray-100",
        "md:text-6xl"
      )}
    >
      {staticText}
      <br className="block md:hidden" />
      <span
        className={clsx(
          "text-brand-accent",
          "inline-flex h-20",
          "animate-type",
          "overflow-x-hidden",
          "whitespace-nowrap",
          "pt-2"
        )}
      >
        {typedText}
      </span>
      <span
        className={clsx(
          "ml-2",
          "-mb-2",
          "box-border",
          "inline-block",
          "h-10",
          "w-1",
          "animate-cursor",
          "bg-white",
          "will-change-transform",
          "md:-mb-4",
          "md:h-16"
        )}
      ></span>
    </h1>
  );
};

export default CodeText;
