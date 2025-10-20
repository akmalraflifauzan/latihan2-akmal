export default function Design() {
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center relative bg-gradient-to-t from-[#c2c2c2] to-[#FFFFFF]">
      <div className="w-full flex justify-between p-3 font-[bold]">
        <h1>Chat Akmal</h1>
        <h1>Settings</h1>
      </div>
      <div className="w-full font-[bold] flex flex-col items-center">
        <h1 className="text-[40px]">New Chat Akmal</h1>
        <div className="w-[400px] h-[50px] flex flex-col items-center text-[15px] max-md:hidden rounded-full bg-[#8b8b8b]">
          <div className="w-full flex flex-col p-3">Ask anything</div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center">
        <div className="w-[400px] h-[50px] min-md:hidden rounded-full bg-[#8b8b8b]">
          <div className="w-full flex flex-col p-3">Ask anything</div>
        </div>
      </div>
    </div>
  );
}
