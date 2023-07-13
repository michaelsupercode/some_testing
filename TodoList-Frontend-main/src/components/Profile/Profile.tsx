import React, { FC, ReactElement } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

interface IProfile {
  name?: string;
}

const Profile: FC<IProfile> = ({ name = "Marius" }): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      <Avatar
        sx={{
          width: "96px",
          height: "96px",
          backgroundColor: "primary.main",
          marginBottom: "16px",
        }}>
        <Typography
          variant="h4"
          color="text.primary">
          {name.substring(0, 1)}
          {/* {name.slice(0, 1)} */}
        </Typography>
      </Avatar>
      <Typography
        variant="h6"
        color="text.primary">
        Welcome, {name}
      </Typography>
      <Typography
        variant="body1"
        color="text.primary">
        this is yoir personol tasks manager
      </Typography>
    </Box>
  );
};
export default Profile;

// more to PropTypes in part 163
Profile.propTypes = {
  name: PropTypes.string,
};
