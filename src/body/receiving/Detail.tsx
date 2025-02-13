'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { get } from 'lodash-es';

import { According, NavigationBack, Box } from 'components';
import { AccordingData } from 'components/According';
import { Input, Button } from 'controls';
import { UserRoleEnum } from 'body/login/constants';
import { ReceivingInformationType } from 'types/Receiving';

const SampleData: AccordingData = [
  {
    label: 'Batch/Lot',
    content: 'BL899KGHJA',
  },
  {
    label: 'Crates ID',
    content: 'CR79071',
  },
  {
    label: 'Number of crates',
    content: '6',
  },
  {
    label: 'Total weight (kg)',
    content: '2,000',
  },
  {
    label: 'Quantity',
    content: '800',
  },
  {
    label: 'Harvester',
    content: 'Farmer Name',
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
    label: 'Truck ID',
    content: 'TR7199HJK',
  },
  {
    label: 'Driver',
    content: 'Driver name',
  },
  {
    label: 'Manufacture',
    content: 'Nonthaburi Durian',
    description: 'North of Chanthaburi City on Hwy 317',
  },
  {
    label: 'Manufacture GLN',
    content: '775674899644789',
  },
  {
    label: 'Receiving time',
    content: new Date().toISOString(),
  },
];

export const ReceivingDetail = () => {
  const searchParam = useSearchParams();
  const router = useRouter();
  const [formState, setFormState] = useState<Partial<ReceivingInformationType>>();
  const scanId = searchParam.get('scanId') ?? '';

  const onChangeForm = (key: keyof ReceivingInformationType, value?: string) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }));
  };

  const onGoBack = () => {
    router.back();
  };

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

  const onSubmit = () => {
    router.push(`/successful/${UserRoleEnum.AggregatorReceiving}`);
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
      <NavigationBack content="Durian receiving information" onBack={onGoBack} />
      <According title="Detailed information" data={SampleData} />
      <Box
        id={scanId}
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
          sx={{ height: '40px' }}
          id="crates_id"
          name="crates"
          onChange={(event) => onChangeForm('crates', event.target.value)}
          fullWidth
          label="Number of crates"
          placeholder="Enter number of crates"
        />
      </Box>
      <Box
        component="div"
        sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
      >
        <Button
          disabled={!checkIsValidForm()}
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
