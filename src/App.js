import React from "react";


const styles = {
  text: { textAlign: "center" },
  shopImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  list: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  book: { margin: "20px" },
  bookImage: { width: "400px", height: "400px" },

};

function App() {
  return (
    <div style={styles.text}>
      <h1 >Welcome to the books world</h1>
      <h3 >Here you will get some amazing books</h3>
      <div style={styles.list}> 
        <div style={styles.book}>
          <img style={styles.bookImage} src="https://images-eu.ssl-images-amazon.com/images/I/5129ujtnRcL._SY291_BO1,204,203,200_QL40_ML2_.jpg" />
          <p>
            Forty rules of love <a href="#">more...</a>
          </p>
          <p >10 $</p>
          </div>
          <div style={styles.book}>
          <img  style={styles.bookImage} src="https://www.aljazeera.net/wp-content/uploads/2019/09/9c96921a-076c-471f-9ce2-9c36e058e2b5.jpeg" />
          <p>
            العمى <a href="#">..المزيد</a>
          </p>
          <p>10 $</p> 
          </div>
          <div style={styles.book}>
          <img style={styles.bookImage} src="https://prodimage.images-bn.com/pimages/2940016615394_p0_v1_s550x406.jpg" />
          <p>
            Miserables <a href="#">more..</a>
          </p>
          <p>12 $</p>
          </div>
        </div>
        
    </div>
  );
}

export default App;
