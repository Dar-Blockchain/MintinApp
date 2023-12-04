const Footer = () => {
  return (
    <>
      <div className="flex justify-between items-center prl">
        <p className="text-black m-0">&copy; Waldos Legend 2022</p>

        <div>
          <img
            src="assets/images/logo.png"
            alt="Waldos Legend"
            className="mx-auto w-10"
          />
          <img
            src="assets/images/img5.png"
            alt="Waldos Legend"
            className="mx-auto mb-4 w-10 mt-2"
            style={{ width: "70px" }}
          />
        </div>
        <footer className="flex justify-center items-center">
          <a href="https://linktr.ee/waldoslegend" className="mx-1">
            <img src="assets/images/5.png" alt="linktr" className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/thewaldoslegend/" className="mx-1">
            <img
              src="assets/images/instagram.png"
              alt="instagram"
              className="w-8 h-8"
            />
          </a>
          <a href="https://discord.gg/6MJddurmhG" className="mx-1">
            <img
              src="assets/images/discorde.png"
              alt="discord"
              className="w-8 h-8"
            />
          </a>
          <a href="https://twitter.com/WaldosLegend" className="mx-1">
            <img src="assets/images/X.png" alt="X.com" className="w-8 h-8" />
          </a>
        </footer>
      </div>
    </>
  );
};

export default Footer;
