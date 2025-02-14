import { useEffect, useState } from 'react';
import { getEvents } from 'services/events';
import { EventType } from 'types/Event';

const DELAY_TIME = 200

const useEvents = () => {
  const [data, setData] = useState<EventType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        await new Promise(r => setTimeout(r, DELAY_TIME));
        const res = await getEvents()

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