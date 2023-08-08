const Footer = () => {
  return (
    <>
      <footer className="flex justify-center items-center py-5">
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
      &copy; 2023, Waldos Legend
    </>
  );
};

export default Footer;
