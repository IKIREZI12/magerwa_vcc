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
import Car1 from '../../assets/cars/car1.jpg'
import { detailedFeatures } from "./elements/DetailedFeatures"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';

const AuctionDetailsComponent = () => {
    const matcheBigDevices = useMediaQuery('(min-width:600px)');
  return (
    <Box>
        <Card
            sx={{
                padding: 3,
                marginTop: 4
            }}
            >
                <Typography variant="h5" color="primary" marginBottom={2} fontWeight='bold'>Mercedes-Benz AutoTrade UK</Typography>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" underline="hover" href="/auction">Auction</Link>
                    <Typography color="text.primary">Car Detail</Typography>
                </Breadcrumbs>
        </Card>
        <Card
            sx={{
                padding: 3,
                marginTop: 2
            }}
            >
            <img src={Car1} alt="car" width="100%"/>
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
                                    detailedFeatures.map((feature, index) => {
                                        return (
                                        <Box key={index}>
                                            <FeatureLabel labelName={feature.label}/>
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
                        50,000,000 Rwf
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
                                    <Typography variant="body2" color="initial" fontWeight="bold">BMW</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Model</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">Model 3</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Condition</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">New</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Year</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">2019</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Body Type</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">Sedan</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Seats</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">5 People</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Exterior Color</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">Red</Typography>
                                </Stack>
                                <Divider color="initial" sx={{ marginTop: 1 }}/>
                            </Stack>
                        </Box>

                        <Box sx={{ marginTop: 4 }}>
                            <Typography variant="body1" fontWeight="bold" color="initial">Engine</Typography>
                            <Stack gap={1} marginTop={2}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Fuel Type</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">Electric</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Mileage</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">340 km</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Trasmission</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">Automatic</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Year</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">2019</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Drivetrain</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">Rear-wheel drive</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Power</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">283 hp (211 KW)</Typography>
                                </Stack>
                                <Divider color="initial" sx={{ marginTop: 1 }}/>
                            </Stack>
                        </Box>

                        <Box sx={{ marginTop: 4 }}>
                            <Typography variant="body1" fontWeight="bold" color="initial">Battery and Charging</Typography>
                            <Stack gap={1} marginTop={2}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Battery Capacity</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">55.0 KWh</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Charge Speed</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">64 km/h</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Charge Port</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">Type 2</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Charge Time</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">330 minutes</Typography>
                                </Stack> 
                                <Divider color="initial" sx={{ marginTop: 1 }}/>
                            </Stack>
                        </Box>

                        <Box sx={{ marginTop: 4 }}>
                            <Typography variant="body1" fontWeight="bold" color="initial">Dimension</Typography>
                            <Stack gap={1} marginTop={2}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Length</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">4694 mm</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Width</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">1849 mm</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Height</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">1443 mm</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body2" color="initial">Cargo Volume</Typography>
                                    <Typography variant="body2" color="initial" fontWeight="bold">542 L</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                        
                        
                    </Card>
                </Box>
              </Grid>
            </Grid>
            
        </Card>
    </Box>
  )
}

export default AuctionDetailsComponent