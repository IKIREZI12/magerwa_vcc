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
import { carBrandsData } from "../data/CarBrands";

interface BrandFilterProps {
  filteredBrand: string | null,
  handleFilterBrand : (event: any) => void
}

const BrandFilter : FC<BrandFilterProps> = ({ filteredBrand, handleFilterBrand }) => {
    const [showMore, setShowMore] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredLabels, setFilteredLabels] = useState(carBrandsData.slice(0, 4));
    const [noResults, setNoResults] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState<string | null>(filteredBrand || carBrandsData[0]);
  
    const handleSeeMoreClick = () => {
        setShowMore(!showMore);
        setFilteredLabels(showMore ? carBrandsData.slice(0, 4) : carBrandsData);
    };
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchText = event.target.value;
        setSearchTerm(newSearchText);
        if (newSearchText.trim() === '') {
          setFilteredLabels(carBrandsData.slice(0, 4));
        } else {
          filterLabels(newSearchText);
        }
      };

      const handleLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedLabel(event.target.value);
      };
    
      const filterLabels = (searchText: string) => {
        const filtered = carBrandsData.filter(label =>
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
            <Typography color="initial" variant="body1" fontWeight='bold'>Brand</Typography>
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
                        onClick={handleFilterBrand}
                      />
                    } 
                    label={label} 
                  />
                ))
                ) : (
                <Typography paddingY={3} color="red">{noResults && 'Brand not found'}</Typography>
            )}
            {carBrandsData.length > 4 && (
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

export default BrandFilter