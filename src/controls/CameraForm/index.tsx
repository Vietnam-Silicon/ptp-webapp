'use client';

import { useState, useRef } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';

import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ClearIcon from '@mui/icons-material/Clear';
import SaveIcon from '@mui/icons-material/Save';

export const CameraForm = () => {
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }, // Use rear camera
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    startCamera();
  };

  const handleClose = () => {
    stopCamera();
    setOpen(false);
    setPhoto(null);
  };

  const takePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (context) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      setPhoto(canvas.toDataURL('image/png'));
    }

    stopCamera();
  };

  // Stop the camera
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setStream(null);
  };

  const retake = () => {
    setPhoto(null);
    startCamera();
  };

  const onSave = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        component="div"
        sx={{
          width: '100%',
          height: '100px',
          border: '1px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        {!photo ? (
          <IconButton sx={{ fontSize: '26px' }} onClick={handleOpen}>
            <CameraAltIcon fontSize="inherit" />
          </IconButton>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <Box component="div" sx={{ width: '100%', height: '100%' }}>
            <IconButton
              sx={{ fontSize: '26px', position: 'absolute', top: 0, right: 0 }}
              onClick={handleClose}
            >
              <ClearIcon fontSize="inherit" />
            </IconButton>
            <img
              src={photo}
              alt="Captured"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </Box>
        )}
      </Box>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{photo ? 'Preview Photo' : 'Take a Photo'}</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 300 }}
        >
          {!photo ? (
            <video ref={videoRef} autoPlay playsInline style={{ width: '100%', borderRadius: 8 }} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photo} alt="Captured" style={{ width: '100%', borderRadius: 8 }} />
          )}
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </DialogContent>

        <DialogActions>
          {!photo ? (
            <Box
              component="div"
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              <IconButton sx={{ fontSize: '26px' }} onClick={takePhoto}>
                <CameraAltIcon fontSize="inherit" />
              </IconButton>
            </Box>
          ) : (
            <Box
              component="div"
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                gap: '12px',
              }}
            >
              <IconButton sx={{ fontSize: '26px' }} onClick={retake}>
                <CameraAltIcon fontSize="inherit" />
              </IconButton>
              <IconButton sx={{ fontSize: '26px' }} onClick={handleClose}>
                <ClearIcon fontSize="inherit" />
              </IconButton>
              <IconButton sx={{ fontSize: '26px' }} onClick={onSave}>
                <SaveIcon fontSize="inherit" />
              </IconButton>
            </Box>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};
