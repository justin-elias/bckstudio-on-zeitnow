import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import React from "react";
import Image from "next/image";

import style from "../../assets/jss/nextjs-material-kit/components/socialMediaInfoStyles";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
    ...style
}));

export default function SocialMediaInfo() {
    const classes = useStyles();

    return (
        <div className={classNames(classes.container)}>
            <Typography variant={"h4"} className={classNames(classes.title)}>Find the Latest on Social Media</Typography>
            <GridContainer spacing={0} justify={"center"}>
                <GridItem xs={2} sm={2} md={1}>
                    <a href={"https://www.facebook.com/BozemanCommunityKiln"} rel="noopener noreferrer" target={"_blank"}>
                        <Image src={"https://media.graphassets.com/8KDmAb7aTjGw6RsxKkIa"} alt={"Follow on Facebook"} className={classes.icon} width={"40px"} height={"40px"}/>
                    </a>
                </GridItem>
                <GridItem xs={2} sm={2} md={1}>
                    <a href={"https://www.instagram.com/bckiln/"} rel="noopener noreferrer" target={"_blank"}>
                        <Image src={"https://media.graphassets.com/pOsoM4xoSNiGPWq5d1Jg"} alt={"Follow on Instagram"} className={classes.icon} width={"40px"} height={"40px"}/>
                    </a>
                </GridItem>
            </GridContainer>
        </div>
    )
}

