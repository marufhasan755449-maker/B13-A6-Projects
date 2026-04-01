import { use } from "react";
import ModelCard from "./ModelCard"; 

const Models = ({modelPromise}) => {
    const models = use(modelPromise)
    console.log(models)
  return (
    <div className="max-w-7xl mx-auto space-y-4">
      <div className="text-center space-y-4">
        <h2 className="font-bold text-5xl">Premium Digital Tools</h2>
        <p className="text-[#627382]">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
        {/* name of each tab group should be unique */}
<div className="tabs tabs-box">
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Products" defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Cart (2)" />
</div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {models.map(model =>
        <ModelCard key={model.id} model={model} />
            )}
      </div>
    </div>
  )
}

export default Models
 