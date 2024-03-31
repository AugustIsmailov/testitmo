export const formatDate = (dateString) => {
  const dateObject = new Date(dateString);
  const day = dateObject.getDate();
  const month = new Intl.DateTimeFormat('ru', { month: 'long' }).format(
    dateObject
  );
  const year = dateObject.getFullYear();

  return `${day} ${month} ${year}`;
};

export const formatDateEng = (dateString) => {
  const dateObject = new Date(dateString);
  const day = dateObject.getDate();
  const month = new Intl.DateTimeFormat('eng', { month: 'long' }).format(
    dateObject
  );
  const year = dateObject.getFullYear();

  return `${day} ${month} ${year}`;
};
