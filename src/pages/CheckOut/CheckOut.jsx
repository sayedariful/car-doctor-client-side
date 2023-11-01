import { useLoaderData } from "react-router-dom";
import Banner from "../Homes/Banner/Banner";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";
// import Footer from "../Shared/Footer/Footer";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service || {};
  console.log(service);
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    const email = user?.email;
    const price = form.price.value;
    const date = form.date.value;
    const booking = {
      customerName: name,
      number: number,
      email: email,
      img: img,
      price: price,
      date: date,
      service: title,
      service_id: _id,
    };
    console.log(booking);

    fetch("https://car-doctor-server-side-iota.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Good job!", "Service book successfully", "success");
        }
      });
  };

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="py-10">
        <h2 className="text-3xl text-center py-6">Book services: {title}</h2>

        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* First Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="name"
                placeholder="First Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Last Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Last Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Phone */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <input
                type="text"
                name="number"
                placeholder="Your Phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                type="text"
                defaultValue={"$" + price}
                name="price"
                placeholder="Due amount"
                className="input input-bordered"
                required
              />
            </div>
            {/* Date */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="py-3 rounded-lg btn-block bg-[#FF3811] text-white text-xl font-semibold"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
