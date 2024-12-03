import React from "react";

const Realtime = () => {
    const today = new Date();
    const options = { year: "numeric", month: "short", day: "2-digit" };
    const formattedDate = today.toLocaleDateString("en-US", options);

    return (
        <div>
            <p>{formattedDate}</p>
        </div>
    );
};

export default Realtime;
