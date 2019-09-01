const constructQueryParams = data => {
  const ret = [];
  const keysList = Object.keys(data);
  keysList.forEach(key => {
    if (data[key]) {
      if (Array.isArray(data[key])) {
        data[key].forEach(value => {
          ret.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        });
      } else {
        ret.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
      }
    }
  });
  return ret.join('&');
};

const openPopupInCenter = (url, title = '', width = 480, height = 440) => {
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  return window.open(
    url,
    title,
    `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no,
      resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
  );
};

export { constructQueryParams, openPopupInCenter };
