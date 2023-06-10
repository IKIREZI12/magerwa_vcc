import { useState } from 'react';
import {
    Card,
    Typography,
    Link,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Stack,
    Divider, TextField,
} from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { yearsData } from "../data/Years";


const YearFilter = () => {
    const [showMore, setShowMore] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredLabels, setFilteredLabels] = useState(yearsData.slice(0, 4));
    const [noResults, setNoResults] = useState(false);
  
    const handleSeeMoreClick = () => {
        setShowMore(!showMore);
        setFilteredLabels(showMore ? yearsData.slice(0, 4) : yearsData);
    };
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchText = event.target.value;
        setSearchTerm(newSearchText);
        if (newSearchText.trim() === '') {
          setFilteredLabels(yearsData.slice(0, 4));
        } else {
          filterLabels(newSearchText);
        }
      };
    
      const filterLabels = (searchText: string) => {
        const filtered = yearsData.filter(label => label === searchText);
        if (filtered.length > 0) {
          setFilteredLabels(filtered.slice(0, 4));
          setNoResults(false);
        } else {
          setFilteredLabels([]);
          setNoResults(true);
        }
      };

  return (

    <Card
    sx={{
        background: '#F0F8F8',
        marginTop: 2
    }}
    >
        <Stack direction="row" justifyContent="space-between" alignItems="center" paddingX={2} paddingY={1}>
            <Typography color="initial" variant="body1" fontWeight='bold'>Year</Typography>
            <KeyboardArrowDownIcon sx={{ transform: 'rotate(180deg)'}}/>
        </Stack>
        <Divider variant="fullWidth" color="white"/>
        <FormGroup sx={{padding: 2}}>
            <TextField
            id="search"
            type="search"
            label="Search year"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
            />
            {filteredLabels.length > 0 ? (
                filteredLabels.map((label, index) => (
                    <FormControlLabel key={index} control={<Checkbox />} label={label} />
                ))
                ) : (
                <Typography paddingY={3} color="red">{noResults && 'Year not found'}</Typography>
            )}
            {yearsData.length > 4 && (
                <Link
                fontWeight="bold"
                underline="none"
                marginTop={1}
                sx={{
                    cursor: 'pointer'
                }}
                onClick={handleSeeMoreClick}
                >
                {showMore ? 'See less' : 'See more'}
                </Link>
            )} 
        </FormGroup> 
    </Card>
 
  )
}

export default YearFilter