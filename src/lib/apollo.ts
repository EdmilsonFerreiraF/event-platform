import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vehtj41ean01ueh9sz1ltf/master',
    cache: new InMemoryCache()
})