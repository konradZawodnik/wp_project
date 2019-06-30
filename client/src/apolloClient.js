import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://mobileapi.wp.pl/v1/graphql",
    request: operation => {
        operation.setContext({
            headers: {
                Authorization: `bearer ${sessionStorage.getItem("token")}`
            }
        });
    },
});
export default client;