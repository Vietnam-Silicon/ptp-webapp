import { Dayjs } from 'dayjs'

export type EventModel = {
  id: string
  unique_code: string,
  event_time: string,
  status: string,
  main_product: {
    name: string,
    description: string,
    primary_image: {
      filename_disk: string
    }
  },
  recorded_by: {
    name: string,
    description: string,
    address: string,
    logo: {
      filename_disk: string
    }
  },
  metadata?: {
    collection: string
  }[]
}

export type Filter = {
  type: string,
  startDate: Dayjs | null,
  endDate: Dayjs | null,
  search: string
}