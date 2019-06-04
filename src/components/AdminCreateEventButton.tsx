import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(1)
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    }
  })
);

export default function AdminCreateEventButton() {
  const classes = useStyles();

  return (
    <Fab color="primary" aria-label="Add" className={classes.fab}>
      <AddIcon />
    </Fab>
  );
}
