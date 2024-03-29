import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AdminTopNav from "./AdminTopNav";
import AdminCreateEventButton from "./AdminCreateEventButton";
import AdminDashboardLabels from "./AdminDashboardLabels";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

export default function AdminDashboardGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AdminTopNav />
        </Grid>
        <Grid item xs={3}>
          <AdminCreateEventButton />
        </Grid>
        <Grid item xs={9}>
          <AdminDashboardLabels />
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>xs=9</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
