import React, { Fragment } from "react"
import { Container, Box } from "@material-ui/core"
import PropTypes from "prop-types"

export default function ContainerComponent(props) {
    return (
        <Fragment key={ContainerComponent.name}>
            <Container style={{ paddingTop: `${props.contentTopOffset}px`}}
                component="div"
                fixed={props.isFixed}
                maxWidth={props.maxWidthCoverage}
                disableGutters={props.extendEnds}
            >
                <Box component="main" className="content-context">{props.children}</Box>
            </Container>
        </Fragment>
    )
}

ContainerComponent.propTypes = {
    children: PropTypes.node,
    extendEnds: PropTypes.bool,
    isFixed: PropTypes.bool,
    contentTopOffset: PropTypes.number,
    maxWidthCoverage: PropTypes.oneOf(["xs", "sm", "md", "lg", "false"]),
}

ContainerComponent.defaultProps = {
    children: "No Content",
    extendEnds: false,
    isFixed: false,
    contentTopOffset: 32,
    maxWidthCoverage: "lg",
}

// TODO: WRITE MULTIPLE INSTANCE SELECTOR SPECIFICALY FOR BLOGGING, HOME, MAIN AND SHOWCASE.
