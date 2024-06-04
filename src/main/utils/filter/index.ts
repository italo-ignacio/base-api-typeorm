/* eslint-disable @typescript-eslint/strict-boolean-expressions */
interface GetPageAndLimitInput<QueryType extends string> {
  query: {
    [key in QueryType]?: string;
  } & {
    orderBy?: QueryType;
    sort?: 'asc' | 'desc';
    startDate?: string;
    endDate?: string;
  };
  list: QueryType[];
}

interface GetPageAndLimitOutput {
  order: object;
  where: object;
}

const isObjectEmpty = (obj: object): boolean => Object.keys(obj).length === 0;

const getDate = (item: string, isEnd?: boolean): Date | string | null => {
  const date = new Date(item?.trim().slice(0, 10));

  if (isNaN(date.getTime())) return null;

  if (isEnd ?? false) return date.toISOString().replace('T00:00:00.000Z', 'T23:59:59.999Z');

  return date.toISOString();
};

interface queryProps {
  orderBy: string;
  sort?: 'asc' | 'desc';
}

const checkOrder = (query: queryProps, list: string[]): boolean =>
  typeof query.sort === 'string' &&
  (query.sort === 'asc' || query.sort === 'desc') &&
  (list.includes(query.orderBy) || query.orderBy === 'createdAt' || query.orderBy === 'updatedAt');

export const getGenericFilter = <QueryType extends string>({
  query,
  list
}: GetPageAndLimitInput<QueryType>): GetPageAndLimitOutput => {
  const orderBy = {};
  const where: object[] = [
    {
      finishedAt: null
    }
  ];

  if (typeof query.startDate === 'string') {
    const startDate = getDate(query.startDate);

    if (startDate !== null)
      where.push({
        createdAt: {
          gte: startDate
        }
      });
  }

  if (typeof query.endDate === 'string') {
    const endDate = getDate(query.endDate, true);

    if (endDate !== null)
      where.push({
        createdAt: {
          lte: endDate
        }
      });
  }

  if (typeof query.orderBy === 'string' && checkOrder(query as queryProps, list))
    Object.assign(orderBy, {
      [query.orderBy]: query.sort
    });

  for (const item of list)
    if (typeof query[item] === 'string')
      if (item.endsWith('Enum'))
        where.push({
          [item.replace('Enum', '')]: {
            equals: query[item]
          }
        });
      else if (item.endsWith('Id'))
        where.push({
          [item]: {
            equals: query[item] === 'null' ? null : Number(query[item])
          }
        });
      else if (item === 'phone')
        where.push({
          [item]: {
            contains: query[item]?.replace(/\D/gu, ''),
            mode: 'insensitive'
          }
        });
      else
        where.push({
          [item]: {
            contains: query[item],
            mode: 'insensitive'
          }
        });

  if (isObjectEmpty(orderBy)) Object.assign(orderBy, { createdAt: 'desc' });

  return {
    order: orderBy,
    where
  };
};
