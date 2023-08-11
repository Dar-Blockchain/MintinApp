const Footer = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-black m-0">&copy; 2023, Waldos Legend</p>

        <div>
          <img
            src="assets/images/logo.png"
            alt="Waldos Legend"
            className="mx-auto w-10"
          />
          <p className="text-sm">
            WALDOS <br />
            LEGEND
          </p>
        </div>
        <footer className="flex justify-center items-center">
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
          <a href="https://www.instagram.com/thewaldoslegend/" className="mx-1">
            <img
              src="assets/images/5.png"
              alt="instagram"
              className="w-8 h-8"
            />
          </a>
        </footer>
      </div>
    </>
  );
};

export default Footer;
