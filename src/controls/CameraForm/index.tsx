'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Box,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ImageThumbnail } from './ImageThumbnail';
import { Delete } from '@mui/icons-material';
import { findIndex, orderBy } from 'lodash-es';

const MAX_IMAGES = 3;

interface PhotoType {
  url: string;
  id: string;
}

const generateInitialImages = (): PhotoType[] => [
  { id: `${Date.now()}`, url: '' },
];

export const CameraForm = () => {
  const [open, setOpen] = useState(false);
  const [photos, setPhotos] = useState<PhotoType[]>(generateInitialImages());
  const [selectedImgId, setSelectedImgId] = useState<string | undefined>();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    return () => stopCamera();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const permission = await navigator.permissions.query({
        name: 'camera' as PermissionName,
      });
      if (permission.state === 'granted') {
        startCamera();
      } else if (permission.state === 'prompt') {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
        });
        mediaStream.getTracks().forEach((track) => track.stop());
        startCamera();
      } else {
        alert(
          'Camera access is denied. Please enable it in your browser settings.'
        );
      }
    } catch (error) {
      console.error('Error requesting camera permission:', error);
      alert('Unable to access camera. Please check your settings.');
    }
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      });
      setStream(mediaStream);
      if (videoRef.current) videoRef.current.srcObject = mediaStream;
    } catch (error) {
      console.error('Error starting camera:', error);
    }
  };

  const stopCamera = () => {
    stream?.getTracks().forEach((track) => track.stop());
    setStream(null);
  };

  const handleOpenCamera = () => {
    setOpen(true);
    requestCameraPermission();
  };

  const handleClose = () => {
    stopCamera();
    setOpen(false);
  };

  const takePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const imgUrl = canvas.toDataURL('image/png');
    let selectedImageId = '';
    setPhotos((prevPhotos) => {
      const updatedPhotos = [...prevPhotos];
      const emptyIndex = updatedPhotos.findIndex((photo) => !photo.url);
      if (emptyIndex !== -1) {
        updatedPhotos[emptyIndex] = {
          ...updatedPhotos[emptyIndex],
          url: imgUrl,
        };
        selectedImageId = updatedPhotos[emptyIndex].id;
      }
      if (updatedPhotos.length < MAX_IMAGES) {
        updatedPhotos.push({ id: `${Date.now()}`, url: '' });
      }
      return updatedPhotos;
    });
    setSelectedImgId(selectedImageId);
  };

  const deleteImage = (imgId: string) => {
    setPhotos((prevPhotos) => {
      // Update the photo URL to an empty string where the id matches
      const updatedPhotos = prevPhotos.map((photo) =>
        photo.id === imgId ? { ...photo, url: '' } : photo
      );

      // Sort photos by `url` (desc) and `id`
      const sortedPhotos = orderBy(updatedPhotos, ['url', 'id'], ['desc']);

      // Find the first index where `url` is empty
      const firstValidIndex = findIndex(sortedPhotos, (photo) => !photo.url);

      // Keep photos up to the first valid index
      return sortedPhotos.slice(0, firstValidIndex + 1);
    });
  };
  const selectedImage = photos.find(
    (photo) => photo.id === selectedImgId && photo.url
  );

  const disableCapture =
    photos.filter((photo) => photo.url).length >= MAX_IMAGES;

  const hadCapture = selectedImage?.url;

  const deleteCaptureImg = () => {
    deleteImage(selectedImgId ?? '');
    startCamera();
  };

  const clickThumbnail = (photo: PhotoType) => {
    setSelectedImgId(photo.id);

    if (!photo.url) {
      handleOpenCamera();
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '24px',
        }}
      >
        {photos.map((photo, index) => (
          <ImageThumbnail
            key={photo.id}
            id={photo.id}
            index={MAX_IMAGES - index}
            imageUrl={photo.url}
            onClick={() => clickThumbnail(photo)}
            onDelete={() => deleteImage(photo.id)}
          />
        ))}
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        fullScreen={fullScreen}
        maxWidth="sm"
      >
        <IconButton
          sx={{
            position: 'absolute',
            right: '16px',
            top: '16px',
            zIndex: 3,
            backgroundColor: 'white',
          }}
          onClick={handleClose}
        >
          <CloseIcon fontSize="medium" />
        </IconButton>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: 'black',
            padding: 0,
            height: 'calc(100% - 20px)',
            px: '16px',
          }}
        >
          {hadCapture ? (
            <CardMedia
              component="img"
              image={selectedImage?.url}
              alt={selectedImage?.id}
              sx={{
                width: '100%',
                height: '90%',
                objectFit: 'cover',
              }}
            />
          ) : (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              style={{
                width: '100%',
                height: '90%',
                objectFit: 'cover',
              }}
            />
          )}
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </DialogContent>
        <DialogActions
          sx={{
            paddingBottom: '16px',
            backgroundColor: 'black',
            padding: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            disabled={disableCapture}
            onClick={hadCapture ? deleteCaptureImg : takePhoto}
            sx={{
              backgroundColor: 'black',
              padding: '20px',
              borderRadius: '50px',
              display: 'flex',
              height: '100px',
            }}
          >
            {hadCapture ? (
              <Delete fontSize="large" sx={{ color: '#fff' }} />
            ) : (
              <Box
                component="div"
                sx={{
                  borderRadius: '50%',
                  border: '2px solid white',
                  padding: '4px',
                }}
              >
                <Box
                  component="div"
                  sx={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'white',
                  }}
                />
              </Box>
            )}
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  );
};
