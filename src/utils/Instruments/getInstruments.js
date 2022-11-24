import { fetchInstruments } from "../../services";
export const getInstruments = async (setInstruments) => {
  try {
    const response = await fetchInstruments();
    if (response.status === 200) {
      setInstruments(response.data);
    }
  } catch (err) {
    console.log(err);
  }
};
