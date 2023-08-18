import { FilterInput, FilterLabel } from '../Filter/Filter.styled';

export const Filter = ({ filter, getContact }) => {
  return (
    <>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          value={filter}
          type="text"
          name="filter"
          placeholder="Search..."
          onChange={getContact}
        />
      </FilterLabel>
    </>
  );
};
