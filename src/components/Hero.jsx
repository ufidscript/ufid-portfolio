import portrait from "../assets/ibrahim.png";

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-portrait"
        src={portrait}
        alt="Ibrahim Danjuma"
        width="220"
        height="280"
      />
      <div className="hero-content">
        <p className="hero-label">
          Ibrahim Danjuma · Developer & community builder
        </p>

        <h1>Building useful things. Bringing people along.</h1>

        <p>
          I’m a Computer Science student at FUTMinna, learning by building and
          sharing what I learn with student communities.
        </p>

        <a className="hero-contact" href="mailto:ufidfarooq@gmail.com">
          Let’s talk
        </a>
      </div>
    </section>
  );
}

export default Hero;
