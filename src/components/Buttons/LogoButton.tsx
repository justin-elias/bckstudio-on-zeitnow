/*
 * Copyright (c) 2020. Bozeman Community Kiln
 */

import React from "react";
import Button from "@material-ui/core/Button";
// @ts-ignore
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Image from "next/image";
import { LogoButtonProps } from "../../index";

const LogoButton = (props: LogoButtonProps) =>
{
    const {id, hidden, height, width, src, ...rest} = props
    return (
        <Button hidden={hidden}  {...rest}>
            <div id={id} hidden={hidden}>
                <Image src={src} alt={"Bozeman Community Kiln Home"} height={height} width={width}/>
            </div>
        </Button>
    );
};

export default LogoButton;


