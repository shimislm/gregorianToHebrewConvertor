  //**change the date format to fit axios request */
export const formatDate = (date = new Date()) => {
    return [
      date.getFullYear(),
      (date.getMonth() + 1).toString().padStart(2, "0"),
      date.getDate().toString().padStart(2, "0"),
    ].join("-");
  };