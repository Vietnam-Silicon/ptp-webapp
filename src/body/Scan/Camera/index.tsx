import React, { useState } from 'react';
import Scanner from 'react-qr-barcode-scanner';
import { styled } from '@mui/material/styles';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Slide,
  Backdrop,
  CircularProgress,
  Alert,
  AlertTitle,
} from '@mui/material';

const Transition = React.forwardRef(
  (
    props: any & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);

const StyledScanner = styled('div')`
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
  video {
    display: block;
  }
`;

const Index = (props: any) => {
  const { open, close, getData } = props;
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <Dialog
        fullScreen={true}
        maxWidth="md"
        open={open}
        onClose={close}
        TransitionComponent={Transition}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{ style: { width: '100%', maxWidth: 'none' } }}
      >
        <DialogContent dividers>
          <StyledScanner>
            <Scanner
              stopStream={true}
              onUpdate={(err, result) => {
                if (result) {
                  getData(result?.getText());
                  setData(result?.getText());
                } else {
                  // setTimeout(() => {
                  //   close();
                  //   setLoading(true);
                  // }, 5000);
                  // setTimeout(() => {
                  //   setLoading(false);
                  // }, 10000);
                }
              }}
            />
          </StyledScanner>
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            {data
              ? `Yahoo ${data}`
              : 'Center your bar code in center of camera.'}
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Index;
