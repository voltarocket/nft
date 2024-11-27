import { NftCard } from "../nftcards/NftCard"

export function TabItem({item, img, name, currentBid}) {
    return(
        item?.map((d) =>(
            <NftCard img={img} name={name} currentBid={currentBid}/>
        ))
    )
}