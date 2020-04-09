import React, { Fragment } from "react"
import { Container, Box } from "@material-ui/core"
import PropTypes from "prop-types"

export default function ContainerComponent(props) {
    return (
        <Fragment>
            <Container
                component="div"
                fixed={props.isFixed}
                maxWidth={props.maxWidthCoverage}
                disableGutters={props.extendEnds}
            >
                <Box component="div" className="content-context">{props.children}</Box>
            </Container>
        </Fragment>
    )
}

ContainerComponent.propTypes = {
    children: PropTypes.node,
    extendEnds: PropTypes.bool,
    isFixed: PropTypes.bool,
    maxWidthCoverage: PropTypes.oneOf(["xs", "sm", "md", "lg", "false"]),
}

ContainerComponent.defaultProps = {
    children: "No Content",
    extendEnds: false,
    isFixed: false,
    maxWidthCoverage: "lg",
}

// TODO: WRITE MULTIPLE INSTANCE SELECTOR SPECIFICALY FOR BLOGGING, HOME, MAIN AND SHOWCASE.
