import { useSearchParams } from 'react-router-dom';

function Filter({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get('page')) searchParams.set('page', 1);
    setSearchParams(searchParams);
  }

  return (
    <div>
      {options.map((option) => (
        <button
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
