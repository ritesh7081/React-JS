import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-[#212121] px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("Red")}
            className="outline-none px-4 py-1 rounded-full text-offwhite shadow-lg cursor-pointer"
            style={{ backgroundColor: "Red" }}
          >Red</button>
          <button
            onClick={() => setColor("Blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "Blue" }}
          >Blue</button>
          <button
            onClick={() => setColor("Green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "Green" }}
          >Green</button>
          <button
            onClick={() => setColor("Yellow")}
            className="outline-none px-4 py-1 rounded-full text-offwhite shadow-lg cursor-pointer"
            style={{ backgroundColor: "Yellow" }}
          >Yellow</button>
          <button
            onClick={() => setColor("Purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "Purple" }}
          >Purple</button>
          <button
            onClick={() => setColor("Orange")}
            className="outline-none px-4 py-1 rounded-full text-offwhite shadow-lg cursor-pointer"
            style={{ backgroundColor: "Orange" }}
          >Orange</button>
          <button
            onClick={() => setColor("Indigo")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "Indigo" }}
          >Indigo</button>
          <button
            onClick={() => setColor("Pink")}
            className="outline-none px-4 py-1 rounded-full text-offwhite shadow-lg cursor-pointer"
            style={{ backgroundColor: "Pink" }}
          >Pink</button>
          <button
            onClick={() => setColor("SkyBlue")}
            className="outline-none px-4 py-1 rounded-full text-offwhite shadow-lg cursor-pointer"
            style={{ backgroundColor: "SkyBlue" }}
          >SkyBlue</button>
          <button
            onClick={() => setColor("Navy")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "Navy" }}
          >Navy</button>
          <button
            onClick={() => setColor("Aqua")}
            className="outline-none px-4 py-1 rounded-full text-offwhite shadow-lg cursor-pointer"
            style={{ backgroundColor: "Aqua" }}
          >Aqua</button>
        </div>
      </div>
    </div>
  )
}

export default App