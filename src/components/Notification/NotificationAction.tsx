import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes, ElementType } from "react"

interface NotificationActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType,
}

export function NotificationAction({ icon: Icon, ...rest }: NotificationActionProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        "rounded p-2", rest.className
      )}
    >
      <Icon size={12} weight="bold" color="white" />
    </button>
  )
}