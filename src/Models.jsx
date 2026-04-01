import { use} from "react";
import ModelCard from "./ModelCard"; 

const Models = ({modelPromise}) => {
    const models = use(modelPromise)
  return (
    <div className="max-w-7xl mx-auto space-y-4">
      <div className="grid grid-cols-3 gap-5">
        {models.map(model =>
        <ModelCard key={model.id} model={model} />
            )}
      </div>
    </div>
  )
}

export default Models
 