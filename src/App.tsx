import { Notification } from './components/Notification'

function App() {
  return (
    <div className="w-full h-[calc(100vh)] overflow-y-auto bg-[#242424]">
      <div className="flex justify-center items-center h-screen">
        <div className="flex-col w-[500px] bg-[#4F4F4F] rounded-md">
          <Notification />
          <Notification />
          <Notification />
          <Notification />
        </div>
      </div>
    </div>
  )
}

export default App
