import React from "react";
// core components
import Head from "next/head";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import classNames from "classnames";
import {
    brandFont,
    mainElement,
    playBrand,
    primaryFontColor,
    secondaryColor,
    title
} from "../assets/jss/nextjs-material-kit";
import Layout from "../pages-sections/Page-Sections/Layout";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
import ClassList from "../components/ClassList/ClassList";
import {queryCMS} from "../utils/queryCMS";
import gql from "graphql-tag"
import {ShowPreview} from "../components/ShowPreview/showPreview";

const style = (theme) => ({
    h1Container: {
        backgroundColor: theme.palette.secondary.main,
        padding: "2.5rem",
    },
    textBody: {
        maxWidth: "50vw",
        margin: "auto",
        paddingBottom: "2.5rem"
    },

    column: {
        flexBasis: "33.33%",
    },
    panel: {
        maxWidth: "50%",
        margin: "auto"
    },
    grid: {
        backgroundColor: "fff"
    },
    playExclaim: {
        fontSize: "0.85em"
    },
    playBrand: {
        color: theme.palette.primary.main
    },
    main_content: {
        position: "relative",
        zIndex: "2"
    },
    mainContentRaised: {
        margin: "auto",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        "@media (max-width: 830px)": {
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    play_brand: {
        ...playBrand
    },
    clp_exclaim: {
        ...playBrand,
        fontSize: "0.85em"

    },
    section: {
        width: "100%",
        padding: "70px 0",
        textAlign: "center",
        backgroundColor: secondaryColor
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    description: {
        color: primaryFontColor
    },
    links: {
        color: "#0645AD"
    },

    iframeWrapper: {
        margin: "2.5rem"
    },
    mainElement,
    brandFont
});
const useStyles = makeStyles(style);

const classCategories = gql`{
    classCategories(where: {categoryTitle: "Encounters" }) {
        categoryTitle
        description
        classes{
            className
            displayTitle
            instructor {
                firstName
                lastName
                headshotImage {
                    altText
                    height
                    width
                    url
                }
                bio {
                    text
                }
                instructorStatement {
                    text
                }
            }
            classLink
            buttonText
            disableBookingButton
            classDescriptionList
            classInfoList
        }
    }
}`

const instructorQuery =
    gql`{  
        instructor(where: {defaultInstructor: true}){
            firstName
            lastName
            headshotImage {
                url
            }
            bio {
                text
            }
            instructorStatement {
                text
            }
        }       
    }`;


export async function getStaticProps(context) {
    const preview = context.preview ? context.preview : null;
    const prodToken = process.env.NEXT_PUBLIC_GRAPHCMS_WEBCLIENT_API_TOKEN;
    const token = preview ? (context.previewData.token + process.env.NEXT_PUBLIC_GRAPH_CMS_PREVIEW_TOKEN_CLIENT) : prodToken;
    const endPoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

    const classListQueryResult = await queryCMS(classCategories, token, endPoint);
    const defaultInstructor = await queryCMS(instructorQuery, token, endPoint);

    return {
        props: { classListQueryResult, defaultInstructor, preview }, // will be passed to the page component as props
    }
}

export default function Encounters(props) {
    const classes = useStyles();
    const { classListQueryResult, defaultInstructor, preview } = props;

    const classLists = (classList) => {

        let result = [];
        classList.classCategories.map((category, index) => {
            if( category.categoryTitle === "Encounters") {
                result.push(<ClassList index={index} classList={category}
                                       key={category.categoryTitle} title={category.categoryTitle}
                                       defaultInstructor={defaultInstructor}/>)
            }
            })
        return result
    };

    return (
        <div>
            <Head>
                <title>Clay Encounters • Bozeman Community Kiln</title>
                <link rel="canonical" href="https://bckstudio.com/encounters/"/>
                <meta name="description"
                      content="Join us for one of our encounters to experience a one-time visit great for playing with clay where you will walk away with a treasured work of art"/>
            </Head>
            <ShowPreview preview={preview} page={"classes-encounters"}/>
            <Layout>
                <BrandedHeader>
                    <Typography variant={"h1"} align={"center"} className={classNames(classes.brandFont)} gutterBottom>
                        <span className={classes.playBrand}> PLAY</span><span className={classNames(classes.playExclaim, classes.playBrand)}>!</span>
                    </Typography>
                    <div className={classes.textBody}>
                        <Typography variant={"body1"} component={"p"} align={"center"}>
                            Thank you for your interest in our Encounters. Like classes, Encounters directly support local, working artists. These artists rent the studio after regular business hours to lead single visit clay experiences. Encounters provide those looking for a fun night out an opportunity to play in the clay. Scroll down to learn more and book your clay Encounter!
                        </Typography>
                    </div>
                </BrandedHeader>
                {classLists(classListQueryResult)}
            </Layout>
        </div>
    );
}
