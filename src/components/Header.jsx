import "../css_files/Header.css";

export default function Header({ IsWinner }) {
  return (
    <div className="header-comp" style={{ backgroundColor: IsWinner ? "green" : "purple" }}>
      <h1>Lottery game</h1>
      <p>Try Your luck!</p>
     
    </div>
  );
}
