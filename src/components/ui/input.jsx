import * as React from "react";
import EyeIcon from "../../assets/eye-icon.svg";
import EyeIconClosed from "../../assets/eye-icon-closed.svg";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const [isPasswordShown, setIsPasswordShown] = React.useState(false);
  console.log("isshown", isPasswordShown);

  React.useEffect(() => {
    if (isPasswordShown) {
      debugger;
      const allPasswords = document.querySelectorAll(".password-input");
      const currentPassword = allPasswords[props?.customKey ?? 0];
      currentPassword.focus();
    }
  }, [isPasswordShown]);

  return (
    <div className="relative">
      <input
        type={
          type === "password" ? (isPasswordShown ? "text" : "password") : type
        }
        className={cn(
          `${
            type === "password" ? "password-input" : ""
          } flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props}
      />
      {type === "password" ? (
        isPasswordShown ? (
          <img
            className="absolute right-[16px] top-[10px] cursor-pointer"
            src={EyeIcon}
            alt="password shown"
            onClick={() => {
              setIsPasswordShown(false);
            }}
            title="Hide Password"
          />
        ) : (
          <img
            className="absolute right-[16px] top-[10px] cursor-pointer"
            src={EyeIconClosed}
            alt="password hidden"
            onClick={() => {
              setIsPasswordShown(true);
            }}
            title="Show Password"
          />
        )
      ) : (
        ""
      )}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
