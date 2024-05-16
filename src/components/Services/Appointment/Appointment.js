import { LocalizationProvider, MobileDateTimePicker } from "@mui/lab";
// import { DateTimePicker } from '@mui/x-date-pickers';
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import swal from "sweetalert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useAuth from "../../../Hooks/useAuth";

const Appointment = () => {
  const { user } = useAuth();

  // <DateTimePicker label="Basic date time picker" />
  // const [clearedDate, setClearedDate] = React.useState(null);
  const [value, setValue] = React.useState(new Date());

  // doctor name function
  const [docName, setDocName] = React.useState("");

  const handleChange = (event) => {
    setDocName(event.target.value);
  };

  //swal alert
  const swalAlert = () => {
    return swal("Your message has already been sent You will Receive a mail ASAP.", {
      button: false,
      icon: "success",
    });
  };
  return (
    <Box
      id="appointment"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl">
        <Container style={{ justifyContent: "center" }}>
          <Typography
            variant="h5"
            sx={{
              mt: 5,
              mb: 5,
            }}
          >
            Select topic or event what are you interesting for and make some subscription bellow
          </Typography>
        </Container>
        {/* set some topic */}
        <FormControl sx={{ mb: 5, minWidth: "50%" }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Select one of them
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={docName}
            onChange={handleChange}
            autoWidth
            label="Select one of them"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Swedish Ukrainian speaking club</MenuItem>
            <MenuItem value={11}>Kids Event</MenuItem>
            <MenuItem value={12}>Woman Club</MenuItem>
            <MenuItem value={13}>Sport Club</MenuItem>
            <MenuItem value={14}>Integration Events</MenuItem>
            <MenuItem value={16}>Completed events, reporting</MenuItem>
            <MenuItem value={17}>Karaoke</MenuItem>
            <MenuItem value={18}>Topic 1</MenuItem>
            <MenuItem value={19}>Topic 2</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ mb: 2 }}
          value={user.displayName}
          fullWidth
          label="Your Name"
          id="fullWidth"
        />
        <TextField
          sx={{ mb: 2 }}
          value={user.email}
          fullWidth
          label="Your Mail"
          id="fullWidth"
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <MobileDateTimePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              label="Appointment Date"
              onError={console.log}
              minDate={new Date("2024-01-01T00:00")}
              inputFormat="yyyy/MM/dd hh:mm a"
              mask="___/__/__ __:__ _M"
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>

        <TextField
          sx={{ mt: 2, mb: 2 }}
          fullWidth
          label="More detailed information"
          id="fullWidth"
        />

        <Button
          sx={{ p: 1, mt: 2, mb: 5 }}
          onClick={swalAlert}
          fullWidth
          variant="contained"
        >
          <AddCircleIcon /> Confirm
        </Button>
      </Container>
    </Box>
  );
};

export default Appointment;
