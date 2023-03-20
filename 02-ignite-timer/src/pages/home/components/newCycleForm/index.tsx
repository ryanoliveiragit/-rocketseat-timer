import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import * as zod from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function NewCycleForm() {

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

        <span>minutos.</span>
      </FormContainer>
    )
}