export const orderCreated = {
  config: {
    name: 'orderCreated',
    aggregateId: 'aggregate.id'
  },
  applicator: (data, aggregate) => { aggregate.set(data) }
};