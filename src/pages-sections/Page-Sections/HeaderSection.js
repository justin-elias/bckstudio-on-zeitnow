import React from "react";
import LargeHeader from "../../components/Header/LargeHeader";
import HeaderLinks from "../../components/Header/HeaderLinks";
import MainLogo from "../../components/MainLogo/MainLogo";
import { Hidden, Typography } from "@material-ui/core";
import SmallHeader from "../../components/Header/SmallHeader";
import Image from "next/image";
import { createStyles, makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(() => createStyles({
    banner: {
        maxWidth: "1442px",
        margin: "auto",
    },
    lgLogo: {
        marginTop: "-20rem",
        marginBottom: "5rem"
    },
    mdLogo: {
        marginTop: "-15rem",
        marginBottom: "5rem"
    },
    bannerAd: {
        backgroundColor: "white",
        width: "100vw",
        marginTop: "4.5rem",
        position: "absolute",
        zIndex: "1",
    },
    text: {
        margin: "auto",
        align: "center",
        justify: "center"
    }
}))

export default function HeaderSection(props) {
    const { noParallax, ...rest} = props;
    const classes = useStyles();

    return (
        <div>
            <Hidden mdDown>
            <LargeHeader
                color="transparent"
                rightLinks={<HeaderLinks role={"navigation"}/>}
                fixed
                changeColorOnScroll={noParallax === undefined ? {
                    height: 50,
                    color: "white",
                } : {
                    height: -200,
                    color: "white",
                }}
                {...rest}
            />
            </Hidden>
            <Hidden smUp>
                <SmallHeader
                    color="white"
                    rightLinks={<HeaderLinks role={"navigation"}/>}
                    fixed
                    size={"xs"}
                    {...rest}

                />
            </Hidden>
            <Hidden lgUp xsDown>
                <SmallHeader
                    color="white"
                    rightLinks={<HeaderLinks role={"navigation"}/>}
                    fixed
                    {...rest}
                />
            </Hidden>
            <Hidden smDown>
                <Toolbar className={classes.bannerAd}><Typography variant={"h4"} className={classes.text}>Sale Finale! Smash Party, Raffle & Silent Auction on August 28, 9am-6:30pm</Typography></Toolbar>
                </Hidden>
            <div className={classes.banner}>
                <Hidden smDown>
                    <Image src={"https://media.graphcms.com/0dKLkonoS7Kw0RXSJhRV"} width={"1442"} height={"450"} priority/>
                </Hidden>
                <Hidden mdDown>
                    <div className={classes.lgLogo}>
                        <MainLogo/>
                    </div>
                </Hidden>
                <Hidden smDown lgUp>
                    <div className={classes.mdLogo}>
                        <MainLogo/>
                    </div>
                </Hidden>
            </div>
        </div>
    )
}
