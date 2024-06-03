import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Typography from "@material-ui/core/Typography";
import { cardTitle, title } from "../../assets/jss/nextjs-material-kit";
import Card from "../../components/Card/Card";
import Image from "next/image";
import CardBody from "../../components/Card/CardBody";
import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classNames from "classnames";
import imagesStyles from "../../assets/jss/nextjs-material-kit/imagesStyles";

const style = ({
  inlineType: {
    display: "inline"
  },
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
  },
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  description: {
    color: "#444"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "2.563rem",
    fontSize: "1.25",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  },
  leftAlignText: {
    textAlign: "left !important"
  },
  rightAlignText: {
    textAlign: "right !important",
    paddingBottom: "3.05rem"
  },
  expandText: {
    margin: "5rem"
  },
  ...imagesStyles,
  cardTitle,
  smallTitle: {
    color: "#6c757d",
  },

});
const useStyles = makeStyles(style);

export default function AboutSection(props) {
  const classes = useStyles();
  const { staff } = props;

  const hCones = "https://media.graphassets.com/MFyMrP7IQisembYJM4k6";
  const width = 258;
  const height = 336;

  const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid,
      classes.imgSmall
  );
  const coneImgClasses = classNames(
      classes.imgSmall
  );

  return (
    <div className={classes.section}>
      <Typography variant={"h3"} className={classes.title}>ABOUT BOZEMAN COMMUNITY KILN</Typography>
        <GridContainer alignItems={"flex-start"} justifyContent={"center"}>
          <GridItem xs={12} sm={12} md={8}>
            <Typography variant={"body1"}>
              Bozeman Community Kiln invites you to come create, learn, and play with ceramic clay. Members enjoy a relaxed,
              and collaborative atmosphere where they can be inspired to make their own projects at their own pace. The
              experience of working in a studio, filled with unique individuals at different experience levels, fosters
              broader learning opportunities and lasting friendships. Artistic expression offers a creative outlet through
              both sculpting and decorating of each unique clay form you create. From your creative outlet to a great first
              date, creating ceramic pottery is a perfect form of entertainment. From sculpture to cup, vase to platter,
              Bozeman Community Kiln will teach you to use clay to throw your personal portfolio to the next level. Our
              mission is to connect locals with the rich clay history and ceramic community that Montana boasts, and share
              that history with our visitors.
            </Typography>
          </GridItem>
          {staff.map((person, index) => (
              <GridItem xs={12} sm={12} md={6} key={index}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <Image src={person.staffPicture.url} width={width} height={height} alt={person.staffPicture.altText} title={person.staffPicture.title} className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    {person.firstName} {person.lastName}
                    <br />
                    <small className={classes.smallTitle}>{person.staffTitle}</small>
                  </h4>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <Image src={hCones} alt={"Horizontal Cones divider"} width={"275px"} height={"18px"} className={coneImgClasses}/>
                  </GridItem>
                  <CardBody>
                    <Accordion>
                      <AccordionSummary
                          expandIcon={<ExpandMoreIcon/>}
                          aria-controls={person.firstName + "-" + person.lastName + "-bio-content"}
                          id={person.firstName + "-" + person.lastName + "-bio-header"}
                      >
                        <h4 className={classNames(classes.cardTitle)}>Learn about {person.firstName}</h4>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant={"body1"} align={"left"}>
                          {person.staffBio.text}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </CardBody>
                </Card>
              </GridItem>
          ))}
        </GridContainer>
    </div>
  );
}
