import content from "./test.xml"
import {proxyContent} from "./proxyImport";
import * as path from 'path';


describe("Webpack typescript sanity tests", () => {
    it("async", async () => {
        async function asyncCall(): Promise<string> {
            return "OK"
        }

        expect(await asyncCall()).toBe("OK")
    });


    it("importing raw xml", () => {
        expect(content).toBe(undefined);
        expect(proxyContent).toBe(undefined);
    });

    it("Testing class syntax", () => {
        class MyClass {
            constructor(public myProperty: string = "value") {
            }
        }

        const instance = new MyClass();
        expect(instance.myProperty).toBe("value");

    });

    it("Import path", () => {
        expect(path).not.toBe(undefined);
    });
});