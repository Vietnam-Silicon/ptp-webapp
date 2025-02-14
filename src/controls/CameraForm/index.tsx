import { useState, useRef, FC } from 'react';
import Image from 'next/image';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

const maxImage = 3;

type PhotoType = { url: string; id: string };

interface ImageViewProps {
  id: string;
  onPreview: (id: string) => void;
  imageUrl: string;
  onStartCamera?: () => void;
  index?: number;
}

const ImageView: FC<ImageViewProps> = ({ onPreview, imageUrl, id, onStartCamera, index }) => {
  return (
    <Box
      sx={{
        cursor: 'pointer',
        width: '100px',
        height: '100px',
      }}
    >
      {imageUrl ? (
        <Image
          onClick={() => onPreview(id)}
          width={100}
          height={100}
          src={imageUrl}
          alt={`ImageView-Photo-${id}`}
          loading="lazy"
        />
      ) : (
        <Box
          component="div"
          onClick={onStartCamera}
          sx={{
            border: '1px dashed black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <AddAPhotoOutlinedIcon sx={{ fontSize: '14xp' }} />
          {index && (
            <Typography sx={{ fontSize: '12px' }}>
              {index}/{maxImage}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

const generateSampleImage = () => {
  const result: PhotoType[] = [];
  for (let i = 0; i < maxImage; i += 1) {
    const id = (Date.now() + i).toString();
    result.push({ id, url: '' });
  }

  return result;
};

export const CameraForm = () => {
  const [open, setOpen] = useState(false);
  const [photos, setPhotos] = useState<PhotoType[]>(generateSampleImage());
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [selectedImgId, setSelectedImgId] = useState<string>();

  const getImgId = (value: string) => {
    setSelectedImgId(value);
  };

  const startCamera = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
    });
    setStream(mediaStream);
    if (videoRef.current) {
      videoRef.current.srcObject = mediaStream;
    }
  };

  const handleOpen = () => {
    setOpen(true);
    startCamera();
  };

  const handleClose = () => {
    stopCamera();
    setOpen(false);
    setPhotos([]);
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

      const imgUrl = canvas.toDataURL('image/png');

      const copiedPhotos = [...photos];

      for (const photo of copiedPhotos) {
        if (!photo.url) {
          photo.url = imgUrl;
          break;
        }
      }
      setPhotos(copiedPhotos);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setStream(null);
  };

  const onSave = () => {
    setOpen(false);
  };

  const selectedImage = photos.find((it) => it.id === selectedImgId && it.url);
  const disableCapture = photos.filter((it) => it.url).length >= maxImage;

  const onDeleteImage = () => {
    const updatedPhotos = photos.map((it) => {
      if (it.id === selectedImgId) {
        return { ...it, url: '' };
      }

      return it;
    });

    const nearlyPhoto = updatedPhotos.find((it) => it.url);

    if (nearlyPhoto) {
      setSelectedImgId(nearlyPhoto.id);
    } else {
      setSelectedImgId(undefined);
      startCamera();
    }
    setPhotos(updatedPhotos);
  };

  const onPreviewImage = (id?: string) => {
    setSelectedImgId(id);
    setOpen(true);
  };

  return (
    <>
      <Typography fontWeight="bold">Product photo</Typography>
      <Box
        component="div"
        sx={{
          width: '100%',
          height: '140px',
          display: 'flex',
          alignItems: 'center',
          py: '0 20px',
          position: 'relative',
          borderRadius: '4px',
        }}
      >
        <Box component="div" sx={{ width: '100%', height: '100%', display: 'flex', gap: '16px' }}>
          {photos.map((it, index) => (
            <ImageView
              index={index + 1}
              key={it.id}
              id={it.id}
              onPreview={() => onPreviewImage(it.id)}
              onStartCamera={handleOpen}
              imageUrl={it.url}
            />
          ))}
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle align="center">Take a Photo</DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '300px',
            flexDirection: 'column',
          }}
        >
          {selectedImage && (
            <Image
              key={selectedImage.id}
              width={300}
              height={300}
              src={selectedImage.url}
              alt={selectedImage.id}
              loading="lazy"
            />
          )}
          {!selectedImage && (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{ width: '100%', borderRadius: 8, height: '300px' }}
              />
              <canvas ref={canvasRef} style={{ display: 'none' }} />
            </>
          )}
        </DialogContent>

        <DialogActions>
          <Box
            component="div"
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {selectedImage ? (
              <IconButton sx={{ fontSize: '26px', color: 'red' }} onClick={onDeleteImage}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            ) : (
              <IconButton disabled={disableCapture} sx={{ fontSize: '26px' }} onClick={takePhoto}>
                <PhotoCameraIcon fontSize="inherit" />
              </IconButton>
            )}
            <IconButton sx={{ fontSize: '26px' }} onClick={onSave}>
              <SaveIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </DialogActions>
        <DialogContent
          sx={{ height: '140px', px: '20px', width: '100%', display: 'flex', gap: '16px' }}
        >
          {photos.map((it) => (
            <ImageView
              id={it.id}
              onPreview={() => getImgId(it.id)}
              onStartCamera={startCamera}
              key={it.id}
              imageUrl={it.url}
            />
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
};
