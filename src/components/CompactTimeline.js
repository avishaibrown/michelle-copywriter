import { useEffect, useState } from "react";
import { Popover } from "@mui/material";
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import Typography from "./Typography";
import { css, keyframes } from "@emotion/react";

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0px rgba(255, 51, 134, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(255, 51, 134, 0);
  }
  100% {
    box-shadow: 0 0 0 0px rgba(255, 51, 134, 0);
  }
`;

const glowingStyles = css`
  animation: ${pulse} 2s ease-in-out infinite;
`;

const CompactTimeline = (props) => {
  const { items } = props;

  const [itemToOpen, setItemToOpen] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setItemToOpen(index);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    anchorEl?.focus();
  }, [anchorEl]);

  return (
    <MuiTimeline align="right">
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent height="5rem">
            <Typography variant="h6" color="grey" sx={{ mt: 2 }}>
              {index + 1}.
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              color="secondary"
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onClick={(event) => handleClick(event, index)}
              sx={glowingStyles}
            >
              {item.icon}
            </TimelineDot>

            {index !== items.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
        </TimelineItem>
      ))}
      <Popover
        id={"popover-" + itemToOpen}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        onBlur={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ typography: "h5", p: 2 }}>
          {items[itemToOpen]?.title}
        </Typography>
        <Typography sx={{ typography: "caption", p: 2 }}>
          {items[itemToOpen]?.description}
        </Typography>
      </Popover>
    </MuiTimeline>
  );
};

export default CompactTimeline;
