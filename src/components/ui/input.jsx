import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, icon, ...props }, ref) => {
  return (
    <div className="relative flex items-center">
      {icon && <span className="absolute left-3 text-gray-400">{icon}</span>}
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border border-gray-300 bg-gradient-to-r from-white to-gray-100 px-4 py-2 text-base placeholder-gray-600 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-in-out",
          icon ? "pl-12" : "", // Add left padding if there is an icon
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});

Input.displayName = "Input";

export { Input };
