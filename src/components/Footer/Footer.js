/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import {List, ListItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import styles from "src/assets/jss/nextjs-material-kit/components/footerStyle.js";
import HeroImg from "../HeroImage/HeroImg";
import heroImg2 from "../../assets/img/bck/darkened_wheel@1x.jpg";
import SocialMediaInfo from "../../pages-sections/Page-Sections/SocialMediaInfo";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import Link from "next/link";


const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  return (
      <div>
        <HeroImg image={heroImg2}>
          <SocialMediaInfo/>
        </HeroImg>
        <BusinessInfo/>
        <footer className={footerClasses} role={"contentinfo"}>
          <div className={classes.container}>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <Link href={"/memberships"}>
                    <a
                        className={classes.block}
                    >
                      Memberships
                    </a>
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link href={"/classes"} passHref>
                    <a
                      className={classes.block}
                    >
                      Classes
                    </a>
                    </Link>
                  </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <Link href={"/encounters"} passHref>
                    <a
                        className={classes.block}
                    >
                      Encounters
                    </a>
                  </Link>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <Link href={"/policies"} passHref>
                    <a
                        className={classes.block}
                    >
                      Cancellation Policies
                    </a>
                  </Link>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <Link href={"/contact"} passHref>
                    <a
                        className={classes.block}
                    >
                      Contact Us
                    </a>
                  </Link>
                </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} Bozeman Community Kiln
              </div>
            </div>
        </footer>
      </div>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
