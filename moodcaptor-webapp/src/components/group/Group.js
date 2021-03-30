import React, {useState} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const Group = ({groups, groupSelected}) => {

    const defaultSelectedGroup = groups.length > 0 ? groups[0].id : ""
    const [selectedItem, setSelectedItem] = useState(defaultSelectedGroup)

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
                value={selectedItem}
                onChange={e => handleGroupChanged(e)}
                helperText="Please select your group"
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

export default Group