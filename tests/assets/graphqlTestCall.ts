import { graphql } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { getSchema } from '../../getSchema';

const schema = getSchema();

export const graphqlTestCall = async (
  query: any,
  variables?: any,
  userId?: number | string,
  token?: string
) => {
  return graphql(
    schema,
    query,
    undefined,
    {
      req: {
        session: {
          userId
        }
      },
      res: {
        clearCookie: () => {}
      },
      Headers: {
        "Authorization":  `bearer ${token}`
      }
    },
    variables
  );
};