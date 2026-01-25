import React from "react";
import { COLORS } from "./colors"
import { Square } from "./Square";
import { Stack, Typography } from "@mui/joy";

interface Pallete {
    selectedColor: string
    chooseColor: React.Dispatch<React.SetStateAction<string>>
}

export const Pallette: React.FunctionComponent<Pallete> = ({selectedColor, chooseColor}) => {
    return <React.Fragment>
        <Typography level="body-lg">Choose a color to draw with:</Typography>
        <Stack direction={"row"} spacing={2}>
            {Object.keys(COLORS).map((color) => {
                return <Square color={parseInt(color)} onClick={() => chooseColor(color)} selected={selectedColor === color} />
            })}
        </Stack>
    </React.Fragment>
}