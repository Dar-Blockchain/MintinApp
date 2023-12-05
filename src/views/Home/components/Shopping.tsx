const Shopping = () => {
  return (
    <>
      <main className="font-text text-lg p-8 ">
        <div className="text-center mt-8">
          <h2 className="font-title text-3xl mb-4">SHOpping time!</h2>
          <p className="font-text text-lg">
            Don't know what to do with your brand new Waldos NFT? Visit our shop
            and click on "J'ai un NFT".{" "}
          </p>
          <p className="font-text text-sm">Enjoy up to 50% discount!</p>
        </div>

      <div className="text-center mt-8">
        <a href="https://cbdwaldoslegend.com/">
          <img
            src="assets/images/img7.png"
            alt="Bouton Shop"
            className="mx-auto w-3/4 md:w-1/3 lg:w-1/8 object-contain"
          />
        </a>
      </div>
      <img
        src="assets/images/main%20page%20site.jpg"
        alt="Main Page Site"
        className="mx-auto my-8 rounded-lg mobile-full-width"
      />
            </main>

    </>
  );
};

export default Shopping;
