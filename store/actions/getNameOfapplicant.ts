import { setNameOfApplicant } from "./types/types";
export const getnameOfapplicant = (name: string) => ({
  type: setNameOfApplicant,
  payload: name,
});
