import axios from 'axios';

export const fetchInstruments = () =>
  axios.get("https://prototype.sbulltech.com/api/v2/instruments");