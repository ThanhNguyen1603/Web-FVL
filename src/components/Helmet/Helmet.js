
import React from "react";
import { Helmet } from "react-helmet-async";
const HelmetComponent = () => {
    return (
        <Helmet>

            {/* Cấu hình cơ bản */}
            <title>First Virtue LLC and Transcend People LLC | A BPO Provider | About</title>
            <meta name="description" content="Discover First Virtue LLC and Transcend People LLC, a leading BPO provider offering tailored business solutions." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#000000" />
            {/* Open Graph */}
            <meta property="og:title" content="First Virtue LLC and Transcend People LLC" />
            <meta property="og:description" content="Discover First Virtue LLC and Transcend People LLC, a leading BPO provider offering tailored business solutions." />
            <meta property="og:image" content="https://transcendpeople.com/tpl/build/Viewport_Img.png" />
            <meta property="og:image:width" content="1600" />
            <meta property="og:image:height" content="700" />
            <meta property="og:url" content="https://transcendpeople.com/" />
            <meta property="og:type" content="website" />
            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="First Virtue LLC and Transcend People LLC" />
            <meta name="twitter:description" content="Discover First Virtue LLC and Transcend People LLC, a leading BPO provider offering tailored business solutions." />
            <meta name="twitter:image" content="https://transcendpeople.com/tpl/build/Viewport_Img.png" />

            {/* Favicon */}
            <link rel="icon" href="./fvl.ico" />
            <link rel="apple-touch-icon" href="./fvl.ico" />
        </Helmet>
    );
}
export default HelmetComponent