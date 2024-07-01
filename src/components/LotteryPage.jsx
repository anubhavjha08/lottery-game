import "../css_files/LotteryPage.css";
import Header from "./Header";
import MainSec from "./MainSec";
import Footer from "./Footer";
import { useState } from "react";

export default function LotteryPage() {
  const [IsWinner, setIsWinner] = useState(false);
  return (
    <div className="container-card">
      <Header IsWinner={IsWinner} />
      <MainSec setIsWinner={setIsWinner} IsWinner={IsWinner} />
      <Footer IsWinner={IsWinner} />
    </div>
  );
}
