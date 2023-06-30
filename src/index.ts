import rawXML from "./test.xml"

async function asyncCall(): Promise<string> {
    return rawXML;
}

asyncCall().then(r => {
    console.log("raw", r);
});
