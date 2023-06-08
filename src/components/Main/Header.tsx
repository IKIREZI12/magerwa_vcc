import {
    Grid, 
    Typography,
    Stack,
    SpeedDial,
    SpeedDialAction,
    Paper,
    useMediaQuery,
} from "@mui/material"
import LogoIcon from '../../assets/logo.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MessageIcon from '@mui/icons-material/Message';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const services = [
    'Import Tax Consultation',
    'Vehicle Inspection',
    'Customs Clearance',
    'Import Documentation',
    'Compliance Assistance',
    'Car registration',
  ];

const actions = [
{ icon: <LocalPhoneIcon />, name: '+250780808937' },
{ icon: <EmailIcon />, name: 'angelo@magerwavcc.rw' },
{ icon: <InstagramIcon />, name: 'Magerwa Rwanda' },
{ icon: <YouTubeIcon />, name: 'Magerwa Rwanda Official' },
];

const Header = () => {
    const matcheBigDevices = useMediaQuery('(min-width:600px)');

  return (
    <Grid container gap={5} sx={{paddingTop: 7}}>
        <Grid item xs={12} md={6}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
        }}
        >
           <Typography variant="h3" color="primary" fontWeight="bold">
             Register <br/> your car effortlessly and securely with us.
            </Typography> 
           <Typography variant="body1" color="initial">
             Welcome to our platform, where car enthusiasts like you can easily register the imported 
             vehicles you've purchased from abroad. Streamline the process and ensure compliance as you 
             provide the necessary information and documentation for your imported cars, 
             all in one convenient and user-friendly place.
            </Typography> 
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: { lg: 50, xs: 20 } , left: {lg: 80 } , right: { xs: 30} }}
                icon={<MessageIcon />}
                direction={matcheBigDevices ? "right" : "up"}
            >
                {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                />
                ))}
            </SpeedDial>
        </Grid>
        {
        matcheBigDevices &&
            <Grid item xs={3}
            sx={{
                display: 'flex',
                marginTop: 9
            }}
            > 
                <Paper elevation={5} sx={{ borderRadius: 3, width: 490, height: 240, position: 'absolute' }}>
                    <Grid container gap={2} justifyContent="center" padding={2} >
                        {services.map((service, index) => (
                            <Grid item key={index} sx={{ background: "#F0F8F8", borderRadius: 1}}>
                                <Stack direction="row" gap={1} padding={2} justifyContent="space-between" alignItems="center">
                                    <CheckCircleIcon color="primary"/>
                                    <Typography variant="body1" color="initial">{service}</Typography>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
                <img  src={LogoIcon}  alt="car" style={{position: 'relative'}}/>
            </Grid>
        }
    </Grid>
  )
}

export default Header