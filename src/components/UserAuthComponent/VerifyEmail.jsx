import React, { useRef, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleOtpChange = (value, index) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <img
          src={Logo}
          alt="Login Image"
          style={{ width: 120, height: 120, objectFit: "contain" }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          margin: "auto",
          padding: 3,
          marginTop: 5,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" color="white" gutterBottom>
          Verify Your Account
        </Typography>

        {/* Email Input */}
        <Stack mb={3}>
          <TextField
            label="Enter Email"
            type="email"
            fullWidth
            variant="outlined"
            autoComplete="off"
            InputLabelProps={{
              style: { color: "#bdbdbd", top: "-3px", fontSize: 11 }, // Adjust label position if needed
            }}
            InputProps={{
              style: {
                color: "white",
                backgroundColor: "#2b2b45",
                borderRadius: 5,
                padding: "10px 12px", // Padding for input field
                height: 40,
              },
            }}
            sx={{ mb: 3 }}
          />
          {/* Otp  */}
          <Stack direction="row" justifyContent="space-between" spacing={1}>
            {otp.map((digit, index) => (
              <TextField
                key={index}
                inputRef={(el) => (inputRefs.current[index] = el)}
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                variant="outlined"
                inputProps={{
                  maxLength: 1,
                  style: {
                    textAlign: "center",
                    fontSize: "1.5rem",
                    color: "white",
                    backgroundColor: "#2b2b45",
                    width: "30px",
                    height: "30px",
                  },
                }}
              />
            ))}
          </Stack>
        </Stack>

        {/* Submit Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f67280",
            paddingX: 5,
            paddingY: 1.4,
            color: "white",
            "&:hover": {
              backgroundColor: "#c34261",
            },
            borderRadius: 0.4,
          }}
        >
          Verify Email
        </Button>
        {/* Forgot Password */}
        <Stack direction={"row"} alignItems={"center"} spacing={1} mt={2}>
          <Typography variant="subtitle2" color={"#fff"}>
            Return to your account?{" "}
            <Link
              to={"/auth/user/login"}
              style={{ textDecoration: "underline", color: "#e1bee7" }}
            >
              Sign in
            </Link>{" "}
          </Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={1} mt={2}>
          <Typography variant="subtitle2" color={"#fff"}>
            OTP not received?
            <Link
              to={"/auth/user/login"}
              style={{ textDecoration: "underline", color: "#e1bee7" }}
            >
              Resend Otp
            </Link>{" "}
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default VerifyEmail;
