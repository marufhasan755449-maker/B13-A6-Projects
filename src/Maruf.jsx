import { SlBasket } from "react-icons/sl";

const Maruf = ({ carts, setCarts }) => {

  const handleRemove = (id) => {
    const newCart = carts.filter(itm => itm.id !== id);
    setCarts(newCart);
    const total=carts.reduce((sum,itm) => sum +itm.price,0);
  };

  return (
    <div className='max-w-7xl mx-auto my-10 border p-10'>

      <h2 className='font-bold text-2xl'>Your Cart</h2>

      {
        carts.length > 0 ? (

          carts.map(itm =>
            <div key={itm.id}>

              <div className="mt-4">
                <div className="flex justify-between items-center font-semibold text-xl border rounded-lg p-4 gap-3">

                  {/* Left */}
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{itm.icon}</div>

                    <div>
                      <h2>{itm.name}</h2>
                      <p className="text-sm text-gray-500">${itm.price}</p>
                    </div>
                  </div>

                  {/* Right */}
                  <button
                    onClick={() => handleRemove(itm.id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>

                </div>
              </div>
              <div className="flex justify-between mt-6 font-semibold">
                <span>total</span>
                <span>${total}</span>
              </div>

            </div>
          )

        ) : (


          <div className="text-center mt-10">
            <div className="flex justify-center items-center text-5xl">
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