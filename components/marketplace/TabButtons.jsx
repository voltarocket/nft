import { Data } from "../nftcards/NftData"

export function TabButtons({ filterItem, menuItems, setItem}) {
    return (
        <div className="flex justify-center mt-[65px] mb-[100.28px]">
             <button
            className="bg-black text-white hover:bg-white hover:text-black border-2 border-black hover:border-black font-[600] transition-colors ml-[30.03px] h-[57.34px] w-[199.52px] rounded-[16.17px]"
            onClick={() => setItem(Data)}
          >
            All
          </button>
          {menuItems.map((Val, id) => {
            return (
              <button
                className="bg-black text-white hover:bg-white hover:text-black border-2 border-black hover:border-black font-[600] transition-colors ml-[30.03px] h-[57.34px] w-[199.52px] rounded-[16.17px]"
                onClick={() => filterItem(Val)}
                key={id}
              >
                {Val}
              </button>
            );
          })}
        </div>
      );
}