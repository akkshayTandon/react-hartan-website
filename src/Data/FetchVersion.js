import { useFetch } from "react-hartan";
import { useState, useEffect } from "react";

export default function FetchVersion() {

    const [latestVersion, setLatestVersion] = useState("0.0.0");
    const [getData] = useFetch();

    async function getLatestVersion() {
        const [result] = await getData("https://registry.npmjs.org/react-hartan");
        setLatestVersion(result["dist-tags"]?.latest);
    }

    useEffect(() => {
        getLatestVersion()
    }, []);

    return latestVersion;
}