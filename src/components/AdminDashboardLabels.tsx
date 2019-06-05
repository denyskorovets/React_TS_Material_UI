import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    chipGreen: {
      margin: theme.spacing(1),
      backgroundColor: "green",
      color: "white"
    },
    chipBlue: {
      margin: theme.spacing(1),
      backgroundColor: "blue",
      color: "white"
    },
    chipRed: {
      margin: theme.spacing(1),
      backgroundColor: "red",
      color: "white"
    },
    chipYellow: {
      margin: theme.spacing(1),
      backgroundColor: "yellow"
    }
  })
);

export default function AdminDashboardLabels() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip label="Kitchen Services" className={classes.chipGreen} />
      <Chip label="Furniture Installation" className={classes.chipBlue} />
      <Chip label="Cleaning Services" className={classes.chipRed} />
      <Chip label="Deliveries" className={classes.chipYellow} />
    </div>
  );
}
