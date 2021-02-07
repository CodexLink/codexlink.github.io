import { graphql } from "gatsby"

export const AuthorBas= graphql`type AuthorBase {
    full_name: String!,
    description: String!,
    date_joined: Date!,
    socials: [String!]
}`