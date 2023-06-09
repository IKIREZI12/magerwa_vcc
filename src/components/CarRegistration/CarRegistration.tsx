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
    Typography, Grid, Button
} from "@mui/material"
import ChooseFileImage from "./elements/ChooseFileImage"

const CarRegistration = () => {
    const matcheBigDevices = useMediaQuery('(min-width:600px)');
    const handleSelect = () => {
        console.log("Selected")
    }

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
                <Link underline="hover" color="inherit" href="/home">
                    Home
                </Link>
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
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="new" control={<Radio />} label="New" />
                        <FormControlLabel value="used" control={<Radio />} label="Used" />
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
                label="Body Type"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Brand"
                defaultValue="EUR"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Model"
                defaultValue="EUR"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Year"
                defaultValue="EUR"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                id="passenger"
                label="Passenger Capacity" 
                type="number" 
                fullWidth        
                />
              </Grid>
              <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Exterior Color"
                defaultValue="EUR"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </TextField>
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
                label="Fuel Type"
                defaultValue="EUR"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">Mileage</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    endAdornment={<InputAdornment position="start">km</InputAdornment>}
                    label="Amount"
                />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Transmission"
                defaultValue="EUR"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Drivetrain"
                defaultValue="EUR"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">Engine Capacity</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
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
              <Grid item xs={12} md={3}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Power Steering" />
                    <FormControlLabel control={<Checkbox />} label="AC" />
                    <FormControlLabel control={<Checkbox />} label="Alarm" />
                    <FormControlLabel control={<Checkbox />} label="Bluetooth" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Heated Seats" />
                    <FormControlLabel control={<Checkbox />} label="WIFI" />
                    <FormControlLabel control={<Checkbox />} label="Cruise Control" />
                    <FormControlLabel control={<Checkbox />} label="Front Parking Sensor" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Rear Parking Sensor" />
                    <FormControlLabel control={<Checkbox />} label="Roof Rack" />
                    <FormControlLabel control={<Checkbox />} label="Power Windows" />
                    <FormControlLabel control={<Checkbox />} label="Sunroof" />
                </FormGroup>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="USB Port" />
                    <FormControlLabel control={<Checkbox />} label="Sound System" />
                    <FormControlLabel control={<Checkbox />} label="Memory Seat" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Other" />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Write another feature here"
                    multiline
                    fullWidth
                    rows={4}
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
            <Typography variant="h6" color="primary" marginBottom={3} fontWeight='bold'>Price</Typography>
        
            <Grid container spacing={3}>
              <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">Full Price</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    type="number"
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
                <ChooseFileImage onSelect={handleSelect}/>
              </Grid>
            </Grid>
        </Card>
        <Stack justifyContent='center' alignItems="center" marginTop={5}>
            <Button variant="contained" color="primary" sx={{ width: matcheBigDevices ? '40%' : '100%' }}>
            Register my car
            </Button>
        </Stack>
    </Box>
  )
}

export default CarRegistration