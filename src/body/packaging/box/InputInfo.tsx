'use client';
import { useRouter } from 'next/navigation';

import { According, NavigationBack, Box, ScanModal } from 'components';
import { AccordingData } from 'components/According';
import { Button, CameraForm, DatePicker, Input } from 'controls';
import { UserRoleEnum } from 'body/login/constants';
import { generateBatchLot } from 'utils';
import { useState } from 'react';
import { BoxPackagingDetailType } from 'types/Packaging';
import { get } from 'lodash';

const SampleData: AccordingData = [
  {
    label: 'Batch/Lot',
    content: generateBatchLot(),
  },
  {
    label: 'Farm Location',
    content: 'Nonthaburi Durian',
    description: 'North of Chanthaburi City on Hwy 317',
  },
  {
    label: 'Farm GLN',
    content: '775674899644789',
  },
  {
    label: 'Receiving time',
    content: new Date().toISOString(),
  },
];

const SampleDataBoxInformation: AccordingData = [
  {
    label: 'Product name',
    content: 'Nonthaburi Durian Box with AA-Grade from Sanbaori Farm',
  },
  {
    label: 'Brand name',
    content: 'King Durian',
  },

  {
    label: 'Batch/Lot',
    content: generateBatchLot(),
  },
  {
    label: 'Farm GTIN',
    content: '775674899644789',
  },
  {
    label: 'PIC',
    content: 'PIC name',
  },
  {
    label: 'Manufacturer',
    content: 'Nonthaburi Durian',
    description: 'North of Chanthaburi City on Hwy 317',
  },
  {
    label: 'Manufacturer GLN',
    content: '775674899644789',
  },
  {
    label: 'Packaging time',
    content: new Date().toISOString(),
  },
];

export const InputInfo = () => {
  const [showScanModal, setShowScanModal] = useState(false);
  const [formState, setFormState] = useState<Partial<BoxPackagingDetailType>>();

  const router = useRouter();

  const checkIsValidForm = () => {
    if (!formState) return false;

    let isValid = true;

    for (const formKey in formState) {
      if (!get(formState, formKey, undefined)) {
        isValid = false;
        break;
      }
    }

    return isValid;
  };

  const onScan = (value?: string) => {
    if (value) {
      goNextPage(value);
    }
  };

  const onCloseModal = () => {
    setShowScanModal(false);
  };

  const onGoBack = () => {
    router.back();
  };

  const onSubmit = () => {
    router.push(`/successful/${UserRoleEnum.AggregatorReceiving}`);
  };

  const goNextPage = (value: string) => {
    const pathName = `/packaging/box/input-info/?boxId=${value}`;
    router.push(pathName, {});
  };

  const onChangeForm = (key: keyof BoxPackagingDetailType, value?: string) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <NavigationBack content="Durian box information" onBack={onGoBack} />
      <According title="Source Detailed information" data={SampleData} />

      <According title="Box Detailed information" data={SampleDataBoxInformation} />

      <ScanModal onScan={onScan} open={showScanModal} onClose={onCloseModal} />

      <Box
        component="form"
        mt="8px"
        onSubmit={onSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          flex: 1,
        }}
      >
        <Input
          name="boxes"
          onChange={(event) => onChangeForm('boxes', event.target.value)}
          fullWidth
          type="number"
          label="Number of boxes"
          placeholder="Enter number of boxes"
        />
        <Input
          name="weight"
          fullWidth
          label="Box Net weight (Kg)"
          type="number"
          placeholder="Enter Box net weight"
          onChange={(event) => onChangeForm('weight', event.target.value)}
        />
        <Input
          name="durianPerBox"
          fullWidth
          label="Number of durians per box"
          placeholder="Enter number of durians"
          type="number"
          onChange={(event) => onChangeForm('durianPerBox', event.target.value)}
        />
        <DatePicker
          name="expiredDate"
          sx={{ width: '100%' }}
          label="Expiration date"
          onChange={(value) => onChangeForm('expiredDate', value?.toISOString())}
        />
        <CameraForm />
      </Box>
      <Box
        component="div"
        sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
      >
        <Button
          disabled={!checkIsValidForm()}
          sx={{ borderRadius: '24px' }}
          variant="contained"
          fullWidth
          color="secondary"
          type="submit"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};
