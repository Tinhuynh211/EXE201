export const Pricing = () => {
  return (
    <div className="mt-28">
      <h1 className="text-center text-6xl max-sm:text-5xl font-bold">
        Best of Week
      </h1>
      <div className="flex sm:space-x-4 max-sm:space-y-4 max-sm:flex-col">
        {/* Package 1 */}
        <div className="flex-1 text-xl mt-14 rounded-2xl border border-black bg-blue-500 p-10 w-full shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="text-white">Package one</div>
          <div className="text-6xl my-5 font-light text-white">$600</div>
          <div className="text-white">Short description</div>
          <button className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-white text-xl max-sm:text-lg hover:bg-gray-200 transition-all">
            Purchase
          </button>
          <ul className="text-white">
            <li>First feature</li>
            <li>Second feature</li>
          </ul>
        </div>

        {/* Package 2 */}
        <div className="flex-1 text-xl mt-14 rounded-2xl border border-black bg-white p-10 w-full shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="text-black">Package 2</div>
          <div className="text-6xl my-5 font-light text-black">$1500</div>
          <div className="text-black">Short Description</div>
          <button className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-gray-200 text-xl max-sm:text-lg hover:bg-gray-300 transition-all">
            Purchase
          </button>
          <ul className="text-black">
            <li>First Feature</li>
            <li>Second Feature</li>
            <li>Third Feature</li>
          </ul>
        </div>

        {/* Package 3 */}
        <div className="flex-1 text-xl mt-14 rounded-2xl border border-black bg-blue-500 p-10 w-full shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="text-white">Package 3</div>
          <div className="text-6xl my-5 font-light text-white">$1800</div>
          <div className="text-white">Short Description</div>
          <button className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-white text-xl max-sm:text-lg hover:bg-gray-200 transition-all">
            Purchase
          </button>
          <ul className="text-white">
            <li>First Feature</li>
            <li>Second Feature</li>
            <li>Third Feature</li>
            <li>Fourth Feature</li>
            <li>Fifth Feature</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
