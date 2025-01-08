import { Check, MetaLogo, X } from "@phosphor-icons/react";
import React from 'react';

type NotificationProps = {
  title: string,
  subtTitle: string,
}

export const Notification: React.FC<NotificationProps> = ({ title, subtTitle }) => {
  return (
    <div className="flex flex-row py-4 space-x-4">
      <div className="flex items-center justify-center px-4">
        <MetaLogo size={32} weight="bold" color="white" />
      </div>
      <div className="w-full flex flex-col justify-between px-4">
        <h1 className="text-lg font-semibold text-white">Conteúdo</h1>
        <p className="text-sm text-gray-300">sub conteúdo</p>
      </div>
      <div className="flex justify-between items-center px-4 w-full max-w-[94px]">
        <button className="bg-red-500 text-white rounded p-2 hover:bg-red-600">
          <X size={12} weight="bold" />
        </button>
        <button className="bg-green-500 text-white rounded p-2 hover:bg-green-600">
          <Check size={12} weight="bold" />
        </button>
      </div>
    </div>
  );
}
