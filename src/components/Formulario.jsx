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
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const [SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
  // const [SelectCriptomonedas] = useSelectMonedas(
  //   "Elige tu Criptomoneda",
  //   monedas
  // );

  return (
    <form>
      <SelectMonedas />
      {/* <SelectCriptomonedas /> */}
      <InputSubmit type={"submit"} value={"Cotizar"} />
    </form>
  );
};

export default Formulario;
