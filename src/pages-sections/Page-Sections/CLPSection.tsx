import React from "react";
import classNames from "classnames";
// @material-ui/core components
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
// Style
import {brandFont, playBrand} from "../../assets/jss/nextjs-material-kit";
import Typography from "@material-ui/core/Typography";
import {Hidden} from "@material-ui/core";
import PrimaryContainedButton from "../../components/Buttons/PrimaryContainedButton";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) => createStyles({
  clp_exclaim: {
    ...playBrand,
    fontSize: "0.85em"

  },
  clpButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  gridContainer: {
    marginTop: "2.5rem",
    padding: "2.5rem 0"
  },
  upper: {
    textTransform: "uppercase"
  },
  brandFont,
  playBrand
}));

export default function CLPSection() {
  const classes = useStyles();
  return (
      <div>
        <GridContainer alignItems={"flex-start"} justifyContent={"center"} className={classes.gridContainer}>
          <GridItem sm={12} md={3}>
            <Typography variant={"h3"} component={"h2"} className={classes.brandFont}>
              CREATE.
            </Typography>
            <Typography variant={"h6"} component={"h3"} className={classes.upper}>
              Memberships
            </Typography>
            <Typography variant={"body1"} align={"center"}>
              Join our clay family!
              Choose a membership level that meets your needs.
            </Typography>
            <Hidden mdUp>
              <PrimaryContainedButton href={"/memberships"}>
                Come Create
              </PrimaryContainedButton>
            </Hidden>
          </GridItem>
          <GridItem sm={12} md={3}>
            <Typography variant={"h3"} component={"h2"} className={classes.brandFont}>
              LEARN.
            </Typography>
            <Typography variant={"h6"} component={"h3"} className={classes.upper}>
              Clay Classes
            </Typography>
            <Typography variant={"body1"} align={"center"}>
              Not sure if diving into membership is for you? Try a class and support local artists!
            </Typography>
            <Hidden mdUp>
              <PrimaryContainedButton href={"/classes/"}>
                Come Learn
              </PrimaryContainedButton>
            </Hidden>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Typography variant={"h3"} component={"h2"} className={classes.brandFont}>
              <span className={classes.playBrand}>
                PLAY
              </span>
              <span className={classNames(classes.playBrand, classes.clp_exclaim)}>
                !
              </span>
            </Typography>
            <Typography variant={"h6"} component={"h3"} className={classes.upper}>
              Clay Encounters
            </Typography>
            <Typography variant={"body1"} align={"center"}>
              Join us for a clay encounter. We have a variety to choose from every month!
            </Typography>
            <Hidden mdUp>
              <Link href={"encounters"} passHref>
                <PrimaryContainedButton>
                  Come Play
                </PrimaryContainedButton>
              </Link>
            </Hidden>
          </GridItem>
          <Hidden smDown>
            <GridItem md={12}>
              <GridContainer justifyContent={"center"} alignItems={"center"}>
                <GridItem md={3}>
                  <PrimaryContainedButton href={"/memberships"} >
                    Come Create
                  </PrimaryContainedButton>
                </GridItem>
                <GridItem md={3}>
                  <PrimaryContainedButton href={"/classes/"}>
                    Come Learn
                  </PrimaryContainedButton>
                </GridItem>
                <GridItem md={3}>
                  <PrimaryContainedButton href={"/encounters"}>
                    Come Play
                  </PrimaryContainedButton>
                </GridItem>
              </GridContainer>
            </GridItem>
          </Hidden>
        </GridContainer>
      </div>
  )
}
