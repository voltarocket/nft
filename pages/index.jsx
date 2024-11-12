import { Header } from "../components/header/index"
import { Discover } from "../components/discover/index"
import { Slider } from "../components/slider/index"

export default function HomePage() {

    return(
        <div className="bg-[#F9F9F9]">
            <Header />
            <main>
            <Discover />
            <Slider />
            </main>
        </div>
       
    )
}