import { useState } from "react";

const ModelCard = ({ model,carts,setCarts }) => {
    const { name, description, price, period, icon, features } = model;

    const [isBuy, setIsBuy] = useState(false);
    const handleSubsScription =() =>{
        setIsBuy(true)
        setCarts([...carts,model])
    }

    return (
        <div className="shadow-lg rounded-lg border overflow-hidden border-zinc-300 p-4 space-y-4 bg-white">
            <div className="">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                     <p>{icon}</p>
                </div>
            </div>
            
            <div className="">
                <h3 className="text-2xl font-bold font-manrope text-gray-800">{name}</h3>
                <p className="text-gray-600 text-sm py-3">{description}</p>
                <div className="flex  gap-1 mt-2">
                    <h4 className="text-xl font-bold text-gray-900">${price}</h4>
                    <p className=" text-gray-500">/{period}</p>
                </div>
            </div>
            <div className="space-y-2">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                ))}
            </div>
            <div>
                <button 
                    onClick={handleSubsScription} 
                    className={`btn w-full font-semibold text-white rounded-full py-2 transition-all duration-300 
                        ${isBuy 
                            ? "bg-green-500 hover:bg-green-600 border-green-500"
                            : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90"
                        }
                    `}
                >
                    {isBuy ? "Added to cart" : "Buy Now"}
                </button>
            </div>
        </div>
    );
};

export default ModelCard;