import { SlBasket } from "react-icons/sl";

const Maruf = ({ carts, setCarts }) => {

  const handleRemove = (id) => {
    const newCart = carts.filter(itm => itm.id !== id);
    setCarts(newCart);
  };
  const totalPrice = carts.reduce((sum, itm) => sum + itm.price, 0);

  return (
    <div className='max-w-7xl mx-auto my-10 border p-10 rounded-xl bg-white'>

      <h2 className='font-bold text-2xl mb-5'>Your Cart</h2>

      {
        carts.length > 0 ? (
          <>
            {carts.map(itm =>
              <div key={itm.id} className="mt-4">
                <div className="flex justify-between items-center font-semibold text-xl border rounded-lg p-4 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{itm.icon}</div>
                    <div>
                      <h2 className="text-lg">{itm.name}</h2>
                      <p className="text-sm text-gray-500">${itm.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(itm.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )}
            <div className="mt-10 pt-6 border-t-2 border-dashed border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold text-gray-700">Total:</span>
                <span className="text-2xl font-black text-[#4F39F6]">${totalPrice}</span>
              </div>
              
              <button className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold py-4 rounded-full shadow-lg hover:opacity-90 transition-all">
                Proceed to Checkout
              </button>
            </div>
          </>

        ) : (
          <div className="text-center mt-10">
            <div className="flex justify-center items-center text-5xl text-gray-300">
              <SlBasket />
            </div>
            <p className="mt-3 text-gray-500">Your cart is empty</p>
          </div>
        )
      }

    </div>
  );
};

export default Maruf;