import { Header } from "../components/header/index"
import { Discover } from "../components/discover/index"
import { ReactSlider } from "../components/slider/react-slider"
import { Marketplace } from "../components/marketplace"

export default function HomePage() {

    return(
        <div className="bg-[#F9F9F9]">
            <Header />
            <main>
            <Discover />
            <ReactSlider />
            <Marketplace />
            </main>
        </div>
       
    )
}