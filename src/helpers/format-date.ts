const formatDate = (date?: Date): string => {
  const d = date ? new Date(date) : new Date();
  try {
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  } catch (err) {
    console.error(err);
    return "";
  }
};

export default formatDate;
