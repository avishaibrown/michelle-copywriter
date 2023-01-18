import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import Typography from "./Typography";

const useStyles = makeStyles((theme) => ({
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const ProcessTimeline = (props) => {
  const classes = useStyles();
  const { items } = props;

  return (
    <Timeline position="alternate">
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="secondary">{item.icon}</TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ padding: "30px", borderRadius: "40px" }}>
              <Typography variant="h5" component="h1" gutterBottom>
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ProcessTimeline;
