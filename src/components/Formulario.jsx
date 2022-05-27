import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import useSelectMonedas from "../hook/useSelectMonedas";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
  background-color: #9497ff;
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
  size: 50px;
  font-weight: 700;
  width: 100%;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
  const [criptomoneda, SelectCriptomoneda] = useSelectMonedas(
    "Elige tu Criptomoneda",
    criptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      // const resultado= resultadoGeneral.Data

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });
      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();

    if ([moneda, criptomoneda].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    console.log("conectado");
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios.</Error>}
      <form onSubmit={handelSubmit}>
        <SelectMonedas />
        <SelectCriptomoneda />
        {/* {(moneda, criptomoneda)} */}

        <InputSubmit type={"submit"} value={"Cotizar"} />
      </form>
    </>
  );
};

export default Formulario;
