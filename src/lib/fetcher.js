const fetcher = async (...args) => {
  const res = await fetch(...args);
  if (!res.ok) throw new Error('Erro ao buscar países');
  return res.json();
};

export default fetcher;
