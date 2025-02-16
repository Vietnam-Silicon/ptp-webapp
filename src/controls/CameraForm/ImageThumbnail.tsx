'use client';

import { FC } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { CardMedia } from '@mui/material';

interface ImageThumbnailProps {
  id: string;
  imageUrl: string;
  onClick?: () => void;
  onDelete: () => void;
  index?: number;
  maxImages?: number;
}

export const ImageThumbnail: FC<ImageThumbnailProps> = ({
  id,
  imageUrl,
  onClick,
  index,
  maxImages = 3,
  onDelete,
}) => (
  <Box
    sx={{
      cursor: 'pointer',
      position: 'relative',
      height: '100px',
      width: '100px',
    }}
  >
    {imageUrl ? (
      <>
        <CardMedia
          onClick={onClick}
          component="img"
          image={imageUrl}
          alt={id}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <IconButton
          onClick={onDelete}
          sx={{
            position: 'absolute',
            top: '-16px',
            right: '-16px',
            color: 'white',
          }}
        >
          <Box
            component="div"
            sx={{
              width: '24px',
              height: '24px',
              fontSize: '14px',
              backgroundColor: 'red',
              borderRadius: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            ✕
          </Box>
        </IconButton>
      </>
    ) : (
      <Box
        component="div"
        onClick={onClick}
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
        <AddAPhotoOutlinedIcon sx={{ fontSize: '14px' }} />
        {index && (
          <Typography sx={{ fontSize: '12px' }}>
            {index}/{maxImages}
          </Typography>
        )}
      </Box>
    )}
  </Box>
);
