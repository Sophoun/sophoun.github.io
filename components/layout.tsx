import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";

type LayoutProps = {
    children: JSX.Element,
    title: String
};

const Layout = (props: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <AppBar color="secondary">
                <Toolbar>
                    <Image alt="logo" src={require("../public/favicon-32x32.png")} width={25} height={25} />
                    <Typography className="text-white pl-3 " sx={{ flexGrow: 1 }}>
                        <Link href={"/"}>
                            sophoun.com
                        </Link>
                    </Typography>
                    <Button variant="outlined" href="/resume">
                        Resume
                    </Button>
                </Toolbar>
            </AppBar>
            {props.children}
        </>
    );
}

export default Layout;