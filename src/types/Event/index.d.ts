export type EventType = {
  id: string
  uniqueCode: string,
  eventTime: string,
  status: string,
  traceId: string,
  bindToWorkflowNode: {
    id: string
  },
  mainProduct: {
    name: string,
    description: string,
    primaryImage: {
      filenameDisk: string
    }
  },
  recordedBy: {
    name: string,
    description: string,
    address: string,
    logo: {
      filenameDisk: string
    }
  },
  metadata?: {
    collection: string
  }[]
}