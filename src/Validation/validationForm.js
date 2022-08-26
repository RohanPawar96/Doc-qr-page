export const validName = ({ name }) => {
  // eslint-disable
  if (/^([a-zA-Z ]){2,30}$/.test(name)) {
    return true;
  }
  return false;
};

export const validEmail = ({ email }) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

export const validContact = ({ number }) => {
  // eslint-disable
  if (/^[6-9]\d{9}$/.test(number)) {
    return true;
  }
  return false;
};
