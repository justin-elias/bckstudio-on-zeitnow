import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import {Typography} from "@material-ui/core";
// Sections for this page
import Head from "next/head";
import Layout from "../pages-sections/Page-Sections/Layout";
import {brandFont, clp_exclaim, dividerBar, mainElement, playBrand, title, container} from "../assets/jss/nextjs-material-kit";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
import GridItem from "../components/Grid/GridItem";
import GridContainer from "../components/Grid/GridContainer";
import ContactForm from "../components/ContactForm/ContactForm";

const style = (theme) => ({
    brandFont,
    clp_exclaim,
    dividerBar,
    mainElement,
    playBrand,
    title,
    container: {
        ...container,
        textAlign: "center",
        marginTop: "2.5rem",
        paddingBottom: "2.5rem"
    },
    phone: {
        fontSize: "2.5rem",
        color: "#333",
        "&:hover": {
            color: theme.palette.primary.main
        }
    }
});

const useStyles = makeStyles(style);

export default function ContactPage() {
    const classes = useStyles();
    const gKey = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJAzRZ7TxERVMRoCq4nBbxjJQ&key=" + process.env.NEXT_PUBLIC_MAPS_KEY;
    return (
        <div>
            <Head>
                <title>CONTACT US • Bozeman Community Kiln</title>
                <link rel="canonical" href="https://bckstudio.com/contact/"/>
                <meta name="description"
                      content="Let's connect! Reach your community pottery studio via phone or email from our contact page or visit us in Belgrade next to Stockman Bank."/>
            </Head>
            <Layout>
                <BrandedHeader>
                    <Typography variant={"h1"} align={"center"} className={classNames(classes.brandFont)} gutterBottom>
                        Reach Out to Us
                    </Typography>
                </BrandedHeader>
                <GridContainer alignItems={"flex-start"} className={classes.container} justifyContent={"space-evenly"}>
                    <GridItem xs={12} sm={12} md={4}>
                        <ContactForm formTitle={"Email"}/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Typography variant={"h3"} color={"primary"}>
                            Visit
                        </Typography>
                        <iframe width="450" height="450" frameBorder="0" style={{border:0}}
                                src={gKey}
                                allowFullScreen/>
                    </GridItem>
                    <GridItem xs={12}>
                        <Typography variant={"h3"} color={"primary"} align={"center"}>
                            Call
                        </Typography>
                        <Typography variant={"body1"} align={"center"}>
                            <a href="tel:+14062249229" className={classes.phone}>(406)224-9229</a>
                        </Typography>
                    </GridItem>
                </GridContainer>
            </Layout>
        </div>
    )
}
