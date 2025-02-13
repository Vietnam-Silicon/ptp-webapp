'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { get } from 'lodash-es';

import { According, NavigationBack, Box } from 'components';
import { AccordingData } from 'components/According';
import { Input, Dropdown, Button } from 'controls';
import { HarvestingInformationType } from 'types/Farmer';
import { UserRoleEnum } from 'body/login/constants';
import { VarietyDurianData, GradeDurianData } from 'body/constants/durian';

const SampleData: AccordingData = [
  {
    label: 'Batch/Lot',
    content: 'BL899KGHJA',
  },
  {
    label: 'Harvester',
    content: 'Farmer name',
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
    label: 'Harvesting time',
    content: new Date().toISOString(),
  },
];

export const FarmerDetail = () => {
  const searchParam = useSearchParams();
  const router = useRouter();
  const [formState, setFormState] = useState<Partial<HarvestingInformationType>>();
  const scanId = searchParam.get('scanId') ?? '';

  const onChangeForm = (key: keyof HarvestingInformationType, value?: string) => {
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
    router.push(`/successful/${UserRoleEnum.Farmer}`);
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
          id="crates_id"
          name="crates"
          onChange={(event) => onChangeForm('crates', event.target.value)}
          fullWidth
          label="Number of crates"
          placeholder="Enter number of crates"
        />
        <Input
          id="weight"
          name="weight"
          fullWidth
          label="Total weight (Kg)"
          type="number"
          placeholder="Enter total weight"
          onChange={(event) => onChangeForm('weight', event.target.value)}
        />
        <Input
          id="quantity"
          name="quantity"
          fullWidth
          label="Quantity"
          placeholder="Enter total durians"
          type="number"
          onChange={(event) => onChangeForm('quantity', event.target.value)}
        />

        <Dropdown
          id="variety"
          name="variety"
          fullWidth
          label="Durian variety"
          value={formState?.variety ?? ''}
          menuItems={VarietyDurianData}
          onChange={(event) => onChangeForm('variety', event.target.value)}
        />
        <Dropdown
          id="grade"
          name="grade"
          fullWidth
          label="Grade"
          menuItems={GradeDurianData}
          value={formState?.grade ?? ''}
          onChange={(event) => onChangeForm('grade', event.target.value)}
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
