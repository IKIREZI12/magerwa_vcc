import {
    Box,
    Card,
    Typography,
    Breadcrumbs,
    Link,
} from "@mui/material"
const AuctionCars = () => {
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
    </Box>
  )
}

export default AuctionCars