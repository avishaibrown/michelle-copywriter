import React from "react";
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

const ExpandedTimeline = (props) => {
  const { items } = props;

  return (
    <Timeline position="alternate">
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot
              color="secondary"
              sx={{ transform: { xs: "none", md: "scale(1.5)" } }}
            >
              {item.icon}
            </TimelineDot>
            {index !== items.length - 1 && (
              <TimelineConnector sx={{ backgroundColor: "secondary.main" }} />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              elevation={3}
              sx={{ mx: { xs: 0, md: 5 }, padding: { xs: 2, md: 5 } }}
            >
              <Typography
                sx={{ typography: { xs: "h6", md: "h4" } }}
                component="h1"
                gutterBottom
              >
                {item.title}
              </Typography>
              <Typography sx={{ typography: { xs: "body2", md: "h6" } }}>
                {item.description}
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ExpandedTimeline;
