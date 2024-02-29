import "../index.scss";

export default function Logo() {
  function isDarkMode() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }
  return (
    <div className="logo">
      <img src={isDarkMode() ? "./LOGO_dark.svg" : "./LOGO.svg"} alt="" />
    </div>
  );
}
