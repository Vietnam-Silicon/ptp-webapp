'use client';
import { FC, useState } from 'react';

import { Box, Button } from 'components';
import { useRouter } from 'next/navigation';
import { get } from 'lodash-es';

import { DatePicker, Input, TimePicker } from 'controls';
import { NavigationBack, According } from 'components';
import type { AccordingData } from 'components/According';
import { TransportingInformationType } from 'types/Transportation';
import { UserRoleEnum } from 'body/login/constants';

const SampleData: AccordingData = [
  {
    label: 'Batch/Lot',
    content: 'BL899KGHJA',
  },
  {
    label: 'crates ID',
    content: 'CR79071',
  },
  {
    label: 'Number of crates',
    content: '6',
  },
  {
    label: 'Total weight (kg)',
    content: '2000',
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
];

export const InputInfo: FC = () => {
  const router = useRouter();
  const [formState, setFormState] = useState<Partial<TransportingInformationType>>();

  const onChangeForm = (key: keyof TransportingInformationType, value?: string) => {
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
    router.push(`/successful/${UserRoleEnum.LogisticTruckFarm}`);
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
          id="crates_id"
          name="crates"
          onChange={(event) => onChangeForm('crates', event.target.value)}
          fullWidth
          label="Number of crates"
          placeholder="Enter number of crates"
        />
        <Input
          id="temp_id"
          name="temp"
          fullWidth
          label="Temperature (Celsius)"
          type="number"
          placeholder="Enter temperature"
          onChange={(event) => onChangeForm('temp', event.target.value)}
        />
        <Input
          id="moisture_id"
          name="moisture"
          fullWidth
          label="Moisture (%)"
          placeholder="Enter moisture"
          type="number"
          onChange={(event) => onChangeForm('moisture', event.target.value)}
        />
        <Box
          component="div"
          sx={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <DatePicker
            name="startDate"
            sx={{ width: '100%' }}
            label="Start date"
            onChange={(value) => onChangeForm('moisture', value?.toISOString())}
          />
          <TimePicker
            name="startTime"
            sx={{ width: '100%' }}
            label="Start time"
            onChange={(value) => onChangeForm('startTime', value?.toISOString())}
          />
        </Box>
        <Box
          component="div"
          sx={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <DatePicker
            name="arriveDate"
            sx={{ width: '100%' }}
            label="Est arrive date"
            onChange={(value) => onChangeForm('arriveDate', value?.toISOString())}
          />
          <TimePicker
            name="arriveTime"
            sx={{ width: '100%' }}
            label="Est arrive time"
            onChange={(value) => onChangeForm('arriveTime', value?.toISOString())}
          />
        </Box>
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
