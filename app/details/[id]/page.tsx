"use client";
import React from "react";
import Header from "@/app/components/header";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Details: React.FC = ({params}) => {

    const {id} = params;

    return (
        <div>
            <Header />
            <div className={`mt-24`}>
                <p>Details Post for id #{id}</p>
            </div>
        </div>
    );
};

export default Details;