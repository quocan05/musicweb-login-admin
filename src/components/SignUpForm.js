import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloudCircleRoundedIcon from "@mui/icons-material/CloudCircleRounded";
import "../styles/SignUpForm.scss";
import {
  Divider,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Row } from "react-bootstrap";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Tìm hiểu và tạo bởi  "}
      <Link color="inherit" href="https://www.facebook.com/quoc.aan05/">
        Quoc An
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#ff5500",
    },
    secondary: {
      main: "#333333",
    },
  },
});

export const SignUpForm = () => {
  const [email, setEmail] = React.useState("");
  const [radioValue, setRadioValue] = React.useState("");
  const [isAuthor, setIsAuthor] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [alertText, setAlertText] = React.useState("* Chọn một trường");
  const [selectedRole, setSelectedRole] = React.useState("");

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChangeEmail = (event) => {
    if (!isValidEmail(event.target.value)) {
      console.log("not ok");
      setIsError(true);
    } else {
      console.log("email okkkk");
      setIsError(false);
    }

    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (radioValue === "") {
      setAlertText("Bạn phải chọn một trường");
      return;
    } else {
      setAlertText("");
      setIsError(false);
    }

    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("username"),
      name: data.get("name"),
      email: email,
      password: data.get("password"),
      role: selectedRole,
      socialLink: data.get("social-link"),
    });
  };

  const handleRadioGroup = (value) => {
    if (value === "") {
      setIsError(true);
      setAlertText("Vui lòng chọn một trường !");
      return;
    } else {
    }
  };

  const handleIsAuthor = (value) => {
    if (value === "author") {
      setIsAuthor(true);
      setSelectedRole("author");
    } else {
      setIsAuthor(false);
      setSelectedRole("listener");
    }
    console.log("Check value : >>>>", value, ">>> role", selectedRole);
  };

  const handleOnSubmit = () => {};

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ m: 1, bgcolor: "secondary.main", width: 56, height: 56 }}
            alt="image avatar"
          >
            <CloudCircleRoundedIcon sx={{ width: 56, height: 56 }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng ký thành viên Soundtify
          </Typography>

          <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Họ tên"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="@tên người dùng"
                  name="username"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: "100%" }}>
                  <FormLabel>Bạn là:</FormLabel>
                  <RadioGroup
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    onChange={(event) => {
                      handleIsAuthor(event.target.value);
                      handleRadioGroup(event.target.value);
                      setRadioValue(event.target.value);
                    }}
                  >
                    <FormControlLabel
                      value="listener"
                      control={<Radio />}
                      label="Người nghe"
                    />
                    <FormControlLabel
                      value="author"
                      control={<Radio />}
                      label="Tác giả"
                    />
                  </RadioGroup>
                  {radioValue === "" && (
                    <Typography sx={{ fontSize: "0.8rem" }}>
                      {alertText}
                    </Typography>
                  )}
                </FormControl>
                {selectedRole === "author" && (
                  <>
                    <Grid item xs={12}>
                      <TextField
                        error={isError}
                        required
                        fullWidth
                        id="email"
                        label="Nhập địa chỉ email của bạn"
                        name="email"
                        autoComplete="email"
                        Validate
                        onChange={handleChangeEmail}
                        helperText={
                          isError === true ? "Email không hợp lệ " : ""
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: "1rem" }}>
                      <TextField
                        required
                        Validate
                        fullWidth
                        id="social-link"
                        label="Nhập liên kết xã hội của bạn"
                        name="social-link"
                        autoComplete=""
                      />
                    </Grid>
                  </>
                )}
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng ký ngay
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ fontSize: "0.8rem", marginRight: "0.5rem" }}>
                  Bạn đã có tài khoản?{" "}
                </Typography>
                <Link href="#" variant="body2" sx={{ fontSize: "0.8rem" }}>
                  Đăng nhập ngay nào.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
