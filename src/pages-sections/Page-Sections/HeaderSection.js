import React from "react";
import LargeHeader from "../../components/Header/LargeHeader";
import HeaderLinks from "../../components/Header/HeaderLinks";
import MainLogo from "../../components/MainLogo/MainLogo";
import { Hidden, Typography } from "@material-ui/core";
import SmallHeader from "../../components/Header/SmallHeader";
import Image from "next/image";
import { createStyles, makeStyles} from "@material-ui/core/styles";

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
