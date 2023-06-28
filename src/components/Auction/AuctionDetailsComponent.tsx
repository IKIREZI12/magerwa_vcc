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

    console.log(data);
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
                                    <Typography variant="body2" color="initial" fontWeight="bold">15th June 2023</Typography>
                                </Stack>
                                <Stack direction="row" gap={5} alignItems="center">
                                    <Typography variant="body2" color="initial">Time :</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">14 pm - 17 pm</Typography>
                                </Stack>
                                <Stack direction="row" gap={5} alignItems="center">
                                    <Typography variant="body2" color="initial">Location :</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">DownTown Street. Kigali, Rwanda</Typography>
                                </Stack>
                                <Box>
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.524683204947!2d30.054986173811802!3d-1.9428721980394905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5d652c054b9%3A0xf2b5b3bffeb7e9cf!2sDowntown!5e0!3m2!1sen!2srw!4v1686666460915!5m2!1sen!2srw" 
                                        width="100%" 
                                        height="300"
                                        style={{ border: "1px solid #55BDB3" }} 
                                        allowFullScreen
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </Box>
                             </Stack>
                        </Box> 
                        <Box>
                            <Typography variant="h6" color="primary" marginBottom={3} fontWeight='bold'>Contact Info</Typography>
                            <Stack direction="row" justifyContent="center" gap={2} sx={{ flexWrap: 'wrap', background: "#55BDB3", padding: 2, borderRadius: 1 }}>
                                <Stack direction="row" gap={1} alignItems="center" sx={{ borderRight: matcheBigDevices ? '3px solid' : 'none', paddingRight: matcheBigDevices ? 2 : 0 }}>
                                    <PhoneInTalkIcon />
                                    <Typography variant="body1" color="initial">+250788619790 / +250728619790</Typography>
                                </Stack>
                                <Stack direction="row" gap={1} alignItems="center">
                                    <EmailIcon />
                                    <Typography variant="body1" color="initial">magerwavcc@gmail.com</Typography>
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