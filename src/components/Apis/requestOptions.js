var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer ya29.A0ARrdaM_1d7lQa061nSLIW9tkOzSdQG2adcBoSmTIZxbdx-Oy5wPazJGPDlJgq1p4TgAg2xm_YKHwD2mmoqWAfWJNmbKtW5G0zgSa01P3oe8lLl5h7YG1yFZpH3W66QhqtvCCi4eON1KHFniH8qHokivpPQsheg"
);
myHeaders.append("Accept", "application/json");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
export default requestOptions;
