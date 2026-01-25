import { Button } from '@mui/joy';
import { COLORS } from './colors';

interface Square {
    color: number
    onClick: ()=> void
    selected?: boolean
}

export const Square:React.FunctionComponent<Square> = ({color, onClick, selected}) => {
    const boxShadow = selected ? 'inset 0 0 0 4px black' : 'inset 0 0 0 1px #bababa';

    return <Button
        onClick={onClick}
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
            borderColor: 'red',
            '&::after': {
                content: '""',
                position: 'absolute',
                display: 'block',
                inset: 0,
                bgcolor: COLORS[color],
                borderRadius: 'inherit',
                boxShadow: boxShadow,
            },
        }}
    />
};