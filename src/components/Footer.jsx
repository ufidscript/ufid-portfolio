import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer">
      <p>Built by Ibrahim Danjuma · Learning in public.</p>

      <a className="github-link" href="https://github.com/ufidscript">
        <FaGithub aria-hidden="true" />
        <span>GitHub</span>
      </a>
    </footer>
  );
}

export default Footer;
