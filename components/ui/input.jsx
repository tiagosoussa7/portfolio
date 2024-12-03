import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex w-full h-9 rounded-[6px] bg-transparent border-2 border-accent-hover hover:border-accent px-3 ring-offset-accent placeholder:text-accent-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-accent-hover dark:focus-visible:ring-accent-hover",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

//flex h-10 w-full rounded-md border border-primary bg-primary px-3 py-2 text-base ring-primary -0 file:bg-transparent file:text-sm file:font-medium file:text-primary placeholder:text-accent-hover/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm 0

Input.displayName = "Input";

export { Input };
