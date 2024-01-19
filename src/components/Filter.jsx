import { useSearchParams } from 'react-router-dom';

function Filter({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex w-full flex-wrap items-center  gap-4">
      {options.map((option, i) => (
        <button
          className="rounded-xl bg-red-200/25 px-4 py-2 text-lg font-bold  uppercase text-yellow-50"
          key={option.value}
          onClick={() => handleClick(option.value)}
          // eslint-disable-next-line react/no-unknown-property
          active={option.value === currentFilter ? 'true' : undefined}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
export default Filter;
