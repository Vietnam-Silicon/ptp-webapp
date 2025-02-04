import Grid from '@mui/material/Grid2';
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  Divider,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const carriers = ['FedEx', 'UPS', 'DHL', 'USPS'];
const services = ['Express', 'Standard', 'Economy'];

const Index = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={1}>
        <Grid size={fullScreen ? 12 : 6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Customer's Name</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Customer's Name"
            />
          </FormControl>
        </Grid>
        <Grid size={fullScreen ? 12 : 6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Customer's Phone</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Customer's Phone"
            />
          </FormControl>
        </Grid>
        <Grid size={fullScreen ? 12 : 6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Carrier</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Carrier" />}
              MenuProps={MenuProps}
            >
              {carriers.map((name) => (
                <MenuItem key={name} value={name} >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={fullScreen ? 12 : 6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Service Type</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Service Type" />}
              MenuProps={MenuProps}
            >
              {services.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Divider textAlign="left">From</Divider>
      <Grid container spacing={1}>
        <Grid size={fullScreen ? 12 : 6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Country</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Country"
            />
          </FormControl>
        </Grid>
        <Grid size={fullScreen ? 12 : 6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">State/Province</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="State/Province"
            />
          </FormControl>
        </Grid>
        <Grid size={fullScreen ? 12 : 6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">City/District</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="City/District"
            />
          </FormControl>
        </Grid>
        <Grid size={fullScreen ? 12 : 6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Ward</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Ward"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Divider textAlign="left">To</Divider>
      <Grid container spacing={1}>
        <Grid size={fullScreen ? 12 : 6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Country</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Country"
            />
          </FormControl>
        </Grid>
        <Grid size={fullScreen ? 12 : 6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">State/Province</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="State/Province"
            />
          </FormControl>
        </Grid>
        <Grid size={fullScreen ? 12 : 6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">City/District</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="City/District"
            />
          </FormControl>
        </Grid>
        <Grid size={fullScreen ? 12 : 6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Ward</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Ward"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
