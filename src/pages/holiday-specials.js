import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import {Hidden, Typography} from "@material-ui/core";
// Sections for this page
import Head from "next/head";
import Pricing from "../components/Pricing/Pricing";
import Layout from "../pages-sections/Page-Sections/Layout";
import {brandFont, clp_exclaim, dividerBar, mainElement, playBrand, title,} from "../assets/jss/nextjs-material-kit";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
import {queryCMS} from "../utils/queryCMS";
import Container from "@material-ui/core/Container";
import gql from "graphql-tag";
import {ShowPreview} from "../components/ShowPreview/showPreview";

const style = (theme) => ({
    whiteContainer:{
        backgroundColor: "#fff"
    },
    headerContainer2: {
        ...mainElement,
        padding: "1rem",
        backgroundColor: theme.palette.primary.main,
        marginTop: "0"
    },
    verticalCones: {
        height:"20rem",
        marginTop: "1rem",
        marginBottom: "1rem"
    },
    horizontalCones: {
        width: "10rem"
    },
    whiteHeader: {
        ...brandFont,
        color: theme.palette.primary.contrastText,
        textShadow: "1px 1px 1px #000000",
    },
    raisedDivider: {
        ...dividerBar,
        ...mainElement,
        marginTop: "0"
    },
    textBody: {
        maxWidth: "50vw",
        margin: "auto",
        paddingBottom: "2.5rem"
    },
    mainElement,
    title,
    brandFont,
    clp_exclaim,
    playBrand,
    dividerBar
});

const useStyles = makeStyles(style);

const membershipsSpecialsQuery = gql`
    {
        membershipCategories(where: {title: "Specials"}) {
            title
            membershipTiers{
                title
                price
                description
                buttonText
                buttonVariant
                inputValue
                term
            }
        }
    }`

export async function getStaticProps(context) {

    const preview = context.preview ? context.preview : null;
    const prodToken = process.env.NEXT_PUBLIC_GRAPHCMS_WEBCLIENT_API_TOKEN;
    const token = preview ? (context.previewData.token + process.env.NEXT_PUBLIC_GRAPH_CMS_PREVIEW_TOKEN_CLIENT) : prodToken;
    const endPoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

    const membershipsQueryResult = Object.keys(await queryCMS(membershipsSpecialsQuery, token, endPoint)).length > 0 ? await queryCMS(membershipsSpecialsQuery, token, endPoint) : {};

    return {
        props: {membershipsQueryResult, preview}, // will be passed to the page component as props
    }
}

export default function MembershipPage(props) {
    const classes = useStyles();
    const { membershipsQueryResult, preview } = props

    const priceLists = (categoriesList, maxWidth) => {
        let result = [];
        categoriesList.membershipCategories.map((category) => {
            result.push(<Pricing tierCategory={category} title={category.title} key={category.title} maxWidth={maxWidth}/>)
        })
        return result;
    };

    const emptyList = () => {
        return (
            <div className={classes.mainElement}>
                <Typography variant="h4" className={classes.whiteHeader}>
                    No Specials Available
                </Typography>
                <Typography variant="body1" className={classes.textBody}>
                    We are sorry, but there are no special offers available at this time.
                </Typography>
            </div>
        )
    };

    return (
        <div>
                <Head>
                    <title>Holiday Specials • Bozeman Community Kiln</title>
                    <link rel="canonical" href="https://bckstudio.com/holiday-specials/"/>
                    <meta name="description"
                          content="Come Create with us and take advantage of our Holiday Special Prices!."/>
                </Head>
            <div>
                <ShowPreview preview={preview} page={"holiday-specials"}/>
                <Layout>
                    <BrandedHeader>
                        <Typography variant={"h1"} align={"center"} className={classNames(classes.brandFont)} gutterBottom>
                            CREATE.
                        </Typography>
                        <div className={classes.textBody}>
                            <Typography variant={"body1"} component={"p"} align={"center"}>
                                Come Create with us and take advantage of our Holiday Special Prices!
                            </Typography>
                        </div>
                    </BrandedHeader>
                    <Hidden smDown>
                        <Container component="main" maxWidth={"lg"}>
                            {priceLists(membershipsQueryResult, "lg")}
                        </Container>
                    </Hidden>
                    <Hidden mdUp>
                        <Container component="main" maxWidth={"sm"}>
                            {Object.keys(membershipsQueryResult).length === 0 ? emptyList() : priceLists(membershipsQueryResult, "sm")}
                        </Container>
                    </Hidden>
                </Layout>
            </div>
        </div>
    );
}
