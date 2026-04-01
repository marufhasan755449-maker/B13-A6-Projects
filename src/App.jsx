import { Suspense, useState } from "react"
import Banner from "./Banner"
import BannerFooter from "./BannerFooter"
import Models from "./Models"
import NavBar from "./NavBar"
import Maruf from "./Maruf"



const getModels = async () => {
  const res =await fetch("/models.json")
  return res.json()
}



function App() {
  const modelPromise =getModels()

    const [activeTab, setactivetab] = useState("Products");

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <BannerFooter></BannerFooter>
      <div className="text-center space-y-4">
        <h2 className="font-bold text-5xl">Premium Digital Tools</h2>
        <p className="text-[#627382]">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      </div>
      <div className="tabs tabs-box justify-center bg-transparent my-8">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-30" aria-label="Products"onClick={()=> setactivetab("Products")} defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-30" aria-label="Cart (2)"onClick={()=> setactivetab("cart")} />
</div>
      <Suspense>
      {activeTab ==="Products" && <Models modelPromise={modelPromise}></Models>}
      </Suspense>
      {activeTab ==="cart" && <Maruf></Maruf>}
    </>
  )
}

export default App
