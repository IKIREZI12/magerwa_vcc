import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import {
  Paper,
  Typography,
  Box,
  Button, 
} from "@mui/material"

interface VerifiedProps {
  // Add any props if needed
}

const Verified: React.FC<VerifiedProps> = () => {
    
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
      }}
    >
      <Paper
        sx={{
          width: '50%',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem',
          borderRadius: '1.5rem',
          border: '1px solid #55BDB3',
        }}
      >
        <DoneOutlineIcon style={{ fontSize: '3rem', color: '#55BDB3' }} />

        <Typography variant="body1" style={{ marginBottom: '1rem', marginTop: '1rem' }}>
          Email verified successfully!
        </Typography>
        <Button
          onClick={() => window.close()}
          sx={{
            fontSize: '0.8rem',
            backgroundColor: '#55BDB3',
            color: '#ffffff',
            borderRadius: '50px',
            padding: '0.5rem 1rem',
            boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              boxShadow: 'none',
            },
          }}
          variant="contained"
        >
          Close this page
        </Button>
      </Paper>
    </Box>
    
  );
};

export default Verified;
