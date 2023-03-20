import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import * as zod from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CyclesContext } from "../..";
import { createContext, useContext } from "react";

interface FormNewCycle {
  handleSubmit: any;
  watch:  any;
  reset: any;
}

interface FormDataType {
  NewCicleFormData: any;
}

export const FormNewCycle = createContext({} as FormNewCycle);
export const FormDataType = createContext({} as FormDataType);

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutesAmount: zod
      .number()
      .min(1, "O ciclo precisa ser no minimo de 1 minutos")
      .max(60, "O ciclo precisa ser no máximo de 60 minutos"),
  });
  
  type NewCicleFormData = zod.infer<typeof newCycleFormValidationSchema>;

  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCicleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: "",
        minutesAmount: 0,
      },
    });

    return (
      <FormNewCycle.Provider value={{handleSubmit, watch, reset}}>
        <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
          id="task"
          type="text"
          placeholder="De um nome para o seu projeto"
          disabled={!!activeCycle}
          list="taskSuggestions"
          {...register("task")}
        />
        <datalist id="taskSuggestions">
          <option value="Projeto 1" />
          <option value="Projeto 2" />
          <option value="Projeto 3" />
          <option value="Projeto banana" />
        </datalist>

        <label htmlFor="minutesAmount">Durante</label>
        <FormDataType.Provider value={{NewCicleFormData}}>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          disabled={!!activeCycle}
          step={5}
          min={1}
          max={60}
          {...register("minutesAmount", { valueAsNumber: true })}
        />
      </FormDataType>
        <span>minutos.</span>
      </FormContainer>
      </FormNewCycle.Provider>
    )
}