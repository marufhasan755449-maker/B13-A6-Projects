import { use} from "react";
import ModelCard from "./ModelCard"; 

const Models = ({modelPromise,carts,setCarts}) => {
    const models = use(modelPromise)
  return (
    <div className="max-w-7xl mx-auto space-y-4">
      <div className="grid grid-cols-3 gap-5">
        {models.map(model =>
        <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts} />
            )}
      </div>
    </div>
  )
}

export default Models
 