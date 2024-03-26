import React from "react";
// core components
import Head from "next/head";
// Sections for this page
import CLPSection from "../pages-sections/Page-Sections/CLPSection";
import AboutSection from "../pages-sections/Page-Sections/AboutSection";
import Layout from "../pages-sections/Page-Sections/Layout";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
import gql from "graphql-tag";
import {queryCMS} from "../utils/queryCMS";
import shuffleArray from "../utils/algos/shuffleArray";
import Banner from "../components/Banner/Banner";


const staffQuery = gql`{
    instructors(where: {isStaff: true, staffTitle_not: null}) {
        firstName,
        lastName,
        staffBio{
            text
        },
        staffPicture{
            title
            altText
            height
            width
            url
        },
        staffTitle
    }
}`

export async function getStaticProps(context) {
    const preview = context.preview ? context.preview : null;
    const prodToken = process.env.NEXT_PUBLIC_GRAPHCMS_WEBCLIENT_API_TOKEN;
    const token = preview ? (context.previewData.token + process.env.NEXT_PUBLIC_GRAPH_CMS_PREVIEW_TOKEN_CLIENT) : prodToken;
    const endPoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

    const staff = {} //await queryCMS(staffQuery, token, endPoint);

    return {
        props: { staff, preview }, // will be passed to the page component as props
    }
}

export default function homePage(props) {
    const { staff } = props

    const shuffledStaff = () => {
        const shuffle = shuffleArray(staff.instructors);
        for (let i = 0; i < shuffle.length; i++) {
            if (shuffle[i].staffTitle === "Studio Dog" && i !== shuffle.length-1){
                const temp = shuffle[i];
                shuffle[i] = shuffle[shuffle.length-1]
                shuffle[shuffle.length-1] = temp
            }
        }
        return shuffle;

    }
    return (
        <div>
            <Head>
                <title>Pottery Classes & Studio • Bozeman Community Kiln</title>
                <link rel="canonical" href="https://bckstudio.com/"/>
                <meta name="description"
                      content="Whether you are interested in a first clay encounter, looking for the perfect pottery
                      class, or need your own ceramic studio space, Bozeman Community Kiln is here."
                />
            </Head>
            <Banner/>
            <Layout>
                <BrandedHeader>
                    <CLPSection/>
                </BrandedHeader>
                {/*<AboutSection staff={shuffledStaff()}/>*/}
            </Layout>
        </div>
    );
}
