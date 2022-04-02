import { useEffect, useState } from "react";
import { get } from "api/api";
import logger from "utils/other/logger";

export default function Home(props) {
    const [test, setTest] = useState(null);

    logger("HELLO");

    useEffect(() => {
        get("/todos/2", (data) => setTest(data));
    }, []);
    return (
        <div>
            {props.data && <span>DATA: {JSON.stringify(props.data)}</span>}
            {test && <div>TEST: {JSON.stringify(test)}</div>}
        </div>
    );
}

export const getStaticProps = async ({ params }) => {
    const data = await get("/todos/1");

    return {
        props: { data }, // will be passed to the page component as props
        revalidate: 120,
    };
};
