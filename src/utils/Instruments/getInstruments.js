import { fetchInstruments } from "../../services";
import Papa from "papaparse";

export const getInstruments = async (setInstruments) => {
  try {
    let response = await fetchInstruments();
    if (response.status === 200) {
      Papa.parse(response.data, {
        delimiter: ",",
        header: true,
        complete: (res) => {
          setInstruments(res.data);
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
};
