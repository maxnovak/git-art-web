import React from "react";
import { COLORS } from "./colors"
import { Square } from "./Square";
import { Typography } from "@mui/joy";

export const Pallette = () => {
    return <React.Fragment>
        <Typography level="body-lg">Choose a color to draw with:</Typography>
        {Object.keys(COLORS).map((color) => {
            return <Square color={parseInt(color)} />
        })}
    </React.Fragment>
}