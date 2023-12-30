import React from "react";
import { Container } from "react-bootstrap";
import classes from './index.module.scss';

export const Layout = (): React.ReactElement => {
    return (
        <Container className={classes.Layout}>
            <header className={classes.Header}>
                Here
            </header>
            <main className={classes.Main}>
                There
            </main>
            <footer className={classes.Footer}>
                Here
            </footer>
        </Container>
    )
}