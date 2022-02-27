export const processError = (error) => {
  if (error === undefined) {
    return;
  } else {
    res.status(500).json(error.details[0].message);
  }
};
