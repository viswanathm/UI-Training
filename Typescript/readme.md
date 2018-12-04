* Install Node: https://nodejs.org/en/
-- testing: in CMD ==> node --version

<!-- Install Typescript compiler -->

* npm install -g typescript

<!-- Cmpiling TS to JS -->

* tsc <filename.ts>

<!-- or -->

* create tsconfig.json

{
    "compilerOptions": {
        "target": "es5"
    }
}


* Execute Run Build Task (Ctrl+Shift+B) from the global Terminal menu. If you created a tsconfig.json file in the earlier section, this should present the following picker: