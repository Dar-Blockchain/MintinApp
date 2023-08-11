const RoadMap = () => {
  return (
    <>
      <footer className="text-center mt-8">
        <div className="text-center mt-8 mx-auto font-text">
          <h2 className="font-title text-4xl mb-4">ROADMAP</h2>
          <p className="mb-2 text-xl">
            Started from the bottom, now we're here.
          </p>
          <p className="text-xl">
            The degens behind Waldos Legend can do anything,
          </p>
          <p className="text-xl">and this is what we did so far:</p>
        </div>
      </footer>
      <div className="flex flex-col md:flex-row items-center justify-between mt-16 mx-8">
        <div className="md:w-1/2 text-2xl md:text-4xl">
          <ul className="list-inside list-disc font-text">
            <li className="list-item">CREATION OF NFT COLLECTION</li>
            <li className="list-item">GROWING COMMUNITY</li>
            <li className="list-item">NFT USECASE</li>
            <li className="list-item">MINT : 20 ETH RAISED</li>
            <li className="list-item">E-SHOP ONLINE</li>
            <li className="list-item">IRL SHOP OPENING</li>
            <li className="list-item">SLOW MINT</li>
            <li className="list-item">TEAM IS GROWING!</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img
            src="assets/images/Roadmap.png"
            alt="ROADMAP"
            className="w-2/3 ml-3 rounded-3xl mobile-full-width"
          />
        </div>
      </div>
    </>
  );
};

export default RoadMap;
