import React from "react";

type BaseButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
};

type AnchorProps = BaseButtonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ButtonElementProps = BaseButtonProps & {
  href?: undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = AnchorProps | ButtonElementProps;

export default function Button(props: ButtonProps) {
  const base =
    "relative inline-block font-body text-lg md:text-2xl px-6 py-3 border-[3px] border-pencil cursor-pointer transition-all duration-100 select-none";

  const variants = {
    primary:
      "bg-white text-pencil shadow-[4px_4px_0px_0px_#2d2d2d] hover:bg-marker hover:text-white hover:shadow-[2px_2px_0px_0px_#2d2d2d] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
    secondary:
      "bg-erased text-pencil shadow-[4px_4px_0px_0px_#2d2d2d] hover:bg-pen hover:text-white hover:shadow-[2px_2px_0px_0px_#2d2d2d] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
  };

  const style = {
    borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
  };

  if (props.href !== undefined) {
    const { href, children, variant = "primary", className = "", ...rest } = props;
    return (
      <a
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
        style={style}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const { children, variant = "primary", className = "", ...rest } = props;
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
}
