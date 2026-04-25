import type { ReactNode } from "react";

interface DialogProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={() => onOpenChange?.(false)} // click outside closes
    >
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export function DialogContent({ children, className }: any) {
  return <div className={`bg-white p-6 rounded-lg ${className}`}>{children}</div>;
}

export function DialogHeader({ children }: any) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }: any) {
  return <h2 className="text-lg font-bold">{children}</h2>;
}

export function DialogDescription({ children }: any) {
  return <p className="text-sm text-gray-500">{children}</p>;
}