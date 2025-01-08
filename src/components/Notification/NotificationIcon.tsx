import { ElementType } from "react";

interface NotificationIconProps {
  icon: ElementType
}

export function NotificationIcon({ icon: Icon }: NotificationIconProps) {
  return (
    <div className="flex items-center justify-center px-4">
      <Icon size={32} weight="bold" color="white" />
    </div>
  );
}