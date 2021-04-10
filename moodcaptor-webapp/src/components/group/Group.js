import React, {useState} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const Group = ({groups, initialGroupSelected='', groupSelected}) => {

    const [selectedItem, setSelectedItem] = useState(initialGroupSelected)

    const handleGroupChanged = (event) => {
        groupSelected(event.target.value)
        setSelectedItem(event.target.value)
    }

    return groups.length > 0 ? (
            <TextField
                id="outlined-select-currency"
                select
                label="Group"
                fullWidth
                defaultValue={initialGroupSelected}
                value={selectedItem}
                onChange={e => handleGroupChanged(e)}
                variant="outlined"
            >
                {groups.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.name}
                    </MenuItem>
                ))}
            </TextField>
        ) :
        ("")
}

Group.propTypes = {
    groups: PropTypes.array.isRequired
}

export default Group