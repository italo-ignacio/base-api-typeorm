interface GetPageAndLimitInput {
  query: {
    page?: number;
    limit?: number;
  };
}

interface GetPageAndLimitOutput {
  skip: number;
  take: number;
}

export const getPagination = ({ query }: GetPageAndLimitInput): GetPageAndLimitOutput => {
  const page = Number(query.page ?? 1);
  let limit = Number(query.limit ?? 30);

  if (limit > 50) limit = 50;

  const skip = (page - 1) * limit;
  const take = limit;

  return { skip, take };
};
