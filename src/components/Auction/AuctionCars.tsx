import { useMemo, useState, useEffect, ChangeEvent } from "react";
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
import MileageFilter from "./elements/MileageFilter";
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import Groups2Icon from '@mui/icons-material/Groups2';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DataWidget from "../../utils/DataWidget";
import { useFetcher } from "../../redux/api";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const AuctionCars = () => {
    const matcheBigDevices = useMediaQuery('(min-width:600px)');
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const [searchQuerry, setSearchQuerry] = useState(queryParams.get('keyword') || '')
    const [currentPage, setCurrentPage] = useState<number>(Number(queryParams.get('page')) || 1);
    const queryString = `?${queryParams.toString()}`;
    const url = `/auction${queryString}`;
    const { data, isError, isLoading } = useFetcher(url);
    const { auctionCars, paginationDetails } = useMemo(() => {
        if (data?.data?.length) {
          return { auctionCars: data?.data, paginationDetails: data?.paginationDetails };
        }
        return { auctionCars: [], paginationDetails: {} };
      }, [data?.data]);

      useEffect(() => {
        if (queryParams.toString() !== '') { 
          window.scrollTo(0, 280);
        }
      }, [location.search]);

    const handleSearchAuction = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchQuerry(value);

        if (value.trim() !== '') {
            if(queryParams.get('page')){
                queryParams.set('page', "1");
            }
            queryParams.set('keyword', value);
          } else {
            queryParams.delete('keyword');
          }
          const newSearch = queryParams.toString() ? `?${queryParams.toString()}` : '';
        
          navigate(newSearch)
    }

    const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
        queryParams.set('page', page.toString());
        navigate(`?${queryParams.toString()}`);
      };

    const handleYearFilter = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if(queryParams.get('page')){
            queryParams.set('page', "1");
        }
        queryParams.set('year', value);
        navigate(`?${queryParams.toString()}`);
      };

    const handleBrandFilter = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if(queryParams.get('page')){
            queryParams.set('page', "1");
        }
        queryParams.set('brand', value);
        navigate(`?${queryParams.toString()}`);
      };

    const handleMileageFilter = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if(queryParams.get('page')){
            queryParams.set('page', "1");
        }
        queryParams.set('mileage', value);
        navigate(`?${queryParams.toString()}`);
      };

    const handleOldestSort = (_event: React.ChangeEvent<unknown>) => {
        if(queryParams.get('page')){
            queryParams.set('page', "1");
        }
        queryParams.set('sortBy', "createdAt");
        queryParams.set('sortOrder', "asc");
        navigate(`?${queryParams.toString()}`);
    };

    const handleRemoveSort = (_event: React.ChangeEvent<unknown>) => {
        if(queryParams.get('page')){
            queryParams.set('page', "1");
        }
        if(queryParams.get('sortBy') && queryParams.get('sortOrder')) {
            queryParams.delete('sortBy');
            queryParams.delete('sortOrder');
        }
        
        navigate(`?${queryParams.toString()}`);
    };

  return (
    <Box>
        <Card
        sx={{
            padding: 3,
            marginTop: 4,
            display: "flex",
            flexDirection: matcheBigDevices ? "row" : "column",
            justifyContent: "space-between",
            alignItems: matcheBigDevices ? "center" : "start",
            gap: matcheBigDevices ? 0 : 5
        }}
        >
            <Box>
                <Typography variant="h4" color="primary" marginBottom={2} fontWeight='bold'>Auction Cars</Typography>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit"></Link>
                    <Typography color="text.primary">Auction</Typography>
                </Breadcrumbs>
            </Box>        
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
                    <YearFilter filteredYear={queryParams.get('year')} handleFilterYear={handleYearFilter}/>
                    <BrandFilter filteredBrand={queryParams.get('brand')} handleFilterBrand={handleBrandFilter}/>
                    <MileageFilter filteredMileage={queryParams.get('mileage')} handleFilterMileage={handleMileageFilter}/>
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
                    value={searchQuerry}
                    onChange={handleSearchAuction}
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
                         {paginationDetails?.availableData && <Typography variant="h6" color="initial">{paginationDetails?.availableData} {paginationDetails?.availableData == 1 ? 'Car' : 'Cars'}</Typography>}
                        </Grid>
                        <Grid item xs={8} md={6}>
                            <TextField
                            fullWidth
                            id="outlined-select-currency"
                            select
                            label="Sort By"
                            defaultValue="Latest"
                            >
                                <MenuItem selected value="Latest" onClick={handleRemoveSort}>Latest</MenuItem>
                                <MenuItem value="Oldest" onClick={handleOldestSort}>Oldest</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid> 
                    <DataWidget
                        title="Auction car"
                        isLoading={isLoading} 
                        isError={isError}
                        isEmpty={!auctionCars?.length}
                    >
                        { auctionCars.map((car: any, index: number) =>
                        (<Card
                        sx={{
                            padding: 2,
                            marginTop: 4,
                            border: '1px solid #b0e0e6'
                        }}
                        key={index}
                        >
                            <Stack direction={matcheBigDevices ? "row" : "column"} gap={3}>
                                <img src={car.carImage} alt="" width={matcheBigDevices ? "50%" : "100%"} style={{borderRadius: '5px'}}/>
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
                                        {car.carName}
                                    </Typography>
                                    <Typography variant="body1" color="primary" fontWeight="bold">
                                        {parseInt(car.carPrice).toLocaleString()} Rwf
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
                                            <ElectricCarIcon color="primary"/>
                                            {car.transmission}
                                        </Stack>
                                        <Stack direction="row" fontSize="medium" alignItems="center" gap={1}>
                                            <Groups2Icon color="primary"/>
                                            {car.passengerCapacity}
                                        </Stack>
                                    </Stack>  
                                    <Divider />
                                    <NavLink to={`/auction/${car._id}`} style={{ textDecoration: "none" }}>
                                        <Link
                                            underline="none"
                                            sx={{
                                                fontSize: '15px',
                                                display: 'flex',
                                                cursor: 'pointer',
                                                alignItems: 'center',
                                                gap: "5px",
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            View Details
                                            <ArrowRightAltIcon />
                                        </Link>
                                    </NavLink>
                                </Stack>
                            </Stack>
                        </Card>
                        ))}
                    </DataWidget>
                    <Stack spacing={2} justifyContent="center" alignItems="center" marginTop={5}>
                        <Pagination
                            count={paginationDetails?.totalPages}
                            page={currentPage}
                            color="primary"
                            variant="outlined"
                            shape="rounded"
                            onChange={handlePageChange}
                        />
                    </Stack>
                </Card>
            </Grid>
        </Grid>
    </Box>
  )
}

export default AuctionCars