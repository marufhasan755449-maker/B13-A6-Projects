import { Suspense } from "react"
import Banner from "./Banner"
import BannerFooter from "./BannerFooter"
import Models from "./Models"
import NavBar from "./NavBar"

const getModels = async () => {
  const res =await fetch("/models.json")
  return res.json()
}



function App() {
  const modelPromise =getModels()

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <BannerFooter></BannerFooter>
      <Suspense>
        <Models modelPromise={modelPromise}></Models>
      </Suspense>
    </>
  )
}

export default App
