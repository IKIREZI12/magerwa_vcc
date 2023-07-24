import { useState, ChangeEvent, FC } from 'react';
import {
    Card,
    Typography,
    Link,
    FormGroup,
    FormControlLabel,
    Radio,
    Stack,
    Divider, TextField,
} from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { carMileageData } from "../data/CarMileage";

interface MileageFilterProps {
  filteredMileage: string | null,
  handleFilterMileage : (event: any) => void
}

const MileageFilter : FC<MileageFilterProps> = ({ filteredMileage, handleFilterMileage }) => {
    const [showMore, setShowMore] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredLabels, setFilteredLabels] = useState(carMileageData.slice(0, 4));
    const [noResults, setNoResults] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState<string | null>(filteredMileage || carMileageData[0]);
  
    const handleSeeMoreClick = () => {
        setShowMore(!showMore);
        setFilteredLabels(showMore ? carMileageData.slice(0, 4) : carMileageData);
    };
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchText = event.target.value;
        setSearchTerm(newSearchText);
        if (newSearchText.trim() === '') {
          setFilteredLabels(carMileageData.slice(0, 4));
        } else {
          filterLabels(newSearchText);
        }
      };

      const handleLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedLabel(event.target.value);
      };
    
      const filterLabels = (searchText: string) => {
        const filtered = carMileageData.filter(label =>
            label.toLowerCase().includes(searchText.toLowerCase())
        );
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
            <Typography color="initial" variant="body1" fontWeight='bold'>Mileage</Typography>
            <KeyboardArrowDownIcon sx={{ transform: 'rotate(180deg)'}}/>
        </Stack>
        <Divider variant="fullWidth" color="white"/>
        <FormGroup sx={{padding: 2}}>
            <TextField
            id="search"
            type="search"
            label="Search brand"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
            />
            {filteredLabels.length > 0 ? (
                filteredLabels.map((label, index) => (
                  <FormControlLabel 
                    key={index} 
                    control={
                      <Radio
                        checked={selectedLabel === label}
                        onChange={handleLabelChange}
                        value={label}
                        name="radio-buttons"
                        onClick={handleFilterMileage}
                      />
                    } 
                    label={label} 
                  />
                ))
                ) : (
                <Typography paddingY={3} color="red">{noResults && 'Brand not found'}</Typography>
            )}
            {carMileageData.length > 4 && (
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

export default MileageFilter