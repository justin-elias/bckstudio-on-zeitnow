import {
    CircularProgress,
    Dialog,
    DialogContent,
    DialogTitle,
    Fade,
    IconButton,
    TextField,
    Toolbar,
    Typography,
} from "@material-ui/core";
import Button from "../CustomButtons/RegularButton";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useForm, useController} from "react-hook-form";
import {Close} from "@material-ui/icons";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import styles from "src/assets/jss/nextjs-material-kit/components/headerLinksStyle"
import classNames from "classnames";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    ...styles,
    form: {
        maxWidth: "100%",
    },
    textField: {
        marginRight: "1rem",
    },
    textArea: {
        marginTop: "2rem",
        marginLeft: "0"
    },
    dialog: {
        zIndex: theme.zIndex.drawer + 1
    },
    appBar: {
        position: "relative",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    },
    title:{
        flex: 1,
        fontWeight: "700"
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />;
});

function Input({ control, name, rules, label, rowsMax= 1, rows = 1, multiline, placeholder=""}) {
    const {
        field: { ref, ...inputProps },
    } = useController({
        name,
        control,
        rules: { rules },
        defaultValue: "",
    });

    return <TextField {...inputProps} rowsMax={rowsMax} placeholder={placeholder} rows={rows} inputRef={ref} id={name} label={label} variant={"outlined"} color={"primary"} margin={"normal"} fullWidth required multiline={multiline}/>;
}
export default function ContactForm(props) {

    const classes = useStyles();
    const { reset, handleSubmit, control} = useForm();
    const [open, setOpen] = React.useState(false);
    const [displayDialog, setDialog] = React.useState(<CircularProgress color={"primary"}/>);

    const errorHandler = (error) => {
        if (process.env.NEXT_PUBLIC_SENTRY_DSN){
            // Sentry.withScope(function(scope) {
            //     scope.setLevel("error");
            //     Sentry.captureException(error);
            // })
        }
        else {
            console.log(error)
        }
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const handleDialog = (obj) => {
        setDialog(obj)
    };
    const onSubmit = async (data) => {
        handleToggle();
        let submitSuccess;
        try {
            submitSuccess = await axios.post("/api/contact-form", data);
            if (submitSuccess.status === 200) {
                handleDialog(<Typography variant={"h6"} color={"primary"}>Thanks for reaching out,
                    we will get in touch with you soon</Typography>);
                reset();
            } else {
                handleDialog(<Typography variant={"h6"} color={"primary"}>Something went wrong, we
                    were notified about the error, but please try calling or sending a message on
                    Facebook</Typography>);
                reset();
            }
        } catch (error) {
            errorHandler(error)
        }
    };
    const onError = (errors, e) => {
        console.log(errors, e)
    };
    const formTitle = props.formTitle === undefined ? "Contact US" : props.formTitle;

    return (
        <div className={classes.form}>
            <Typography variant={"h3"} color={"primary"} align={"center"}>
                { formTitle }
            </Typography>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <Input name={"firstName"} control={control} rules={{required: true, maxLength: 80 }} label={"First Name"}/>
                <Input name={"lastName"} control={control} rules={{required: true, maxLength: 100 }} label={"Last Name"}/>
                <Input name={"email"} control={control} rules={{required: true, pattern: /^\S+@\S+$/i}} label={"Email"}/>
                <Input name={"message"} control={control} placeholder={"How can we help?"} multiline rowsMax={10} rows={5} rules={{required: true}} label={"Message"}/>
                <br/>
                <br/>
                <Button id={"submitForm"} variant={"contained"} color={"secondary"} className={classNames(classes.textArea)} type={"submit"}>Send Message</Button>
            </form>
            <div className={classes.listItem}>
                <Dialog open={open} onBackdropClick={handleClose} TransitionComponent={Transition} aria-label={"Sending Contact Form"}>
                    <DialogTitle className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                <Close />
                            </IconButton>
                            <Typography variant="h5" className={classes.title} align={"center"}>
                                Forwarding your message to the studio!
                            </Typography>
                        </Toolbar>
                    </DialogTitle>
                    <DialogContent>
                        <GridContainer align={"center"}>
                            <GridItem xs={12}>
                                {displayDialog}
                            </GridItem>
                        </GridContainer>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
