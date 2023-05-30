import delivery from "../../assets/delivery.svg";
import { useCart } from "../../contexts/myContexts";
import { Layout } from "../../components/layout";
import { Navbar } from "../../components/header/navBar";
import {
  Container,
  Title,
  ContainerAdress,
  DeliveryAdress,
  DeliveryAdressPrimary,
  IconLocation,
  IconDollar,
  IconTimer,
  Image,
} from "./styles";
import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";

export function Sucess() {
  const { adress, history } = useCart();
  console.log(history)

  const lastAddress = adress.length > 0 ? adress[adress.length - 1] : null;

  return (
    <div>
      <Layout>
        <Navbar />
        <Container>
          <div>
            <Title>Uhu! Pedido confirmado</Title>
            <p>Agora é só aguardar que logo o café chegará até você</p>

            <ContainerAdress>
              {lastAddress && (
                <div>
                  <DeliveryAdressPrimary>
                    <IconLocation>
                      <MapPin weight="fill" />
                    </IconLocation>
                    <div>
                      <p>
                        Entrega em <strong>{lastAddress.rua}</strong>,{" "}
                        <strong>{lastAddress.numero}</strong>
                        <br />
                        {lastAddress.bairro} - {lastAddress.cidade},{" "}
                        {lastAddress.uf}
                      </p>
                    </div>
                  </DeliveryAdressPrimary>

                  <DeliveryAdress>
                    <IconTimer>
                      <Timer weight="fill" />
                    </IconTimer>
                    <div>
                      <p>
                        Previsão de entrega
                        <br />
                        <strong>20 min - 30 min</strong>
                      </p>
                    </div>
                  </DeliveryAdress>

                  <DeliveryAdress>
                    <IconDollar>
                      <CurrencyDollar />
                    </IconDollar>
                    <div>
                      <p>
                        Pagamento na entrega
                        <br />
                        <strong>{lastAddress.payment}</strong>
                      </p>
                    </div>
                  </DeliveryAdress>
                </div>
              )}
            </ContainerAdress>
          </div>
          <Image>
            <img src={delivery} alt="delivery" />
          </Image>
        </Container>
      </Layout>
    </div>
  );
}
