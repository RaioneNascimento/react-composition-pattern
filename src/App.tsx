import { MetaLogo } from '@phosphor-icons/react';
import { Notification } from './components/Notification'
import { Check, X } from "@phosphor-icons/react";


function App() {
  return (
    <div className="w-full h-[calc(100vh)] overflow-y-auto bg-[#242424]">
      <div className="flex justify-center items-center h-screen">
        <div className="flex-col w-[500px] bg-[#4F4F4F] rounded-md">
          <Notification.Root>
            <Notification.Icon icon={MetaLogo} />
            <Notification.Content text="Você recebeu um novo convite" />
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={MetaLogo} />
            <Notification.Content text="Você recebeu um novo convite" />
            <Notification.Actions>
              <Notification.Action
                icon={X}
                className='bg-red-500 hover:bg-red-600'
                onClick={() => { }}
              />
              <Notification.Action
                icon={Check}
                className='bg-emerald-500 hover:bg-emerald-600'
                onClick={() => { }}
              />
            </Notification.Actions>
          </Notification.Root>

          <Notification.Root>
            <Notification.Content text="Você recebeu um novo convite" />
            <Notification.Actions>
              <Notification.Action
                icon={X}
                className='bg-red-500 hover:bg-red-600'
                onClick={() => { }}
              />
            </Notification.Actions>
          </Notification.Root>
        </div>
      </div>
    </div>
  )
}

export default App
