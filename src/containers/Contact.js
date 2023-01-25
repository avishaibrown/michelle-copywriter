import { useState, useEffect } from "react";
import { Container, Grid, TextField, CircularProgress } from "@mui/material";
import Button from "../components/Button";
import Typography from "../components/Typography";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "emailjs-com";
import { CONTACT } from "../utils/constants";
import { updateObject, checkValidity } from "../utils/util";

const Contact = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: {
      value: "",
      validations: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    email: {
      value: "",
      validations: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    message: {
      value: "",
      validations: {
        required: true,
        maxLength: 1000,
      },
      valid: false,
      touched: false,
    },
  });

  //scroll to top when page is navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsFormValid(
      contactForm.name.valid &&
        contactForm.email.valid &&
        contactForm.message.valid
    );
  }, [
    contactForm.name.valid,
    contactForm.email.valid,
    contactForm.message.valid,
  ]);

  const handleChange = (event) => {
    const updatedControls = updateObject(contactForm, {
      [event.target.name]: updateObject(contactForm[event.target.name], {
        value: event.target.value,
        touched: false,
      }),
    });
    setContactForm(updatedControls);
  };

  const handleBlur = (event) => {
    const updatedControls = updateObject(contactForm, {
      [event.target.name]: updateObject(contactForm[event.target.name], {
        valid: checkValidity(
          event.target.value,
          contactForm[event.target.name].validations
        ),
        touched: true,
      }),
    });
    setContactForm(updatedControls);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_9v1cetq",
          "template_rccj6bw",
          event.target,
          "ngKY7FCIOfcf7-ulR"
        )
        .then(
          () => {
            setLoading(false);
            setSuccess(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container
      component="section"
      maxWidth={"sm"}
      sx={{
        my: { xs: 20, md: 30 },
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Grid container justifyContent="center" my={5}>
        <Typography
          variant="h2"
          marked="center"
          gutterBottom
          sx={{ fontSize: { xs: "3rem", md: "3.75rem" } }}
        >
          {CONTACT.title}
        </Typography>
      </Grid>
      <Grid
        container
        mb={3}
        p={3}
        justifyContent="center"
        sx={{
          backgroundColor: "white",
          borderRadius: "4px",
          maxWidth: "sm",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : !success ? (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} mb={3}>
              {CONTACT.fields.map((field) => (
                <Grid item xs={12} key={field.id}>
                  <TextField
                    id={field.id}
                    label={field.label}
                    name={field.name}
                    multiline={field.multiline}
                    rows={field.rows}
                    fullWidth
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoFocus={field.autoFocus}
                    disabled={loading}
                    error={
                      !contactForm[field.name].valid &&
                      contactForm[field.name].touched
                    }
                    helperText={
                      !contactForm[field.name].valid &&
                      contactForm[field.name].touched &&
                      field.error
                    }
                  />
                </Grid>
              ))}
            </Grid>
            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<EmailIcon />}
              sx={{ textTransform: "none" }}
              disabled={loading}
            >
              {CONTACT.submitButton}
            </Button>
          </form>
        ) : (
          <Typography>{CONTACT.enquirySuccessMsg}</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Contact;
