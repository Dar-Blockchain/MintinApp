const About = () => {
  return (
    <>
      <img
        src="assets/images/PAGE%20DE%20MINT%20ILLUS%20V2.png"
        alt="Your Image"
        className="mx-auto mobile-full-width desktop-rounded"
      />
      <main className="font-text text-lg p-8">
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 mx-8">
          <div className="intro-text md:w-1/2">
            <h2 className="Avengeance text-3xl mb-4">
              WELCOME TO THE WALDOS LEGEND!
            </h2>
            <p className="font-text text-lg mb-4">
              Waldos Legend is a collection of 420 NFTs on Ethereum.
              <br />
              Your Waldos NFT opens a whole DEGEN univers around cannabis
              culture. <br />
              <br />
              What's in for you:
            </p>
            <ul className="list-inside list-disc font-text text-lg">
              <li>Join a real relentless Web3 community</li>
              <li>Exclusive discounts on our products (up to 50%)</li>
              <li>Holders-only private events</li>
              <li>Be the first to discover our new features and rewards</li>
            </ul>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 md:w-1/2 rounded-lg">
            <img
              src="assets/images/6.png"
              alt="Image 1"
              className="w-full h-auto rounded-lg mb-4 md:mb-0"
            />
            <img
              src="assets/images/82.png"
              alt="Image 2"
              className="w-full h-auto rounded-lg mb-4 md:mb-0"
            />
            <img
              src="assets/images/99.png"
              alt="Image 3"
              className="w-full h-auto rounded-lg mb-4 md:mb-0"
            />
            <img
              src="assets/images/10.png"
              alt="Image 4"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
