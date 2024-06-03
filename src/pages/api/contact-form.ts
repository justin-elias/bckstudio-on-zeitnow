/*
 * Copyright (c) 2020. Bozeman Community Kiln
 */
import {NowRequest, NowResponse} from "@vercel/node"
import Mailgun from "mailgun-js"

type SendResponse = Mailgun.messages.SendResponse
type SendData = Mailgun.messages.SendData

// if (process.env.NODE_ENV === "production") {
//     Sentry.init({dsn: process.env.SENTRY_DSN});
// }

// const errorHandler = (error: ErrorEvent, errorType: Severity) => {
//     if (process.env.NODE_ENV === "production") {
//         Sentry.withScope((scope) => {
//             scope.setLevel(errorType);
//             Sentry.captureException(error);
//         })
//     }
//     else {
//         console.log(error)
//     }
// }

export default async (req: NowRequest, res: NowResponse) => {

    try {
        //Required structure for mailgun API

        // address attributes for Test mode
        const testAttributes: SendData = {
            to: 'justin@bckstudio.com',
            subject: '***TEST*** ' + req.body.firstName + ' ' + req.body.lastName + ' sent CONTACT FORM (bckstudio.com)',
            // Message has to come from domain verified address
            from: 'Contact Form' + ' ' + '<contactForm@mail.bckstudio.com>'
        };

        // address attributes for Live mode
        const liveAttributes: SendData = {
            to: 'studio@bckstudio.com',
            bcc: 'justin@bckstudio.com',
            subject: req.body.firstName + ' ' + req.body.lastName + ' sent CONTACT FORM (bckstudio.com)',
            // Message has to come from domain verified address
            from: 'Contact Form' + ' ' + '<contactForm@mail.bckstudio.com>'
        };
        console.log("cp0");
        console.log("NODE_ENV: " + process.env.NODE_ENV)
        // Allow OPTIONS for preflight checks
        if (req.method === "OPTIONS") {
            return res.status(200).send("");
        }
        if (req.method === "GET") {
            return res.status(204).send("");
        }

        if (req.method !== "POST") {
            console.log(req);
            return res.status(403).send("Forbidden");
        }

        // handle api tests
        if (req.body.testStatusCode) {
            if (req.body.testStatusCode === "200") {
                return res.status(200).send("test success");
            } else {
                try {

                    setTimeout(() => {
                        console.log("5 sec test timer elapsed");
                        return res.status(req.body.testStatusCode).send("test returned")
                    }, 5000)
                } catch (error: any) {
                    // errorHandler(error, Severity.Debug);
                }
            }
        }

        // Any submitter email from example.com domain will be treated as a test case
        const dataBuilder = () => {

            if (req.body.email === "exception@example.com") {
                try {
                    console.log("cp: test exception")
                    // error producing function to test sentry implementation
                    // Sentry.captureException("This is an error")
                } catch (error) {
                    // Sentry.captureException(error)
                }
            }
            const splitEmail = req.body.email.split("@");

            let attributes: SendData = splitEmail[1] === "example.com" ? testAttributes : liveAttributes;
            attributes.text = req.body.firstName + ' ' + req.body.lastName + ' <' + req.body.email + '> sent a message\n\n' + req.body.message;

            // Add Reply-To header so that all replies go to the form submitter instead of the mailgun sender account
            attributes['h:Reply-To'] = req.body.firstName + ' ' + req.body.lastName + ' <' + req.body.email + '>';

            return attributes;
        };

        const data = dataBuilder();
        console.log("cp1: data: " + JSON.stringify(data));

        const sendMail = async () => {
            try {
                if (process.env.MAILGUN_KEY && process.env.MAILGUN_DOMAIN) {
                    const mailgunInstance = Mailgun({
                        apiKey: process.env.MAILGUN_KEY,
                        domain: process.env.MAILGUN_DOMAIN
                    });
                    return await mailgunInstance.messages().send(data)
                }
            } catch (error: any) {
                // errorHandler(error, Severity.Error);
                return res.status(502).send("undelivered with error: " + error);
            }
        };
        return sendMail().then((body: SendResponse | NowResponse | undefined) => {
            console.log('cp:4, resBody: ' + body);
            if (body) {
                if ("message" in body) {
                    console.log(body.message);
                    return res.status(200).send(body.message);
                }
            }
        }).catch(error => {
            // errorHandler(error, Severity.Error);
            return res.status(502).send("undelivered with error: " + error);
        });
    }catch (error: any) {
        // errorHandler(error, Severity.Error);
        return res.status(502).send("undelivered with error: " + error);
    }
}
