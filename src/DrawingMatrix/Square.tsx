import { Box, Link } from '@mui/joy';

interface ColorBox {
    color: string
}

//create a pallete and then let people draw on a canvas

const ColorBox: React.FunctionComponent<ColorBox> = ({color}) => {
    return <Box
        component="span"
        sx={{
            position: 'relative',
            width: '1em',
            height: '1em',
            fontSize: 'var(--Icon-fontSize)',
            borderRadius: '2px',
            backgroundImage: `linear-gradient(90deg, var(--joy-palette-text-tertiary) 50%, transparent 50%), linear-gradient(90deg, transparent 50%, var(--joy-palette-text-tertiary) 50%)`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: '100% 50%, 100% 50%',
            backgroundPosition: '0 0, 0 100%',
            '&::after': {
                content: '""',
                position: 'absolute',
                display: 'block',
                inset: 0,
                bgcolor: color,
                borderRadius: 'inherit',
                boxShadow: 'inset 0 0 0 1px #bababa',
            },
        }}
    />
};

export const Square = () => {
    return <Link
        component="button"
        color="neutral"
        textColor="inherit"
        startDecorator={<ColorBox color="success.900" />}
        sx={{
            fontSize: 'xs',
            fontFamily: 'code',
            textAlign: 'left',
            alignItems: 'flex-start',
            cursor: 'copy',
        }}
        >
    </Link>
};