import Navbar from "../../components/Navbar";
import Carta from "../../components/Cartas"

export default function Page() {
  return (
    <div
    className="w-full min-h-screen items-center justify-center bg-center bg-cover"
    style={{
      backgroundImage: "url('/img4.jpeg')",
    }}
    >
      <Navbar />
      <Carta />
    </div>
  );
}
