import { Card } from "@components/card/card"
import { Header } from "@components/header/header";
import up from "./assets/icon-up.svg";
import fb from "./assets/icon-facebook.svg";

function App() {

  return (
    <main className='main' id='main'>
      <Header />
      <section className="container cards">
        {[1, 2, 3, 4,].map(() => <Card />)}
      </section>
      <div className="container">
        <h2 className="--mt-1">Overview - Today</h2>
        <div className="cards">
          {[1, 2, 3, 4, 1, 2, 3, 4, ].map(el =>
         
              <div className="card card-grid">
                <div className="card__subtitle">Page Views</div>
                <img className="card__icon" src={fb} alt="" />

                <div className="card__count  card__count--small">87</div>
                <div className="card__change flex --just-center --align-center ">
                  <img src={up} alt="" />
                  <div className="card__number">3%</div>
                </div>
              </div>
        
          )}
        </div>
      </div>

    </main>
  )
}

export default App
