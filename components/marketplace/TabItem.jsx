import { NftCard } from "../nftcards/NftCard"

export function TabItem({item}) {
    return(
        item?.map((d) =>(
            <NftCard img={d.img} name={d.name} currentBid={d.currentBid} time={d.time}/>
        ))
    )
}