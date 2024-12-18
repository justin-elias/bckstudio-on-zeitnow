import React from "react";
import Button, {ButtonProps} from "@material-ui/core/Button";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {grayColor} from "../../assets/theme";

const useStyles = makeStyles((theme: Theme) => createStyles({
        root: {
            fontWeight: "bold",
            fontSize: "1.125rem",
            lineHeight: "1.42857143",
            minHeight: "auto",
            minWidth: "auto",
            margin: "0.3125rem 0.0625rem",
            padding: "0.75rem 1.875rem",
            textTransform: "uppercase",
            willChange: "box-shadow, transform",
            transition:
                "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            textAlign: "center",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            touchAction: "manipulation",
            cursor: "pointer",
            borderRadius: "0.2rem",
            "&:hover,&:focus": {
                backgroundColor: grayColor,
                color: theme.palette.primary.contrastText
            }
        }
}));

const PrimaryContainedButton = (props: ButtonProps) => {
    const classes = useStyles(props);
    const {size, href, ...rest} = props;

    return (
        <Button {...rest} className={classes.root} variant={"contained"} color={"primary"} size={size} href={href}>
        </Button>
    );
};

PrimaryContainedButton.defaultProps = {
    size: "large"
}
export default PrimaryContainedButton;
