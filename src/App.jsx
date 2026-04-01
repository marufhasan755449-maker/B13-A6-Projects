import { Suspense, useState } from "react"
import Banner from "./Banner"
import BannerFooter from "./BannerFooter"
import Models from "./Models"
import NavBar from "./NavBar"
import Maruf from "./Maruf"
import GratStart from "./GratStart"
import Simple from "./Simple"
import Footer from "./Footer"



const getModels = async () => {
  const res =await fetch("/models.json")
  return res.json()
}



function App() {
  const modelPromise =getModels()
    const [activeTab, setactiveTab] = useState("products");
    const [carts,setCarts] =useState([])
console.log(carts)
  return (
    <>
      <NavBar cartCount={carts.length}></NavBar>
      <Banner></Banner>
      <BannerFooter></BannerFooter>
      <div className="text-center space-y-4">
        <h2 className="font-bold text-5xl">Premium Digital Tools</h2>
        <p className="text-[#627382]">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      </div>
     <div className="tabs tabs-box justify-center bg-transparent my-8">
  <input 
    type="radio" 
    name="my_tabs_1" 
    className={`tab rounded-full w-30 font-semibold transition-all ${activeTab === "products" ? "bg-[#4F39F6] text-white shadow-lg" : "text-gray-600"}`} 
    aria-label="Products" 
    onClick={() => setactiveTab("products")} 
    defaultChecked={activeTab === "products"}
  />

  <input 
    type="radio" 
    name="my_tabs_1" 
    className={`tab rounded-full w-30 font-semibold transition-all ${activeTab === "cart" ? "bg-[#4F39F6] text-white shadow-lg" : "text-gray-600"}`} 
    aria-label={`Cart (${carts.length})`} 
    onClick={() => setactiveTab("cart")} 
    defaultChecked={activeTab === "cart"}
  />

</div>
      <Suspense>
      {activeTab ==="products" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}

      ></Models>}
      </Suspense>
      {activeTab ==="cart" && <Maruf carts={carts} setCarts={setCarts}
      ></Maruf>}
      <GratStart></GratStart>
      <Simple></Simple>
      <Footer></Footer>
    </>
  )
}

export default App
