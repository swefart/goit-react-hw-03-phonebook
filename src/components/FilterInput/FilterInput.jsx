import { Input } from "./FilterInput.styled";
import PropTypes from 'prop-types';

const FilterInput = ({ onChange }) => {
    return (
        <div>
            <span >{"Find contact by name"}</span>
            <Input type="text" name="filter" onChange={onChange}></Input>
        </div>
        
    )
}

export default FilterInput

FilterInput.propTypes = {
    onChange: PropTypes.func,
}