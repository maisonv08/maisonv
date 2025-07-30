
import { useState } from "react";

function App() {
  const [showMore, setShowMore] = useState(false);
  return (
    <main style={{ fontFamily: "serif", background: "#f5f0e6", padding: "2rem", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "3rem", textAlign: "center" }}>Maison V</h1>
      <p style={{ textAlign: "center", fontStyle: "italic" }}>Where tiny stories come alive.</p>
      <section style={{ background: "#fff", padding: "1.5rem", borderRadius: "1rem", marginTop: "2rem" }}>
        <h2>About the Brand</h2>
        <p>Maison V is a miniature art studio dedicated to crafting delicate, nostalgic spaces—each a quiet world of its own.</p>
        {showMore && <p>Custom model woven with personal meaning—Maison V brings your quiet dream to life, one detail at a time.</p>}
        <button onClick={() => setShowMore(!showMore)} style={{ marginTop: "1rem" }}>
          {showMore ? "Read less" : "Read more"}
        </button>
      </section>
    </main>
  );
}

export default App;
