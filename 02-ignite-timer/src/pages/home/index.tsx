import { HandPalm, Play } from "phosphor-react";
import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from "./styles";
import { createContext, useContext, useState } from "react";
import { FormNewCycle, NewCycleForm } from "./components/newCycleForm";
import { Countdown, CountdownCycle } from "./components/Countdown";

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  isActive?: boolean;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
  NewCicleFormData?: Date;
}

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: String | null;
  markCurrentCycleAsFunished: () => void
}

export const CyclesContext = createContext({} as CyclesContextType);

export function Home() {
  const { watch, reset, handleSubmit } = useContext(FormNewCycle);
  const { setAmountSecondsPassed } = useContext(CountdownCycle);

  const [activeCycleId, setActiveCycleId] = useState<String | null>(null);
  
  const [cycles, setCycles] = useState<Cycle[]>([]);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function markCurrentCycleAsFunished() {
    setCycles((state) =>
    state.map((cycle) => {
      if (cycle.id == activeCycleId) {
        return { ...cycle, finishedDate: new Date() };
      } else {
        return cycle;
      }
    })
  );
  }

  function handleCreateNewCycle(data: NewCicleFormData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);

    reset();
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id == activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">

        <CyclesContext.Provider value={{ activeCycle, activeCycleId, markCurrentCycleAsFunished }}>
          <NewCycleForm />
          <Countdown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <StopCountDownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  );
}
