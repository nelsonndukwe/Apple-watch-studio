import "./App.css";
import bands from "./componnet/data";
import { useRef } from "react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

function App() {


  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 318;
    } else {
      current.scrollLeft += 318;
    }
  };

  const handlechange = (key) => {
    console.log(key);
  };
  

  
  return (
    <>
      <header>
        <div className="logo-container">
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844" />
        </div>

        <div className="collection-container">
          <p>collections</p>
        </div>

        <button>Save</button>
      </header>

      <div className="main-comtainer">
        <div className="secondary-main-container" ref={scrollRef}>
          <div className="watch">
            <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-41-stainless-silver-cell-8s_VW_PF_WF_SI?wid=500&hei=500&fmt=png-alpha&.v=cE0yanZqVnRqNm9QRFJGNktQTkR0QStPekR0TXYwOVJrN2w1SVljblAwaEc4TjVUamNERE9hVXdZVzgyRkxkOFVOZXovTEl4OXF3YzR6bkgwdlI3Uko4TndFSGFWdWZMa21CRXlrUm45elpKcXVMMEphMVVpQWFMMDcrWDBlRko" />
          </div>
          {bands.map((band, index) => {
            return (
              <div className="band-container" key={index} onClick={handlechange}
              >
                <div className="band-image">
                  <img 
                  src={band.image} alt="" />
                </div>
              </div>
            );
          })}
        </div>

        <span className="band-background-left">
          
          <BsArrowLeftShort
            className="band-left"
            onClick={() => scroll("left")}
          />
        </span>

        <span className="band-background-right">

          <BsArrowRightShort
            className="band-right"
            onClick={() => scroll("right")}
          />
          </span>
        
      </div>
    </>
  );
}

export default App;
