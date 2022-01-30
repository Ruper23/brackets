module.exports = function check(str, bracketsConfig) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];
    if (open(symbol, bracketsConfig, arr)) {
      arr.push(symbol);
    } else {
      if (symbol != close(arr.pop(), bracketsConfig)) {
        return false;
        break;
      }
    }
  }
  return arr.length == 0 ? true : false;
};

function open(bracket, arrStatus, arr) {
  let lastPush = close(arr[arr.length - 1], arrStatus);
  if (lastPush == bracket) return false;
  for (let i = 0; i < arrStatus.length; i++) {
    const config = arrStatus[i];
    if (config[0] == bracket) {
      return true;
    }
  }
  return false;
}

function close(bracket, arrStatus) {
  for (let i = 0; i < arrStatus.length; i++) {
    const config = arrStatus[i];
    if (config[0] == bracket) {
      return config[1];
    }
  }
  return undefined;
}
