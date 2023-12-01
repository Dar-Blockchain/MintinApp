const RoadMap = () => {
  return (
    <>
      <main className="font-text text-lg p-8 prl">
        <footer className="text-center mt-8">
          <div className="text-center mt-8 mx-auto font-text">
            <h2 className="font-title text-4xl">ROADMAP</h2>
          </div>
        </footer>
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 mx-8">
          <div className="md:w-1/2 text-2xl md:text-4xl">
            <div
              className="text-center mx-auto font-text"
              style={{ height: "130px", maxWidth: "80%" }}
            >
              <p className="mb-2 text-xl">
                Started from the bottom, now we're here. And this is what we did
                so far:
              </p>
            </div>
            <ul className="list-inside list-disc font-text">
              <li className="list-item">CREATION OF NFT COLLECTION</li>
              <li className="list-item">GROWING COMMUNITY</li>
              <li className="list-item">NFT USECASE</li>
              <li className="list-item">WEB3 ONLINE SHOP</li>
              <li className="list-item">IRL SHOP OPENING</li>
            </ul>
          </div>
          <div className="md:w-1/2 text-2xl md:text-4xl">
            <div
              className="text-center mx-auto font-text"
              style={{ height: "130px", maxWidth: "80%" }}
            >
              <p className="mb-2 text-xl">
                We have an enormous ambition: to conquer the world and give the
                opportunity to invest in legal cannabis.
              </p>
            </div>
            <ul className="list-inside list-disc font-text">
              <li className="list-item">TOKENIZE CBD PRODUCTIONS</li>
              <li className="list-item">NEW W3ED NFT COLLECTION</li>
              <li className="list-item">REAL WORLD ASSETS</li>
              <li className="list-item">ICO OF $WALD</li>
              <li className="list-item">GAMIFICATION</li>
            </ul>
          </div>
        </div>
        <div className="flex" style={{ justifyContent: "center" }}>
          <img
            src="assets/images/img3.png"
            alt="ROADMAP"
            className="w-2/3 ml-3 rounded-3xl mobile-full-width"
            style={{ width: "100%" }}
          />
        </div>
      </main>
    </>
  );
};

export default RoadMap;
