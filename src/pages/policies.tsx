import { queryCMS } from "../utils/queryCMS";
import Head from "next/head";
import Layout from "../pages-sections/Page-Sections/Layout";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
import {gql} from "graphql-request"
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { brandFont, playBrand } from "../assets/jss/nextjs-material-kit";
import { ClassNameMap } from "@material-ui/styles";
import ReactMarkdown from 'markdown-to-jsx';
import Link from "next/link";
import { relative } from "path";
import Divider from "@material-ui/core/Divider";
import React from "react";

const useStyles = makeStyles(() => createStyles({
    playBrand,
    brandFont,
    layout: {
        position: "relative"
    },
    policiesBlock: {
        margin: "1.5rem",
        marginTop: "3rem"
    }
}));

const policiesQuery = gql`
    {
        policies {
            policyName
            policyText {
                markdown
            }
            updatedAt
        }
    }
`
const options = {
    overrides: {
        h1: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'h1',
            },
        },
        h2: { component: Typography, props: { gutter: true, variant: 'h2', align: 'center'} },
        h3: { component: Typography, props: { gutter: true, variant: 'h3' } },

        p: { component: Typography, props: { variant: "body1" } },
        a: { component: Link },
        li: {
            component: Typography, props: {component: "li", variant: "body1"}
        }
    },
};

export async function getStaticProps(context: any) {
    const preview = context.preview ? context.preview : null;
    const prodToken = process.env.NEXT_PUBLIC_GRAPHCMS_WEBCLIENT_API_TOKEN;
    const token = preview ? (context.previewData.token + process.env.NEXT_PUBLIC_GRAPH_CMS_PREVIEW_TOKEN_CLIENT) : prodToken;
    const endPoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

    const policies = await queryCMS(policiesQuery, token, endPoint);

    return {
        props: { policies, preview }, // will be passed to the page component as props
    }
}

export default function homePage(props: { policies: any; }) {
    const classes: ClassNameMap = useStyles();
    const { policies } = props;

    return (
        <div>
            <Head>
                <title>Pottery Classes & Studio • Bozeman Community Kiln</title>
                <link rel="canonical" href="https://bckstudio.com/policies"/>
                <meta name="description"
                      content="Whether you are interested in a first clay encounter, looking for the perfect pottery
                      class, or need your own ceramic studio space, Bozeman Community Kiln is here."
                />
            </Head>
            <Layout className={classes.layout}>
                <BrandedHeader>
                    <Typography variant={"h1"} align={"center"} className={classes.brandFont}>
                        Our <span className={classes.playBrand}>Policies</span>
                    </Typography>
                </BrandedHeader>
                {policies.policies.map((policy: any) => {
                    return (
                        <div id={policy.policyName} className={classes.policiesBlock}>
                            <Typography variant={"h2"} >
                                {policy.policyName}
                            </Typography>
                            <ReactMarkdown options={options}>
                                {policy.policyText.markdown}
                            </ReactMarkdown>
                            <Divider/>
                        </div>
                    )
                })}
            </Layout>
        </div>
    );
}
