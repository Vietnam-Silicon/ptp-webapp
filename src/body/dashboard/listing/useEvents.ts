import { useEffect, useState } from 'react';
import { getEvents } from 'services/events';
import { EventModel } from './index.d'

const DELAY_TIME = 200

const useEvents = () => {
  const [data, setData] = useState<EventModel[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        await new Promise(r => setTimeout(r, DELAY_TIME));
        const res = await getEvents<{ data: EventModel[] }>()

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