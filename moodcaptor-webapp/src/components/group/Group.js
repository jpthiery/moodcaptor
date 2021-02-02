import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Group = ({groups}) => {
    return (
        <Box display="flex" flexDirection="row" with="100%">
            <Box>
                <Typography component="h4" >Group :</Typography>
            </Box>
            <Box with="100%">
                <Select>
                    {
                        groups.map(
                            item => {
                                return (<MenuItem value={item.key}>{item.value}</MenuItem>)
                            }
                        )
                    }
                </Select>
            </Box>
        </Box>
    )
}

export default Group