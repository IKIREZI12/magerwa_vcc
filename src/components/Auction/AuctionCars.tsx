import {
    Box,
    Card,
    Typography,
    Breadcrumbs,
    Grid,
    Link,
    Stack,
    MenuItem,
    InputAdornment,
    Pagination,
    useMediaQuery,
    TextField,
    Divider
} from "@mui/material"
import YearFilter from './elements/YearFilter';
import BrandFilter from './elements/BrandFilter';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import Groups2Icon from '@mui/icons-material/Groups2';
import WifiIcon from '@mui/icons-material/Wifi';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { auctionCars } from "./data/Cars";

const AuctionCars = () => {
    const matcheBigDevices = useMediaQuery('(min-width:600px)');
  return (
    <Box>
        <Card
        sx={{
            padding: 3,
            marginTop: 4
        }}
        >
            <Typography variant="h4" color="primary" marginBottom={2} fontWeight='bold'>Auction Cars</Typography>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/home">
                    Home
                </Link>
                <Typography color="text.primary">Auction</Typography>
            </Breadcrumbs>
        </Card>
        <Grid container spacing={3}>
            {
            matcheBigDevices &&
            <Grid item xs={4}>
                <Card
                sx={{
                    padding: 3,
                    marginTop: 4
                }}
                >
                    <Typography color="initial" variant="body1" marginBottom={1} fontWeight='bold'>Filter</Typography>
                    <Divider variant="fullWidth" color="initial"/>
                    <YearFilter />
                    <BrandFilter />
                </Card>
            </Grid>
            }
            <Grid item xs={12} md={8}> 
                <Card
                sx={{
                    padding: 3,
                    marginTop: 4
                }}
                >
                   <TextField
                    id="search"
                    type="search"
                    label="Search"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                        ),
                    }}
                    />
                    <Grid container alignItems="center" marginTop={3}>
                        <Grid item xs={4} md={6}>
                         <Typography variant="h6" color="initial">20 Cars</Typography>
                        </Grid>
                        <Grid item xs={8} md={6}>
                            <TextField
                            fullWidth
                            id="outlined-select-currency"
                            select
                            label="Sort By"
                            defaultValue="EUR"
                            >
                                <MenuItem value={10}>Increasing order (Default)</MenuItem>
                                <MenuItem value={20}>Decreasing order</MenuItem>
                                <MenuItem value={30}>Latest</MenuItem>
                                <MenuItem value={30}>Newest</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid> 
                    { auctionCars.map((car, index) =>
                    (<Card
                    sx={{
                        padding: 2,
                        marginTop: 4,
                        border: '1px solid #b0e0e6'
                    }}
                    key={index}
                    >
                        <Stack direction={matcheBigDevices ? "row" : "column"} gap={3}>
                            <img src={car.picture} alt="" width={matcheBigDevices ? "50%" : "100%"} style={{borderRadius: '5px'}}/>
                            <Stack gap={2}>
                                <Typography 
                                variant="body1" 
                                color="primary"
                                borderRadius={1}
                                paddingX={1} 
                                width={60}
                                fontSize="small"
                                textAlign="center"
                                border={2}
                                >
                                    {car.condition}
                                </Typography>
                                <Typography variant="body1" color="initial">
                                    {car.title}
                                </Typography>
                                <Typography variant="body1" color="primary" fontWeight="bold">
                                    {car.price}
                                </Typography>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" gap={4}>
                                    <Stack direction="row" fontSize="medium" alignItems="center" gap={1}>
                                        <BrandingWatermarkIcon color="primary"/>
                                        {car.brand}
                                    </Stack>
                                    <Stack direction="row" fontSize="medium" alignItems="center" gap={1}>
                                        <CalendarMonthIcon color="primary"/>
                                        {car.year}
                                    </Stack>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
                                    <Stack direction="row" fontSize="medium" alignItems="center" gap={1}>
                                        <LocalGasStationIcon color="primary"/>
                                        {car.fuelType}
                                    </Stack>
                                    <Stack direction="row" fontSize="medium" alignItems="center" gap={1}>
                                        <WifiIcon color="primary"/>
                                        {car.hasWifi ? 'WIFI' : 'None'}
                                    </Stack>
                                    <Stack direction="row" fontSize="medium" alignItems="center" gap={1}>
                                        <Groups2Icon color="primary"/>
                                        {car.passengerSize}
                                    </Stack>
                                </Stack>  
                                <Divider />
                                <Link
                                underline="none"
                                sx={{
                                    fontSize: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: "5px",
                                    fontWeight: 'bold'
                                }}
                                >
                                    View Details
                                    <ArrowRightAltIcon />
                                </Link>
                            </Stack>
                        </Stack>
                    </Card>
                    ))}
                    <Stack spacing={2} justifyContent="center" alignItems="center" marginTop={5}>
                        <Pagination count={3} color="primary" variant="outlined" shape="rounded" />
                    </Stack>
                </Card>
            </Grid>
        </Grid>
    </Box>
  )
}

export default AuctionCars