import styled from "@emotion/styled";
import useSelectMonedas from "../hook/useSelectMonedas";

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
  const monedas = [
    { id: "USD", nombre: "Dolar USA" },
    { id: "MXN", nombre: "Peso Mexicano" },
    { id: "EUR", nombre: "Euro" },
    { id: "GBP", nombre: "Libra Esterlina" },
  ];

  const [SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
  return (
    <form>
      <SelectMonedas />
      <InputSubmit type={"submit"} value={"Cotizar"} />
    </form>
  );
};

export default Formulario;
