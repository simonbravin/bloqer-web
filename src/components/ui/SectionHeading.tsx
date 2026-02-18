import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider",
            dark
              ? "bg-white/10 text-blueprint-200"
              : "bg-primary-50 text-primary-600 ring-1 ring-primary-100"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight",
          dark ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            dark ? "text-gray-300" : "text-gray-500"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
