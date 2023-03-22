import { createContext, useContext } from "react";
import * as zod from 'zod';
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CyclesContext } from "../..";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();
  
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