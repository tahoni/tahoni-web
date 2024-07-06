import React from "react";
import { Container, Image } from "react-bootstrap";
import classes from './index.module.scss';
import WaterLilyCover from "../assets/img/tahoni-cover-water-lilies.jpg";

export const Layout = (): React.ReactElement => {
    return (
        <Container fluid className={classes.Layout}>
            <main className={classes.Main}>
                <div className={classes.Cover}>
                    <Image src={WaterLilyCover} alt="" />
                    <span className="cover-text">My Coding Journey</span>
                </div>
            </main>
        </Container>
    )
}
