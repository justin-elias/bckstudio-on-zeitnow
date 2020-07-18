import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
    "@global": {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: "none",
        },
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    cardHeader: {
        backgroundColor: theme.palette.secondary.main
    },
    cardPricing: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        marginBottom: theme.spacing(2),
    },
    cards: {
        marginTop: "2.5rem",
    },
    priceButton: {
        fontWeight: "bold",
    },
    featuredPriceButton: {
        fontWeight: "bold",
        "&:hover": {
            color: "#ffffff"
        }
    },
    categoryHeaders: {
        color: theme.palette.primary.main,
        marginTop: "2.5rem"
    },
    smButton: {
        maxWidth: "50%"
    },

}));

export default function Pricing(props) {
    const classes = useStyles();

    const {tierCategory, title, maxWidth} = props;

    return (<React.Fragment>
            <Typography variant={"h2"} align={"center"} className={classes.categoryHeaders}>
                {title}
            </Typography>
            <Grid container spacing={5} alignItems={ tierCategory.length > 1 ? "flex-end" : "center"} justify={"center"}>
            {tierCategory.membershipTiers.map((tier) => (
                        <Grid item key={tier.title} xs={12} sm={12} md={4}>
                            <Card className={classes.cards}>
                                <CardHeader
                                    title={tier.title}
                                    titleTypographyProps={{ align: "center" }}
                                    subheaderTypographyProps={{ align: "center" }}
                                    action={tier.title === "Standard" ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            ${tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary">
                                            /{tier.term}
                                        </Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography component="li" variant="subtitle1" align="left" key={line}>
                                                <Divider/>
                                                {line}
                                                <Divider/>
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth={maxWidth === "sm" ? false : true}
                                            variant={tier.buttonVariant}
                                            color="primary"
                                            href={"https://www.paypal.com/cgi-bin/webscr&cmd=_s-xclick&hosted_button_id="+tier.inputValue}
                                            className={classNames(
                                                tier.buttonVariant === "contained" ? classes.featuredPriceButton : classes.priceButton)}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                    </Grid>
            ))}
            </Grid>
    </React.Fragment>);
}
