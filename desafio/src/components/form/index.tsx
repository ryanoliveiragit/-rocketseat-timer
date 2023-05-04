import {
    Container,
    InputNumberAndComplement,
    ContainerForm,
    ContainerInputs,
    Payment,
    ButtonsContainer,
    AdressDescription,
    DefaultInput,
    InputStreat,
} from "./styles";
import {
    MapPin,
    CurrencyDollar,
    CreditCard,
    Bank,
    Money
} from "@phosphor-icons/react";
export function Form() {
    return (
        <Container>
            <form>
                <ContainerForm>
                    <AdressDescription>
                        <div>
                            <MapPin size={20} color="#C47F17" />
                            <h1>Endereço de Entrega</h1>
                        </div>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </AdressDescription>

                    <ContainerInputs>
                        <DefaultInput>
                            <input type="text" placeholder="CEP" />
                        </DefaultInput>

                        <InputStreat>
                            <div>
                                <input type="text" placeholder="Rua" />
                            </div>
                        </InputStreat>
                        <InputNumberAndComplement>
                            <input type="text" id="numero" placeholder="Número" />
                            <DefaultInput>
                                <input type="text" placeholder="Complemento" />
                            </DefaultInput>
                        </InputNumberAndComplement>
                        <InputNumberAndComplement>
                            <DefaultInput>
                                <input type="text" placeholder="Bairro" />
                            </DefaultInput>
                            <input type="text" placeholder="Cidade" />
                            <input type="text" id="uf" placeholder="UF" />
                        </InputNumberAndComplement>
                    </ContainerInputs>
                </ContainerForm>
                <Payment>
                    <AdressDescription>
                        <div>
                            <CurrencyDollar size={20} color="#8047F8" />
                            <h1>Pagamento</h1>
                        </div>
                        <p>
                            O pagamento é feito na entrega. Escolha a forma que deseja pagar
                        </p>
                    </AdressDescription>

                    <ButtonsContainer>
                        <button>
                            <CreditCard size={20} weight="thin" color="#8047F8" />
                            Cartão de crédito
                        </button>
                        <button>
                            <Bank size={20} weight="thin" color="#8047F8" />
                            cartão de débito
                        </button>
                        <button>
                            <Money size={20} color="#8047F8" />
                            dinheiro
                        </button>
                    </ButtonsContainer>
                </Payment>
            </form>
        </Container>
    );
}
