var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+[\.][a-zA-Z0-9-]{2,})+$/;
export default (function (str) {
    return regex.test(String(str).toLowerCase());
});
