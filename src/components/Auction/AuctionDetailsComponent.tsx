import { useMemo } from "react";
import {
    Box,
    Card,
    Typography,
    Breadcrumbs,
    Grid,
    Stack,
    Divider,
    useMediaQuery,
    Link,
} from "@mui/material"
import FeatureLabel from "./elements/FeatureLabel"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import { useFetcher } from "../../redux/api";
import { useParams, NavLink } from "react-router-dom";
import DataWidget from "../../utils/DataWidget";
import IframeComponent from "./elements/IframeComponent";

const AuctionDetailsComponent = () => {
    const { id } = useParams();
    const matcheBigDevices = useMediaQuery('(min-width:600px)');
    const { data, isError, isLoading } = useFetcher(`/auction/carDetails?carId=${id}`);

    const { detailedCar } = useMemo(() => {
        if (data?.data?.length) {
          return { detailedCar: data?.data };
        }
        return { detailedCar: {} };
      }, [data?.data]);

    const originalDate = new Date(detailedCar?.auctionDate);
    const formattedDate = originalDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    });

    const date = new Date(detailedCar?.auctionTime);
    const formattedTime = date.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
    });
  return (
    <DataWidget
        title="Auction car"
        isLoading={isLoading} 
        isError={isError}
        isEmpty={!detailedCar}
    >   
    <Box>
        <Card
            sx={{
                padding: 3,
                marginTop: 4
            }}
            >
                <Typography variant="h5" color="primary" marginBottom={2} fontWeight='bold'>{detailedCar.carName}</Typography>
                <Breadcrumbs aria-label="breadcrumb">
                    <NavLink to="/auction" style={{ textDecoration: "none", color: "grey" }}>
                        <Link color="inherit" underline="hover">Auction</Link>
                    </NavLink>
                    <Typography color="text.primary">Car Detail</Typography>
                </Breadcrumbs>
        </Card>
        <Card
            sx={{
                padding: 3,
                marginTop: 2
            }}
            >
            <img src={detailedCar.carImage} alt="car" width="100%"/>
            <Grid container spacing={0}>
              <Grid item xs={12} md={8}>
                <Stack
                gap={5}
                sx={{
                    padding: matcheBigDevices ? 3 : 0,
                    marginTop: 2
                }}
                >
                        <Box>
                            <Typography variant="h6" color="primary" marginBottom={3} fontWeight='bold'>Features</Typography>
                            <Stack direction="row" gap={2} sx={{ flexWrap: 'wrap' }}>
                                {
                                    detailedCar.features?.map((feature : string, index: number) => {
                                        return (
                                        <Box key={index}>
                                            <FeatureLabel labelName={feature}/>
                                        </Box>  
                                        )
                                    })
                                }
                            </Stack>
                        </Box> 
                        <Box>
                            <Typography variant="h6" color="primary" marginBottom={3} fontWeight='bold'>Auction Details</Typography>
                            <Stack gap={1} marginTop={2}>
                                <Stack direction="row" gap={5} alignItems="center">
                                    <Typography variant="body2" color="initial">Date :</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{formattedDate}</Typography>
                                </Stack>
                                <Stack direction="row" gap={5} alignItems="center">
                                    <Typography variant="body2" color="initial">Time :</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{formattedTime}</Typography>
                                </Stack>
                                <Stack direction="row" gap={5} alignItems="center">
                                    <Typography variant="body2" color="initial">Location :</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.auctionLocation}</Typography>
                                </Stack>
                                <Box>
                                    <IframeComponent iframeString={detailedCar.locationMap}/>
                                </Box>
                             </Stack>
                        </Box> 
                        <Box>
                            <Typography variant="h6" color="primary" marginBottom={3} fontWeight='bold'>Contact Info</Typography>
                            <Stack direction="row" justifyContent="center" gap={2} sx={{ flexWrap: 'wrap', background: "#55BDB3", padding: 2, borderRadius: 1 }}>
                                <Stack direction="row" gap={1} alignItems="center" sx={{ borderRight: matcheBigDevices ? '3px solid' : 'none', paddingRight: matcheBigDevices ? 2 : 0 }}>
                                    <PhoneInTalkIcon />
                                    <Typography variant="body1" color="initial">{detailedCar.contactPhone1} / {detailedCar.contactPhone2}</Typography>
                                </Stack>
                                <Stack direction="row" gap={1} alignItems="center">
                                    <EmailIcon />
                                    <Typography variant="body1" color="initial">{detailedCar.contactEmail}</Typography>
                                </Stack>
                            </Stack>
                        </Box>  
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
              <Box
                sx={{
                    padding: matcheBigDevices ? 3 : 0,
                    marginTop: 2
                }}>
                    <Typography 
                    variant="body1" 
                    color="initial"
                    sx={{
                        border: "1px solid #55BDB3",
                        padding: 1,
                        color: "#55BDB3",
                        textAlign: "center",
                        fontWeight: "bold",
                        borderRadius: 1
                    }}
                    >
                        {parseInt(detailedCar.carPrice).toLocaleString()} Rwf
                    </Typography> 
                    <Card
                    sx={{
                        background: '#F0F8F8',
                        marginTop: 4,
                        padding: 3,
                    }}
                    >
                        <Box>
                            <Typography variant="body1" fontWeight="bold" color="initial">Car Details</Typography>
                            <Stack gap={1} marginTop={2}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Brand</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.brand}</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Model</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.model}</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Condition</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.condition}</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Year</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.year}</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Body Type</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.bodyType}</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Seats</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.passengerCapacity} People</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Exterior Color</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.exteriorColor}</Typography>
                                </Stack>
                                <Divider color="initial" sx={{ marginTop: 1 }}/>
                            </Stack>
                        </Box>

                        <Box sx={{ marginTop: 4 }}>
                            <Typography variant="body1" fontWeight="bold" color="initial">Engine</Typography>
                            <Stack gap={1} marginTop={2}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Fuel Type</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.fuelType}</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Mileage</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.mileage} km</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Trasmission</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.transmission}</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Drivetrain</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.drivetrain}</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Power</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.power} hp</Typography>
                                </Stack>
                                <Divider color="initial" sx={{ marginTop: 1 }}/>
                            </Stack>
                        </Box>

                        <Box sx={{ marginTop: 4 }}>
                            <Typography variant="body1" fontWeight="bold" color="initial">Dimension</Typography>
                            <Stack gap={1} marginTop={2}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Length</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.length} mm</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Width</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.width} mm</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Height</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.height} mm</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Cargo Volume</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">{detailedCar.cargoVolume} L</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                        
                        
                    </Card>
                </Box>
              </Grid>
            </Grid>
            
        </Card>
    </Box>
    </DataWidget>
  )
}

export default AuctionDetailsComponent