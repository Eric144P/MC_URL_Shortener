import * as Types from "../graphql.d";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetMessagesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetMessagesQuery = {
  __typename?: "Query";
  messages: Array<{
    __typename?: "MessageDto";
    id?: number | null;
    longurl: string;
    shorturl: string;
  }>;
};

export type AddMessageMutationVariables = Types.Exact<{
  longurl: Types.Scalars["String"];
  shorturl: Types.Scalars["String"];
}>;

export type AddMessageMutation = {
  __typename?: "Mutation";
  message: {
    __typename?: "MessageDto";
    id?: number | null;
    longurl: string;
    shorturl: string;
  };
};

export const GetMessagesDocument = gql`
  query getMessages {
    messages {
      id
      longurl
      shorturl
    }
  }
`;
export function useGetMessagesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMessagesQuery,
    GetMessagesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(
    GetMessagesDocument,
    options
  );
}
export function useGetMessagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMessagesQuery,
    GetMessagesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(
    GetMessagesDocument,
    options
  );
}
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<
  typeof useGetMessagesLazyQuery
>;
export type GetMessagesQueryResult = Apollo.QueryResult<
  GetMessagesQuery,
  GetMessagesQueryVariables
>;

export const AddMessageDocument = gql`
  mutation addMessage($longurl: String!, $shorturl: String!) {
    message(longurl: $longurl, shorturl: $shorturl) {
      id
      longurl
      shorturl
    }
  }
`;

export function useAddMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddMessageMutation,
    AddMessageMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddMessageMutation, AddMessageMutationVariables>(
    AddMessageDocument,
    options
  );
}
export type AddMessageMutationHookResult = ReturnType<
  typeof useAddMessageMutation
>;
export type AddMessageMutationResult =
  Apollo.MutationResult<AddMessageMutation>;
export type AddMessageMutationOptions = Apollo.BaseMutationOptions<
  AddMessageMutation,
  AddMessageMutationVariables
>;
