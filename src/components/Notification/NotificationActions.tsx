import { ReactNode } from "react";

interface NotificationActionsProps {
  children: ReactNode
}

export function NotificationActions({ children }: NotificationActionsProps) {
  return (
    <div className="flex justify-between items-center px-4 w-full max-w-[94px]">
      {children}
    </div>
  );
}