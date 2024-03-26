import React from "react";
// core components
import Head from "next/head";
// Sections for this page
import Layout from "../pages-sections/Page-Sections/Layout";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
import classNames from "classnames";
import {Typography} from "@material-ui/core";
import {
    brandFont,
    clp_exclaim,
    container,
    dividerBar,
    mainElement,
    playBrand,
    title
} from "../assets/jss/nextjs-material-kit";
import {makeStyles} from "@material-ui/core/styles";


const style = () => ({
    brandFont,
    clp_exclaim,
    dividerBar,
    mainElement,
    playBrand,
    title,
    container: {
        ...container,
        marginTop: "2.5rem",
        paddingBottom: "2.5rem"
    },
    header: {
        margin: "2rem"
    }
});

const useStyles = makeStyles(style);

export default function covid19() {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>HOME • Bozeman Community Kiln</title>
                <link rel="canonical" href="https://bckstudio.com/covid19"/>
                <meta name="description"
                      content="What is Bozeman Community Kiln doing to help stop the spread of COVID-19?"/>
            </Head>
            <Layout>
                <BrandedHeader>
                    <Typography variant={"h1"} align={"center"} className={classNames(classes.brandFont)} gutterBottom>
                        How are we responding to COVID-19?
                    </Typography>
                </BrandedHeader>
                <div className={classNames(classes.main_content, classes.mainContentRaised, classes.container)}>
                    <Typography variant={"body1"} align={"center"} component={"p"}>
                        BCK is joining the community in limiting the spread of COVID-19
                        Ashleah and Heather have been puzzling through some unique problems that come with limiting exposure to COVID-19 in the studio. Here are some of our precautions other than stepping up our regular disinfecting and asking everyone to regularly and properly wash hands and avoid touching your faces.
                    </Typography>
                    <Typography variant={"h4"} align={"center"} component={"h2"} className={classes.header}>
                        Canceling Events
                    </Typography>
                    <Typography variant={"body1"} component={"p"}>
                        Our events bring in individuals who would not typically be spending time together; this is contrary to social isolation that is mandated. If you would like to book private time for your family or group of no more than 6, give us a call, and we will book time for you to be in the studio.
                    </Typography>
                    <Typography variant={"h4"} align={"center"} component={"h2"} className={classes.header}>
                        Limiting class sizes and the number of people in the studio
                    </Typography>
                    <Typography variant={"body1"} component={"p"}>
                        We have worked out a system for people to work in studio in very small groups that provides a 6' clearance from each other. The studio will stay open for members; however, we recommend calling ahead to make sure we keep numbers of people in the studio at one time six or less.
                    </Typography>
                    <Typography variant={"h4"} align={"center"} component={"h2"} className={classes.header}>
                        Rethinking surfaces
                    </Typography>
                    <Typography variant={"body1"} component={"p"}>
                        It turns out COVID-19 can survive ~10 days on surfaces! This means our Wonderful wedging tables need to be disinfected regularly, but with the shortage of isopropyl alcohol, we don't have a disinfectant that won't destroy the cement. Here's our work around. There will be heavy-duty plastic available to place over your work space and Lysol disinfectant for cleaning. We will spray down plastic on our tables with disinfectant after every customer and regularly throughout the day.
                    </Typography>
                    <Typography variant={"h4"} align={"center"} component={"h2"} className={classes.header}>
                        Personal Wedging boards
                    </Typography>
                    <Typography variant={"body1"} component={"p"}>
                        Wedging on plastic is rough! Also, sharing wedging boards could still introduce other people's germs into your clay. So, for those who don't want to brave what's in our porous tables, we will take orders for the creation of personal wedging boards. These boards will be 18" square wood covered in canvas. Lightweight and reasonably sized, they can be washed in the sink and sanitized. We would expect our potters to take them home to limit exposure while they are not in the studio. We are hoping same day/next day turn around on making and delivering these boards to the studio.
                    </Typography>
                    <Typography variant={"h4"} align={"center"} component={"h2"} className={classes.header}>
                        In closing
                    </Typography>
                    <Typography variant={"body1"} component={"p"}>
                        Heather and Ashleah wish to support our community in this scary time. Feel free to contact us or visit us in studio with any questions or concerns. Thank you, everyone, for your support in helping our little business weather the storm.
                    </Typography>
                </div>
            </Layout>
        </div>
    );
}
