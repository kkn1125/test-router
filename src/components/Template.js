import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import ReactMarkdown from "react-markdown";

function Template({ title, content, author, createAt, tags }) {
  return (
    <Stack
      sx={{
        "& ul, &ol": {
          paddingLeft: 0,
          marginLeft: 0,
        },
        "& li": {
          listStyle: "none",
        },
      }}>
      <Typography variant='h3'>{title}</Typography>
      <Divider />
      <Typography variant='body1'>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Typography>
      <Divider />
      <Stack direction='row'>
        <Box>
          <Box>
            {tags.map((item) => (
              <Chip label={item.name} />
            ))}
          </Box>
          <Typography>{author}</Typography>
          <Typography>{new Date(createAt).toLocaleString()}</Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Template;
