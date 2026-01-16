import {Box, Tooltip} from "@mui/material";

type Props = {
    value?: string | null;
    mutedIfDash?: boolean;
};

export function EllipsisTooltipCell({value, mutedIfDash}: Props) {
    const text = value ?? "";

    return (
        <Tooltip title={text} arrow placement="top-start">
            <Box
                component="span"
                sx={{
                    display: "block",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    width: "100%",
                    color: mutedIfDash && text === "-" ? "text.secondary" : "text.primary",
                }}
            >
                {text}
            </Box>
        </Tooltip>
    );
}
