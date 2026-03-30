import { IoMdLocate } from "react-icons/io";
import{FaPlay} from "react-icons/fa";
const Banner = () => {
    return (
        <div className="banner container w-7xl mx-auto flex justify-between gap-14 my-14 items-center">
            <div className="space-y-4">
                <button className="btn bg-[#E1E7FF] rounded-full"><IoMdLocate /><span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">New: AI-Powered Tools Available</span></button>
                <h1 className="font-bold text-6xl">Supercharge Your<br/>Digital Workflow</h1>
                <p className="text-[#627382]">
                Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />

Explore Products
                </p>
                <div className="space-x-2.5">
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full font-semibold text-white">
                        Explore Products
                    </button>
                    <button className="btn btn-outline btn-primary rounded-full"><FaPlay />Watch Demo</button>
                </div>
            </div>
            <div className="w-500px h-590px">
                <img src="/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;