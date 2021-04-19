const regex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+[\.][a-zA-Z0-9-]{2,})+$/;

export default (str: string) => {
  return regex.test(String(str).toLowerCase());
};
