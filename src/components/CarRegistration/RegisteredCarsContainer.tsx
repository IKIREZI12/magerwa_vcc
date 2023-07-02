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
} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import DataWidget from "../../utils/DataWidget";
import { useFetcher } from "../../redux/api";
import { useLocation, useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const RegisteredCarsContainer = () => {
    const matcheBigDevices = useMediaQuery('(min-width:600px)');
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const [searchQuerry, setSearchQuerry] = useState(queryParams.get('keyword') || '')
    const [currentPage, setCurrentPage] = useState<number>(Number(queryParams.get('page')) || 1);
    const queryString = `?${queryParams.toString()}`;
    const url = `/registercar/userCars${queryString}`;
    const { data, isError, isLoading } = useFetcher(url);
    const { yourCars, paginationDetails } = useMemo(() => {
        if (data?.data?.length) {
          return { yourCars: data?.data, paginationDetails: data?.paginationDetails };
        }
        return { yourCars: [], paginationDetails: {} };
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

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
        queryParams.set('page', page.toString());
        navigate(`?${queryParams.toString()}`);
      };

    const handleOldestSort = (event: React.ChangeEvent<unknown>) => {
        if(queryParams.get('page')){
            queryParams.set('page', "1");
        }
        queryParams.set('sortBy', "createdAt");
        queryParams.set('sortOrder', "asc");
        navigate(`?${queryParams.toString()}`);
    };

    const handleRemoveSort = (event: React.ChangeEvent<unknown>) => {
        console.log(event)
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
                <Typography variant="h4" color="primary" marginBottom={2} fontWeight='bold'>Your Registered Cars</Typography>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit"></Link>
                    <Typography color="text.primary">Registered Cars</Typography>
                </Breadcrumbs>
            </Box>       
        </Card>
        <Grid container spacing={3}>

            <Grid item xs={12}> 
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
                        title="Registered car"
                        isLoading={isLoading} 
                        isError={isError}
                        isEmpty={!yourCars?.length}
                        customEmptyMessage= "You don't have any registered car yet!"
                    >
                        <Grid container>
                        { yourCars.map((car: any, index: number) =>
                        (<Grid item xs={12} md={4}
                        sx={{
                            padding: 2,
                            marginTop: 4,
                            border: '1px solid #b0e0e6',
                            position: 'relative',
                        }}
                        key={index}
                        >
                            {
                            car.isCleared &&
                                <div
                                style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                }}
                            >
                                <CheckCircleIcon sx={{ fontSize: 48, color: '#90EE90' }} />
                            </div>
                            }
                            <Stack direction="column" gap={3}>
                                <img src={car.carImage} alt="" width="100%" height={250} style={{borderRadius: '5px', objectFit: "cover"}}/>
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
                                </Stack>
                            </Stack>
                        </Grid>
                        ))}
                        </Grid>
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

export default RegisteredCarsContainer