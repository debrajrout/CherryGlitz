import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-size-200 bg-pos-0",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };

// Additional CSS (include this in your global CSS file or a relevant CSS/SCSS module)
<style jsx global>{`
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  .animate-pulse {
    animation: shimmer 1.5s infinite linear;
  }

  .bg-size-200 {
    background-size: 200% 100%;
  }

  .bg-pos-0 {
    background-position: 0 0;
  }
`}</style>
