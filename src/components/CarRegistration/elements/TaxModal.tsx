import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import { useState } from 'react';

interface TaxModalProps {
  title: string;
  subTitle: string;
  open: boolean;
  handleClose: () => void;
  handleClickOk: () => void;
  item?: string;
  hardWarning?: string;
}

const modalStyle = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '300px',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const TaxModal: React.FC<TaxModalProps> = ({
  title,
  subTitle,
  open,
  handleClose,
  handleClickOk,
  item,
  hardWarning,
}) => {
  const [okText, setOkText] = useState('I accept');
  const [showHardWarning, setShowHardWarning] = useState(false);

  return (
    <Modal
      open={open}
      keepMounted
      onClose={() => {
        setOkText('Ok');
        setShowHardWarning(false);
        handleClose();
      }}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...modalStyle }}>
        <Typography variant="h5" id="child-modal-title">
          {title}
        </Typography>
        <Box sx={{ height: 10 }}></Box>
        <Typography id="child-modal-description">{subTitle}</Typography>

        {item && (
          <Typography
            variant="h6"
            id="child-modal-title"
            sx={{ textAlign: 'center', mt: 2, mb: 3, fontWeight: '600' }}
          >
            {item}
          </Typography>
        )}
        <Box sx={{ height: item ? 0 : 20 }}></Box>
        {showHardWarning && (
          <Typography color="error" sx={{ textAlign: 'center', my: 2, fontWeight: '600' }}>
            {hardWarning}
          </Typography>
        )}
        <Grid container>
          <Grid item xs>
            <Button
              onClick={() => {
                setOkText('Ok');
                setShowHardWarning(false);
                handleClose();
              }}
              variant="outlined"
              color="primary"
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                if (hardWarning && okText === 'Ok') {
                  setOkText('Continue');
                  setShowHardWarning(true);
                  return;
                }
                setOkText('Ok');
                setShowHardWarning(false);
                handleClickOk();
              }}
              variant="outlined"
              color={showHardWarning ? 'error' : 'primary'}
            >
              {okText}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default TaxModal;
