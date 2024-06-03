import axios from "axios";
import {describe, expect, it} from "@jest/globals";

describe('CMS Query API with CLIENT Token', () => {
    it('should return status code 200', async() => {
        const expected = 200;

        const query = `
          query{
            instructors(where: {defaultInstructor: true}){
                firstName
            }
        }`;
        const options = {
            headers: {
                authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_WEBCLIENT_API_TOKEN}`
            }};
        const request = async() => {
            try {
                return await axios.post(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, {query: query}, options);
            }catch (e) {
                return e.message
            }
        };

        const response = await request();
        const actual = response.status ? response.status : response;

        expect(actual).toBe(expected);
    });
});
