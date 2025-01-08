import { ReactNode } from "react";

interface NotificationRootProps {
  children: ReactNode
}

export function NotificationRoot({ children }: NotificationRootProps) {
  return (
    <div className="flex flex-row py-4 space-x-4">
      {children}
    </div>
  );
}
