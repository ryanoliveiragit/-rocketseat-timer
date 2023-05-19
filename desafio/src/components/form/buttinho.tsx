import { useFormContext } from "react-hook-form";

export function DAWD() {
  const { handleSubmit } = useFormContext();
  return <button onClick={() => handleSubmit(handleSubmit)}>Submit</button>
}
