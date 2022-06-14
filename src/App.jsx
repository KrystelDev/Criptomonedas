import styled from "@emotion/styled";
import ImagenCripto from "./img/imagen-criptos.png";
import Formulario from "./components/Formulario";
import Resultados from "./components/Resultados";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  margin: 100px auto 0 auto;
  width: 80%;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 34px;
  margin-top: 80px;
  margin-bottom: 50px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      setCargando(true);
      const cotizarCripto = async () => {
        const { moneda, criptomoneda } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado.DISPLAY[criptomoneda][moneda]);
        setCargando(false);
      };
      cotizarCripto();
    }
  }, [monedas]);

  return (
    <>
      <Contenedor>
        <Imagen src={ImagenCripto} alt="Imagen criptomonedas" />
        <div>
          <Heading>Criptomonedas al instante</Heading>
          <Formulario setMonedas={setMonedas} />
          {cargando && <p>Cargando...</p>}
          {resultado.PRICE && <Resultados resultado={resultado} />}
        </div>
      </Contenedor>
      <Footer />
    </>
  );
}

export default App;
