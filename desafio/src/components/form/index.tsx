import {
  Container,
  InputNumberAndComplement,
  ContainerForm,
  ContainerInputs,
  Payment,
  AdressDescription,
  DefaultInput,
  InputStreat,
} from "./styles";
import { MapPin, CurrencyDollar } from "@phosphor-icons/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "../../contexts/myContexts";

const cepValidator = z.string().refine(
  (cep) => {
    const formattedCep = cep.replace(/\D/g, "");
    return formattedCep.length === 8;
  },
  { message: "Digite um CEP válido no formato 12345678" }
);

const schema = z.object({
  cep: cepValidator,
  rua: z.string().max(40).nonempty({ message: "Campo obrigatório" }),
  numero: z
    .string()
    .min(1, { message: "Digite um número válido" })
    .nonempty({ message: "Campo obrigatório" }),
  complemento: z.string(),
  bairro: z.string().nonempty({ message: "Campo obrigatório" }),
  cidade: z.string().nonempty({ message: "Campo obrigatório" }),
  uf: z.string().nonempty({ message: "Campo obrigatório" }),
  payment: z.string()
});

type FormProps = z.infer<typeof schema>;

import { useForm } from "react-hook-form";


export function Form() {

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
    reValidateMode: "onChange",
    mode: "all",
  });

  function onSubmit(data: any) {
    console.log(data);
    reset()
  }

  console.log(errors);
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <input
                {...register("cep")}
                type="text"
                placeholder="CEP"
                pattern="[0-9]*"
              />
            </DefaultInput>

            <InputStreat>
              <div>
                <input
                  {...register("rua")}
                  type="text"
                  placeholder="Rua"
                  maxLength={40}
                />
              </div>
            </InputStreat>

            <InputNumberAndComplement>
              <input
                {...register("numero")}
                type="number"
                id="numero"
                placeholder="Número"
                maxLength={15}
              />
              <DefaultInput>
                <input
                  {...register("complemento")}
                  type="text"
                  placeholder="Complemento"
                />
              </DefaultInput>
            </InputNumberAndComplement>

            <InputNumberAndComplement>

              <DefaultInput>
                <input
                  {...register("bairro")}
                  type="text"
                  placeholder="Bairro"
                />
              </DefaultInput>

              <input 
                {...register("cidade")}
                type="text"
                placeholder="Cidade"
              />

              <input
                {...register("uf")}
                type="text"
                id="uf"
                maxLength={2}
                placeholder="UF"
              />
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
        </Payment>
      </form>
       <button onClick={handleSubmit(onSubmit)}>Enviar</button>
    </Container>
  );
}
