const Service = ({ data, type }) => {
  let serviceType;

  if (data) {
    serviceType = data?.map((item, i) => (
      <p key={i}>
        <img
          className='w-[50px] h-[50px] rounded'
          src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
          alt={item.provider_name}
        />
      </p>
    ));
  } else {
    serviceType = <p className='font-light'>N/A</p>;
  }
  return (
    <div className='w-full h-full flex flex-col items-center space-y-4'>
      <h1 className='text-xl text-[#a23939] font-bold md:text-3xl'>{type}</h1>
      {serviceType}
    </div>
  );
};
export default Service;
