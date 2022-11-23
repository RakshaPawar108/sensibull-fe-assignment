import { fetchInstruments } from "../../services";
export const getInstruments = async (setInstruments) => {
  try {
    const response = await fetchInstruments();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
