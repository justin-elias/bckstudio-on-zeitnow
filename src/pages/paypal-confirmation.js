import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Head from "next/head";
import {brandFont, clp_exclaim, container, playBrand, title} from "../assets/jss/nextjs-material-kit";
import Layout from "../pages-sections/Page-Sections/Layout";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";

const style = ({
    clp_exclaim,
    title,
    playBrand,
    container: {
        ...container,
        marginTop: "2rem",
        minHeight: "30rem",

    },
    list: {
        maxWidth: "75%",
        margin: "auto"
    },
    brandFont,
});
const useStyles = makeStyles(style);

export default function ConfirmationPage() {
    const classes = useStyles();

    return (
        <div>
            <Head>
                <meta name="robots" content="noindex, nofollow"/>
                <title>Confirmation • Bozeman Community Kiln</title>
            </Head>
            <div>
                <Layout>
                    <BrandedHeader>
                        <Typography variant={"h1"} className={classNames(classes.brandFont)} gutterBottom>
                            THANK<span className={classes.playBrand}> YOU</span><span className={classes.clp_exclaim}>!</span>
                        </Typography>
                    </BrandedHeader>
                    <div className={classes.container}>
                        <Typography variant={"h5"} align={"center"} justify={"center"} className={classes.title}>
                            Thank you for purchasing a membership with us here at BCK!
                        </Typography>
                        <Typography variant={"h5"} align={"center"} justify={"center"} className={classes.title}>
                            You may be wondering what's next?
                        </Typography>
                        <Typography variant={"body1"} align={"left"} justify={"center"}>
                            <List className={classes.list} component={"ul"}>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRight/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        If you have purchased this membership as a gift for someone else,
                                        please send us an email letting us know the name, phone number,
                                        and email address of the person it is for. <a href={"mailto:studio@bckstudio.com"}>Studio@bckstudio.com</a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRight/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        Within two business days, You will receive an email that contains our
                                        membership contract and a link for scheduling your orientation.
                                    </ListItemText>
                                </ListItem>
                                In the meantime, we encourage you to:
                                    <List component={"ul"}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRight/>
                                            </ListItemIcon>
                                            <ListItemText>
                                                Fill out our Liability form by following this link <a href={"https://waiver.smartwaiver.com/w/5e2d071ec88b7/web/"}>Liability Waiver</a>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRight/>
                                            </ListItemIcon>
                                            <ListItemText>
                                                Review some of our instructional <a href={"https://www.youtube.com/watch?v=AwdKNOlgDoQ"}>videos about studio life!</a>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                            </List>
                        </Typography>
                        <Typography variant={"body1"} align={"center"} justify={"center"}>
                            <strong>Please allow us up to two business days to process your membership. Our regular business days are Tuesday-Saturday.</strong>
                        </Typography>

                        <Typography variant={"h6"} align={"center"} justify={"center"} className={classes.title}>
                            Welcome to the Bozeman Community Kiln Community!
                        </Typography>
                    </div>
                </Layout>
            </div>
        </div>
    )
}
