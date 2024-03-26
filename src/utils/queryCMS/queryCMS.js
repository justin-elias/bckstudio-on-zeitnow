import {GraphQLClient} from "graphql-request";
import {print} from 'graphql/language/printer';

export const queryCMS = async (query, token, endPoint) => {
    try {
        return await new GraphQLClient(endPoint, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).request(print(query));
    }catch (e) {

        return e
    }
};

