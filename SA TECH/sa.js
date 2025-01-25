import React from "react";

function App() {
  return (
    <div>
      {/* Products Section */}
      <div className="products" style={styles.products}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="box" key={index} style={styles.box}>
            <img
              src="css.jpg"
              alt="coats"
              height="200px"
              width="220px"
              style={styles.image}
            />
            <p style={styles.paragraph}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate, inventore atque, reprehenderit quas voluptates
              laboriosam quidem perspiciatis id, veritatis recusandae ullam.
              Fuga eius aliquid inventore? Asperiores explicabo officiis quis
              hic?
            </p>
          </div>
        ))}
      </div>

      {/* About Us Section */}
      <div className="about-us" style={styles.aboutUs}>
        <p style={styles.paragraph}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In tempora
          qui obcaecati illo. Quam error sapiente quas! Aspernatur, laboriosam.
          Hic maiores blanditiis placeat, laudantium illum quidem magni
          accusamus ab veniam ullam. Unde magnam aspernatur dignissimos ipsam
          sit velit. Repellat accusantium exercitationem magnam dolores
          possimus sit, neque quasi iusto doloremque tempora a dolore et hic
          non enim ipsa quaerat ipsum nesciunt. Sapiente quae distinctio
          explicabo odio perferendis asperiores rem quos placeat debitis eius.
          Quos molestias perspiciatis maxime perferendis, vel velit atque quia
          consectetur voluptas enim incidunt quo modi soluta blanditiis facere
          expedita tempora. Nihil, iure ea tenetur cupiditate dolores natus
          laborum!
        </p>
      </div>
    </div>
  );
}

// Inline styles for simplicity
const styles = {
  products: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
  },
  box: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    width: "250px",
  },
  image: {
    display: "block",
    margin: "0 auto 10px",
  },
  paragraph: {
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#333",
  },
  aboutUs: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    marginTop: "20px",
    textAlign: "justify",
  },
};

export default App;
