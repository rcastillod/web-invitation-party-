// Assets
import rose from "./assets/images/rose.png";

const App = () => {
  return (
    <main>
      <div className="max-w-3xl mx-auto px-4">
        <div className="py-10 min-h-screen">
          <div className="card__wrapper py-24">
            <h2 className="font-light uppercase tracking-widest text-center">
              Estas <span className="font-bold">invitado</span> a mi
            </h2>
            <div className="card__image flex justify-center my-7 relative z-10">
              <img src={rose} alt="" />
            </div>
            <div className="card__title font-serif text-center uppercase -mt-8 md:-mt-11">
              Fiesta de <br />
              <span>Cumpleaños</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
