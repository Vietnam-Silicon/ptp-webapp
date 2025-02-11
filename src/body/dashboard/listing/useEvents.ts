import { useEffect, useState } from 'react';
import { getEvents } from 'services/events';

export type Event = {
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

const useEvents = () => {
  const [data, setData] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        await new Promise(r => setTimeout(r, 3000));
        const res = await getEvents<{ data: Event[] }>()

        if (res?.data) {
          setData(res?.data)
        }

        setLoading(false)
      } catch (err) {
        console.error(err)
        setLoading(false)
      }
    }

    getData()
  }, [])

  return { data, loading }
}
export default useEvents