const ServiceCard = ({ service }) => {
  const { _id, service_id, title, img, price, description } = service || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="photo" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#444] text-2xl font-bold">{title}</h2>
        <p className="text-[#FF3811] text-xl font-semibold">Price: {price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
