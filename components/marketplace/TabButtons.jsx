import { Data } from "../nftcards/NftData"

export function TabButtons({ filterItem, menuItems, setItem}) {
    return (
        <div className="flex justify-center mt-[65px] mb-[100.28px] gap-3">
             <button
            className="bg-white text-black hover:bg-slate-50 border-2 border-black transition-colors font-[600] h-[60px] w-[72px] rounded-[16.17px]"
            onClick={() => setItem(Data)}
          >
            All
          </button>
          {menuItems.map((Val, id) => {
            return (
              <button
                className="bg-white text-black hover:bg-slate-50 border-2 border-black transition-colors font-[600] h-[60px] w-[138px] rounded-[16.17px]"
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