import * as React from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import Typography from "../components/Typography";
import { CONTACT } from "../utils/constants";
import EmailIcon from "@mui/icons-material/Email";

//TODO: Connect form to email service

const Contact = () => {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }} maxWidth={"sm"}>
      <Grid container justifyContent="center" my={8}>
        <Typography variant="h4" marked="center" align="center" gutterBottom>
          {CONTACT.title}
        </Typography>
      </Grid>
      <Grid
        container
        spacing={3}
        mb={3}
        p={3}
        justifyContent="center"
        sx={{
          backgroundColor: "white",
          borderRadius: "4px",
          maxWidth: "sm",
        }}
      >
        <Grid container spacing={3} mb={3}>
          {CONTACT.fields.map((field) => (
            <Grid item xs={12} key={field.id}>
              <TextField
                id={field.id}
                label={field.label}
                name={field.name}
                required={field.required}
                multiline={field.multiline}
                rows={field.rows}
                fullWidth
                variant="outlined"
              />
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          size="large"
          endIcon={<EmailIcon />}
          sx={{ textTransform: "none" }}
        >
          {CONTACT.submitButton}
        </Button>
      </Grid>
    </Container>
  );
};

export default Contact;
