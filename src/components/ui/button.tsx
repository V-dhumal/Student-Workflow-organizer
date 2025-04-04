import * as React from "react";

export function Button({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
