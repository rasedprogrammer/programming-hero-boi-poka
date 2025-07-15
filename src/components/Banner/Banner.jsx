import BannerImg from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={BannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="mr-8">
          <h1 className="text-5xl font-bold py-8 leading-[60px]">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn btn-primary">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
