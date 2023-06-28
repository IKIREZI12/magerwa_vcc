import { useState, useEffect, ChangeEvent } from "react";
import {
    Box,
    Card, 
    Breadcrumbs,
    Link,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Stack,
    OutlinedInput,
    InputAdornment,
    FormGroup,
    useMediaQuery,
    Checkbox,
    Radio,
    TextField,
    Typography, Grid
} from "@mui/material";
import { LoadingButton } from '@mui/lab';
import ChooseFileImage from "./elements/ChooseFileImage";
import { carBrandsData } from "../Auction/data/CarBrands";
import { bodyTypesData } from "./elements/BodyTypes";
import { fuelTypesData } from "./elements/FuelTypes";
import { transmissionsData } from "./elements/TransmissionsData";
import { drivetrainTypesData } from "./elements/DriveTrains";
import { carFeaturesData } from "./elements/CarFeatures";
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';
import { RegisterCar } from "../../redux/thunks/registercar";

const initialState = { 
  carName: '',
  condition: '',
  bodyType: '',
  brand: '',
  model: '',
  year: '',
  passengerCapacity: '',
  exteriorColor: '',
  fuelType: '',
  mileage: '',
  transmission: '',
  drivetrain: '',
  engineCapacity: '',
  power: '',
  carPrice: '',
  carImage: '',
  features: [] as string[],
  length: '',
  width: '',
  height: '',
  cargoVolume: '', 
};

const CarRegistration = () => {
    const matcheBigDevices = useMediaQuery('(min-width:600px)');
    const [formData, setFormData] = useState(initialState);
    const [message, setMessage] = useState<string | null>('');
    const [messageColor, setMessageColor] = useState('initial');  
    const { success , loading, error } = useSelector((state : any) => state.carRegistration);
    const dispatch = useDispatch<any>();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    console.log("isSuccess", success);

    const handleSelectImage = (name: string, value: string) => {
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectFeature = (name: string, checked: boolean) => {
      if (checked) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          features: [...prevFormData.features, name],
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          features: prevFormData.features.filter((feature) => feature !== name),
        }));
      }
    };
  
    const handelSubmit = () =>{
      dispatch(RegisterCar(formData));
    }
  
    useEffect(() => { 
      if (success) {
        toast.success(success);
        setFormData(initialState)
        setMessage(null);
      } 
      else if (error) {
        setMessage(error);
        setMessageColor('#da0000');
      } 
      else {
        setMessage(null);
      }
    }, [loading, success, error]);

    useEffect(() => {
      const timer = setTimeout(() => {
        if (success) {
          window.location.href = "/yourcars";
        } 
      }, 3000);
      return () => clearTimeout(timer);
    }, [success]);

  return (
    <Box>
        <Card
        sx={{
            padding: 3,
            marginTop: 4
        }}
        >
            <Typography variant="h4" color="primary" marginBottom={2} fontWeight='bold'>Register your car</Typography>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit"></Link>
                <Typography color="text.primary">Car Registration</Typography>
            </Breadcrumbs>
        </Card>

        <Card
        sx={{
            padding: 3,
            marginTop: 4
        }}
        >
            <Typography variant="h6" color="primary" marginBottom={3} fontWeight='bold'>Car Details</Typography>
            <Grid container spacing={3} sx={{marginBottom: 3}}>
              <Grid item xs={12} md={8}>
                <TextField
                id="name"
                onChange={handleChange}
                name="carName"
                type="text"
                label="Car Name" 
                fullWidth         
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                    <FormLabel id="demo-row-radio-buttons-group-label">Condition</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        onChange={handleChange}
                        name="condition"
                    >
                        <FormControlLabel value="New" control={<Radio />} label="New" />
                        <FormControlLabel value="Used" control={<Radio />} label="Used" />
                    </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>


            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                onChange={handleChange}
                name="bodyType"
                label="Body Type"
                >
                  {
                    bodyTypesData.map((type, index) => (
                      <MenuItem value={type} key={index}>{type}</MenuItem>
                    ))
                  }
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                onChange={handleChange}
                name="brand"
                label="Brand"
                defaultValue="EUR"
                >
                  {
                    carBrandsData.map((brand, index) => (
                      <MenuItem value={brand} key={index}>{brand}</MenuItem>
                    ))
                  }
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id="name"
                  onChange={handleChange}
                  name="model"
                  type="text"
                  label="Model" 
                  fullWidth         
                />
              </Grid>
              <Grid item xs={12} md={4}>
              <TextField
                  id="name"
                  onChange={handleChange}
                  name="year"
                  type="text"
                  label="Year" 
                  fullWidth         
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                id="passenger"
                onChange={handleChange}
                name="passengerCapacity"
                label="Passenger Capacity" 
                type="number" 
                fullWidth        
                />
              </Grid>
              <Grid item xs={12} md={4}>
              <TextField
                  id="name"
                  onChange={handleChange}
                  name="exteriorColor"
                  type="text"
                  label="Exterior Color" 
                  fullWidth         
                />
              </Grid>
            </Grid>
        </Card>
        
        <Card
        sx={{
            padding: 3,
            marginTop: 2
        }}
        >
            <Typography variant="h6" color="primary" marginBottom={3} fontWeight='bold'>Engine Details</Typography>
        
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                onChange={handleChange}
                name="fuelType"
                label="Fuel Type"
                defaultValue="EUR"
                >
                  {
                    fuelTypesData.map((type, index) => (
                      <MenuItem value={type} key={index}>{type}</MenuItem>
                    ))
                  }
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">Mileage</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    onChange={handleChange}
                    name="mileage"
                    endAdornment={<InputAdornment position="start">km</InputAdornment>}
                    label="Amount"
                />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                onChange={handleChange}
                name="transmission"
                select
                label="Transmission"
                defaultValue="EUR"
                >
                  {
                    transmissionsData.map((type, index) => (
                      <MenuItem value={type} key={index}>{type}</MenuItem>
                    ))
                  }
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                onChange={handleChange}
                name="drivetrain"
                select
                label="Drivetrain"
                defaultValue="EUR"
                >
                  {
                    drivetrainTypesData.map((type, index) => (
                      <MenuItem value={type} key={index}>{type}</MenuItem>
                    ))
                  }
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">Engine Capacity</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    onChange={handleChange}
                    name="engineCapacity"
                    endAdornment={<InputAdornment position="start">cc</InputAdornment>}
                    label="Amount"
                />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">Power</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    onChange={handleChange}
                    name="power"
                    endAdornment={<InputAdornment position="start">hp</InputAdornment>}
                    label="Amount"
                />
                </FormControl>
              </Grid>
            </Grid>
        </Card>
       
        <Card
        sx={{
            padding: 3,
            marginTop: 2
        }}
        >
            <Typography variant="h6" color="primary" marginBottom={3} fontWeight='bold'>Dimension</Typography>
        
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">Length</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    onChange={handleChange}
                    name="length"
                    endAdornment={<InputAdornment position="start">mm</InputAdornment>}
                    label="Amount"
                />
                </FormControl>
              </Grid> 
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-amount">Width</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        onChange={handleChange}
                        name="width"
                        endAdornment={<InputAdornment position="start">mm</InputAdornment>}
                        label="Amount"
                    />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">Height</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    onChange={handleChange}
                    name="height"
                    endAdornment={<InputAdornment position="start">mm</InputAdornment>}
                    label="Amount"
                />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">Cargo Volume</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    onChange={handleChange}
                    name="cargoVolume"
                    endAdornment={<InputAdornment position="start">L</InputAdornment>}
                    label="Amount"
                />
                </FormControl>
              </Grid>
            </Grid>
        </Card>
        
        <Card
        sx={{
            padding: 3,
            marginTop: 2
        }}
        >
            <Typography variant="h6" color="primary" marginBottom={3} fontWeight='bold'>Features</Typography>
        
            <Grid container spacing={3}>
              {carFeaturesData.map((feature, index) => (
                <Grid item xs={12} md={3} key={index}>
                  <FormGroup>
                    <FormControlLabel 
                      control={<Checkbox />} 
                      label={feature} 
                      name={feature}
                      onChange={(e) => handleSelectFeature(feature, (e.target as HTMLInputElement).checked)}
                    />
                  </FormGroup>
                </Grid>
              ))}
            </Grid>
        </Card>

        <Card
        sx={{
            padding: 3,
            marginTop: 2
        }}
        >
            <Typography variant="h6" color="primary" marginBottom={3} fontWeight='bold'>Price</Typography>
        
            <Grid container spacing={3}>
              <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">Full Price</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    type="number"
                    onChange={handleChange}
                    name="carPrice"
                    endAdornment={<InputAdornment position="start">Rwf</InputAdornment>}
                    label="price"
                />
                </FormControl>
              </Grid>
            </Grid>
        </Card>

        <Card
        sx={{
            padding: 3,
            marginTop: 2
        }}
        >
            <Typography variant="h6" color="primary" marginBottom={3} fontWeight='bold'>Car Image</Typography>
        
            <Grid container spacing={3}>
              <Grid item xs={12}>
              <ChooseFileImage
                    selected={formData.carImage}
                    fullWidth={true}
                    title="Car Image"
                    onSelect={(selected) => handleSelectImage('carImage', selected)}
                />
              </Grid>
            </Grid>
        </Card>
        { message && <Typography variant="body1" textAlign="center" marginTop={4} marginBottom={-2} color={messageColor}>{message}</Typography> }
        <Stack justifyContent='center' alignItems="center" marginTop={5}>
            <LoadingButton variant="contained" loading={loading} onClick={handelSubmit} color="primary" sx={{ width: matcheBigDevices ? '40%' : '100%' }}>
                Register my car
            </LoadingButton>
        </Stack>
    </Box>
  )
}

export default CarRegistration