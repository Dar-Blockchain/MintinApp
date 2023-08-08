const CoreTeam = () => {
  return (
    <>
      <div className="text-center mt-8 mx-auto font-text">
        <h2 className="font-title text-3xl mb-4">CORE TEAM</h2>
        <p className="font-text text-lg">
          Waldos love Web3, Cannabis and degen mindset.
        </p>
        <p className="font-text text-lg">That's all. (OH YEAH)</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around mt-16 mx-8 flex-wrap">
        <div className="team-member text-center mb-8 md:mb-0 w-full md:w-1/5">
          <img
            src="assets/images/Gael.png"
            alt="Gaël"
            className="mx-auto rounded-full w-1/2 mb-4"
          />
          <h3 className="font-title text-xl">Gael</h3>
          <p className="font-text">CEO & Artist</p>
        </div>
        <div className="team-member text-center mb-8 md:mb-0 w-full md:w-1/5">
          <img
            src="assets/images/BABA.png"
            alt="Baba"
            className="mx-auto rounded-full w-1/2 mb-4"
          />
          <h3 className="font-title text-xl">Baba</h3>
          <p className="font-text">Co-founder</p>
        </div>
        <div className="team-member text-center mb-8 md:mb-0 w-full md:w-1/5">
          <img
            src="assets/images/CRESPIX%20WALDOS.png"
            alt="Crespix"
            className="mx-auto rounded-full w-1/2 mb-4"
          />
          <h3 className="font-title text-xl">Crespix</h3>
          <p className="font-text">Co-founder</p>
        </div>
        <div className="team-member text-center mb-8 md:mb-0 w-full md:w-1/5">
          <img
            src="assets/images/Netoa.jpg"
            alt="Netoa"
            className="mx-auto rounded-full w-1/2 mb-4"
          />
          <h3 className="font-title text-xl">Netoa</h3>
          <p className="font-text">COO</p>
        </div>
        <div className="team-member text-center mb-8 md:mb-0 w-full md:w-1/5">
          <img
            src="assets/images/Kashi.png"
            alt="Kashi"
            className="mx-auto rounded-full w-1/2 mb-4"
          />
          <h3 className="font-title text-xl">Kashi</h3>
          <p className="font-text">CBO</p>
        </div>
      </div>
      <div className="text-center mt-8 mx-auto font-text">
        <p className="font-text text-lg">
          But we also have many other talents in our team !
        </p>
      </div>
    </>
  );
};

export default CoreTeam;
