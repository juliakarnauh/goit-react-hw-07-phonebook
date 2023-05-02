import { Title, FilterDiv, Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
export const Filter = () => {
  const dispatch = useDispatch()

    const handleFilter = (e) => {
        dispatch(setFilter(e.target.value));
      };
    
      return (
        <>
          <Title>Contacts</Title>
          <FilterDiv>
            <Label>Find contacts by name</Label>
            <Input  onChange={handleFilter} type="text" />
          </FilterDiv>
        </>
      );
    };