import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
import {Close} from "@material-ui/icons";
// core components
import Image from "next/image";
import {container} from "src/assets/jss/nextjs-material-kit.js";
import {Dialog, DialogContent, DialogTitle, Fade, IconButton, Toolbar} from "@material-ui/core";
import styles from "src/assets/jss/nextjs-material-kit/components/headerLinksStyle"
import Typography from "@material-ui/core/Typography";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import {dividerBar, mainElement} from "src/assets/jss/nextjs-material-kit";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    ...styles,
    ...container,
    dialog: {
        zIndex: theme.zIndex.drawer + 1
    },
    appBar: {
        position: "relative",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    },
    title: {
        flex: 1,
        fontWeight: "700",
        textAlign: "center",
    },
    dialogButton: {
        position: "absolute",
    },
    raisedDivider: {
        ...mainElement,
        ...dividerBar,
        marginTop: "2rem",
        marginBottom: "2rem"
    },
    bioImg: {
        margin: "1.5rem"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />;
});

export default function InstrBioDialog(props) {
    const classes = useStyles();
    const {instr, defaultInstructor} = props;
    const [open, setOpen] = React.useState(false);
    let instructor = defaultInstructor.instructor;

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    if (instr) {
        instructor = instr;
    }

    return (

        <React.Fragment>
            <Button variant={"outlined"} onClick={handleToggle} color={"primary"}>
                {instructor.firstName}
            </Button>
            <Dialog open={open} onBackdropClick={handleClose} TransitionComponent={Transition}
                    className={classes.container}>
                <DialogTitle className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <Close/>
                        </IconButton>
                        <Typography variant="h5" className={classes.title} align={"center"}>
                            Meet {instructor.firstName}
                        </Typography>
                    </Toolbar>
                </DialogTitle>
                <DialogContent>
                    <GridContainer align={"center"}>
                        <GridItem xs={12} md={12}>
                            <Image src={instructor.headshotImage.url} width={instructor.headshotImage.width} height={instructor.headshotImage.height} alt={instructor.headshotImage.altText} className={classes.bioImg}/>
                        </GridItem>
                        <GridItem xs={12} md={12}>
                            <Typography variant={"body1"}>
                                {instructor.bio.text}
                            </Typography>
                            <div className={classes.raisedDivider}/>
                            <Typography variant={"body1"}>
                                {instructor.instructorStatement.text}
                            </Typography>
                        </GridItem>
                    </GridContainer>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
