interface NotificationContentProps {
  text: string,
}

export function NotificationContent({ text }: NotificationContentProps) {
  return (
    <div className="w-full flex flex-col justify-between px-4">
      <h1 className="text-lg font-semibold text-white">{text}</h1>
      <p className="text-sm text-gray-300">Convite há 3 hrs</p>
    </div>
  );
}