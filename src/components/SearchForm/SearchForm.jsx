import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';
import { useState } from 'react';
const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ searchForm }) => {
  const [region, setRegion] = useState('');
  const handleChange = ev => {
    setRegion(ev.target.value);
  };
  const handleSabmit = ev => {
    ev.preventDefault();
    if (!region) {
      alert('select any regions');
      return;
    }
    searchForm(region);
  };
  return (
    <form className={styles.form} onSubmit={handleSabmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        onChange={handleChange}
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map(region => (
          <option value={region.value} key={region.id} name={region.name}>
            {region.name}
          </option>
        ))}
      </select>
    </form>
  );
};
