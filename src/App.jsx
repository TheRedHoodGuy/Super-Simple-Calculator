import { useState } from "react";

const App = (btn_value) => {
  const [displayValue, setDisplayValue] = useState(" ");
  return (
    <>
      <section className="flex flex-col gap-4 shadow p-4 rounded">
        <div>
          <input
            type="text"
            value={displayValue}
            className="p-6 bg-gray-100 w-full rounded outline-none ring-0"
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <input
            type="button"
            value="9"
            onClick={(e) => setDisplayValue(displayValue + e.target.value)}
            className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-500 duration-150"
          />

          <input
            type="button"
            value="8"
            onClick={(e) => setDisplayValue(displayValue + e.target.value)}
            className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-500 duration-150"
          />

          <input
            type="button"
            value="7"
            onClick={(e) => setDisplayValue(displayValue + e.target.value)}
            className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-500 duration-150"
          />

          <input
            type="button"
            value="+"
            onClick={(e) => setDisplayValue(displayValue + e.target.value)}
            className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-500 duration-150"
          />

          <input
            type="button"
            value="6"
            onClick={(e) => setDisplayValue(displayValue + e.target.value)}
            className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-500 duration-150"
          />

          <input
            type="button"
            value="5"
            onClick={(e) => setDisplayValue(displayValue + e.target.value)}
            className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-500 duration-150"
          />

          <input
            type="button"
            value="4"
            onClick={(e) => setDisplayValue(displayValue + e.target.value)}
            className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-500 duration-150"
          />

          <input
            type="button"
            value="-"
            onClick={(e) => setDisplayValue(displayValue + e.target.value)}
            className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-500 duration-150"
          />

          <input
            type="button"
            value="3"
            onClick={(e) => setDisplayValue(displayValue + e.target.value)}
            className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-500 duration-150"
          />

          <input
            type="button"
            value="2"
            onClick={(e) => setDisplayValue(displayValue + e.target.value)}
            className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-500 duration-150"
          />

          <input
            type="button"
            value="1"
            onClick={(e) => setDisplayValue(displayValue + e.target.value)}
            className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-500 duration-150"
          />

          <input
            type="button"
            value="*"
            onClick={(e) => setDisplayValue(displayValue + e.target.value)}
            className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-500 duration-150"
          />

          <input
            type="button"
            value="."
            onClick={(e) => setDisplayValue(displayValue + e.target.value)}
            className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-500 duration-150"
          />

          <input
            type="button"
            value="0"
            onClick={(e) => setDisplayValue(displayValue + e.target.value)}
            className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-500 duration-150"
          />

          <input
            type="button"
            value="/"
            onClick={(e) => setDisplayValue(displayValue + e.target.value)}
            className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-500 duration-150"
          />

          <input
            type="button"
            value="="
            onClick={(e) => setDisplayValue(eval(displayValue))}
            className="bg-rose-

            px-6 py-2 text-white rounded hover:bg-rose-500 duration-150 span-2"
          />

          <input
            type="button"
            value="Clear!"
            onClick={(e) => setDisplayValue("")}
            className="bg-red-600 px-6 py-2 text-white rounded hover:bg-red-500 duration-150 col-span-4"
          />
        </div>
      </section>
    </>
  );
};
export default App;
