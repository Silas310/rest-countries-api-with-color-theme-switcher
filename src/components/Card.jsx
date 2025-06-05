function Card({ flag, altFlag, name, population, region, capital }) {
  const info = [
    { label: 'Population', value: population },
    { label: 'Region', value: region },
    { label: 'Capital', value: capital }
  ];

  return (
    <section className="bg-white dark:bg-dark-element dark:text-white rounded-lg shadow-2xl max-w-[18rem]">
      <img src={flag} alt={altFlag} className="h-48 w-full object-cover rounded-t-lg" />
      <div className="p-5 pb-12">
        <h2 className="text-[1.2rem] font-bold mb-3">{name}</h2>
        {info.map(({ label, value }) => (
          <p key={label}>
            <strong className="font-semibold">{label}:</strong> {value}
          </p>
        ))}
      </div>
    </section>
  );
}