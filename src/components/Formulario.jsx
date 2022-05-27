import { useState, useEffect } from "react";
import styled from "@emotion/styled";
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

  return (
    <form>
      <SelectMonedas />
      <SelectCriptomoneda />
      {/* {(moneda, criptomoneda)} */}

      <InputSubmit type={"submit"} value={"Cotizar"} />
    </form>
  );
};

export default Formulario;
