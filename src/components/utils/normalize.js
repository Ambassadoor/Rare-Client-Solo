export const normalize = async (res) => {
  const status = res.status;
  const response = await res.json();
  return { status, response };
};