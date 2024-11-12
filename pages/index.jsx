import { Header } from "../components/header/index"
import { Discover } from "../components/discover/index"
import { Slider1 } from "../components/slider/slider1"

export default function HomePage() {

    return(
        <div className="bg-[#F9F9F9]">
            <Header />
            <main>
            <Discover />
            <Slider1 />
            </main>
        </div>
       
    )
}