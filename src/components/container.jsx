import React from "react"
import { Container, Box } from "@material-ui/core"

export default ({ children }) => {
    return (
        <Container fixed>
            <Box>{children}</Box>
        </Container>
    )
}

// TODO: WRITE MULTIPLE INSTANCE SELECTOR SPECIFICALY FOR BLOGGING, HOME, MAIN AND SHOWCASE
