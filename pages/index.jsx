import { Header } from "../components/header/index"
import { Discover } from "../components/discover/index"
import { Weekly } from "../components/weekly/index"
import { Marketplace } from "../components/marketplace/index"

export default function HomePage() {

    return(
        <div className="bg-[#F9F9F9]">
            <Header />
            <main>
            <Discover />
            <Weekly />
            <Marketplace />
            </main>
        </div>
       
    )
}