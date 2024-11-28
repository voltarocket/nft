import { Header } from "../components/header/index"
import { Discover } from "../components/discover/index"
import { Weekly } from "../components/weekly/index"
import { Marketplace } from "../components/marketplace/index"
import { Explore } from "../components/explore/index"

export default function HomePage() {

    return(
        <div className="bg-[#F9F9F9]">
            <Header />
            <main>
            <Discover />
            <Weekly />
            <Marketplace />
            <Explore className="pt-[180.92px]"/>
            </main>
        </div>
       
    )
}