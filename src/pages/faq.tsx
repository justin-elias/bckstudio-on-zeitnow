/*
 * Copyright (c) 2020. Bozeman Community Kiln
 */

import {createStyles, makeStyles} from "@material-ui/core/styles";
import {FaqProps, faqQueryProp} from "../index";
import React from "react";
import Head from "next/head";
import {brandFont, cardTitle, playBrand, title} from "../assets/jss/nextjs-material-kit";
import Layout from "../pages-sections/Page-Sections/Layout";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classNames from "classnames";
import gql from "graphql-tag";
import {queryCMS} from "../utils/queryCMS";
import {ShowPreview} from "../components/ShowPreview/showPreview";
import {ClassNameMap} from "@material-ui/styles";


const useStyles = makeStyles(() => createStyles({
    playBrand,
    brandFont,
    // @ts-ignore
    cardTitle
}));

const query = gql`{
    faqPage(where: {pageTitle: "Main" }){
        listOfFaQs{
            question
            answer{
                text
                html
                markdown
            }
            markdown
        }
    }
}`;

export async function getStaticProps(context: { preview: any; previewData: { token: string | number; }; }) {
    const preview: boolean | null = context.preview ? context.preview : null;
    const prodToken: string = process.env.NEXT_PUBLIC_GRAPHCMS_WEBCLIENT_API_TOKEN!;
    const token: string = preview ? (context.previewData.token + process.env.NEXT_PUBLIC_GRAPH_CMS_PREVIEW_TOKEN_CLIENT!) : prodToken;
    const endPoint: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

    const faqQueryResult: faqQueryProp = await queryCMS(query, token, endPoint);

    return {
        props: { faqQueryResult, preview }, // will be passed to the page component as props
    }
}

export default function faq(props: FaqProps) {
    const classes: ClassNameMap = useStyles();
    const {faqQueryResult, preview} = props;

    return (
        <React.Fragment>
            <Head>
                <title>FAQ • Bozeman Community Kiln</title>
                <link rel="canonical" href="https://bckstudio.com/faq/"/>
                <meta name="description"
                      content="Pottery Studios can be confusing places when you first walk in. Here are the most common questions our Bozeman area community asks."/>
            </Head>
            <ShowPreview preview={preview} page={"faq"}/>
            <Layout>
                <div>
                    <BrandedHeader>
                        <Typography variant={"h1"} align={"center"} className={classes.brandFont}>
                            Frequent <span className={classes.playBrand}>Questions</span>
                        </Typography>
                    </BrandedHeader>
                    { faqQueryResult.faqPage.listOfFaQs.map((faq, key) =>(
                        <Accordion key={key}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="show-faq-answer"
                            >
                                <Typography variant={"h6"} className={classNames(classes.cardTitle)} component={"h2"}>{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant={"body2"} dangerouslySetInnerHTML={{ __html: faq.answer.html!}}/>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </Layout>
        </React.Fragment>
    )
}

