import "../css_files/Footer.css";

export default function Footer({ IsWinner }) {
  // Use consistent prop naming
  return (
    <div
      className="Footer"
      style={{ backgroundColor: IsWinner ? "green" : "purple" }}
    >
      {IsWinner ? <h3>Congrats! You won :)</h3> :null}
    </div>
  );
}
