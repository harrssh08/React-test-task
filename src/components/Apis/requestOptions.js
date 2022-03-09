var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer ya29.A0ARrdaM-RIIC56kDhfcU64mMKrDnovMTBvp6-kQl4nxUVPx9LVfBRlYocqQ8ELzTL669fOLkrS4CtptZKJAl1xU7skdvvKjrvMQvWEdrHyXWfHf-pZntBR708sqtBXGzLPKoPcr8USepEk2pc0TmNDRCkaaQMYw"
);
myHeaders.append("Accept", "application/json");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
export default requestOptions;
