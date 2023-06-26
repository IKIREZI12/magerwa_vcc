import { FC, ReactNode } from 'react';
import { 
    Alert, 
    AlertTitle, 
    Container, 
    Stack, 
    Typography, 
    CircularProgress 
} from '@mui/material';


interface DataWidgetProps {
    title: string,
    isLoading: boolean,
    isEmpty: boolean,
    isError: boolean | null,
    children: ReactNode;
    customEmptyMessage?: string,
    customLoaders?: ReactNode
}

const DataWidget: FC<DataWidgetProps> = ({ title, isLoading, isError = null, isEmpty, children, customEmptyMessage, customLoaders }) => {
    if (isLoading) {
        if (customLoaders) return customLoaders;
        else {
            return (
                <Stack justifyContent="center" alignItems="center" spacing={4} sx={{ py: 2 }}>
                    <CircularProgress size={40} color="secondary" />
                    <Typography>{title ? title : 'Items'} loading, please wait...</Typography>
                </Stack>
            );
        }
        
    }
    if (isError) {
        return (
            <Container sx={{ py: 2 }}>
                <Alert severity="error" variant="outlined">
                    <AlertTitle>Error!</AlertTitle>
                    {isError || 'Oops, Something went wrong due to unknown error. Try to refresh the page and try again.'}
                </Alert>
            </Container>
        );
    }
    if (isEmpty) {
        return (
            <Container sx={{ py: 2 }}>
                <Alert severity="info" variant="outlined">
                    <AlertTitle>No {title ? title?.toLowerCase() : 'items'} found!</AlertTitle>
                    {customEmptyMessage
                        ? customEmptyMessage
                        : `There are no ${title ? title?.toLowerCase() : 'items'} in our
          system yet!`}
                </Alert>
            </Container>
        );
    }
    return <>{children}</>;
};

export default DataWidget;