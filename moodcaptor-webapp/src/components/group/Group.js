import React, {useState} from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Group = ({groups, groupSelected}) => {

    const [selectedItem, setSelectedItem] = useState(groups[0].id)

    const handleGroupChanged = (event) => {
        groupSelected(event.target.value)
        setSelectedItem(event.target.value)
    }

    return (
        <Box display="flex" flexDirection="row" with="100%">
            <Box>
                <Typography component="h4" >Group :</Typography>
            </Box>
            <Box with="100%">

                <Select onChange={e => handleGroupChanged(e)} value={selectedItem} defaultValue={selectedItem}>
                    {
                        groups.map(
                            item => {
                                return (<MenuItem value={item.id}>{item.name}</MenuItem>)
                            }
                        )
                    }
                </Select>
            </Box>
        </Box>
    )
}

export default Group