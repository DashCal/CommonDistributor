var lgu = lgu || {};

lgu.ver = "v0.0.1";
lgu.consoleTextU = "\n$[ ](15)#,/\n$[ ](11)#/@@@@\n$[ ](10)#/@@@@\n  .]@@   ,@@@@^\n  @@@^   @@@@/\n  @@@   =@@@@\n ,@@^   @@@@^\n =@@^  ,@@@@\n ,@@^  =@@@^   .]].\n    =$[@](12)#^\n    =$[@](12)#\n$[ ](11)#,[[\@/\n"
lgu.consoleTextC = "\nCopyright © $[%YEAR](1)# $[%LOC](1)#. All Rights Reserved.\nChange the world together: Contact@$[%LOC](1)#.top\n:)"
lgu.gReplacements = { '%LOC': 'LocalWu', '%LOCS': 'Local Wu' };
lgu.r = { colorScheme: { std: 0, light: 1, dark: 2, }, fontSizeScheme: { nano: -3, mini: -2, small: -1, std: 0, big: 1, large: 2, max: 3 }, fontStyleScheme: { std: 0, sans: 1, serif: 2, handwritten: 3 } };
lgu.barrierFree = { achomaScheme: { std: 0, red: 1, green: 2, blue: 3, grey: 4 }, deslexiaScheme: { std: 0, heavy: 1, pear: 2 } };
// variant variables
lgu.date = new Date();
lgu.gReplacements['%YEAR'] = lgu.date.getFullYear();
lgu.gReplacements['%MONTH'] = lgu.date.getMonth() + 1;
lgu.gReplacements['%DATE'] = lgu.date.getDate();
lgu.gReplacements['%HOURS'] = lgu.date.getHours();
lgu.gReplacements['%MINUTES'] = lgu.date.getMinutes();
lgu.gReplacements['%SECONDS'] = lgu.date.getSeconds();
lgu.gReplacements['%MILLISECONDS'] = lgu.date.getMilliseconds();
lgu.gReplacements['%WEEK'] = lgu.date.getDay();

lgu.XMixA = {
    MixVariable: "A",
    MixMethod: function () {
    }
};
lgu.log = function (logStr) {
    console.log(logStr + "");
};
lgu.XMixB = {
    MixVariable: "B",
    MixMethod: function () {
    }
};

// PAGE FUNCTIONS

lgu.to = function (href) {
    if (href != false) window.location.href = href;
}

lgu.title = function (str) {
    document.title = str;
}

lgu.removeLoading = function (baseTime, fadeTime) {
    setTimeout(function () {
        let gLoading = document.querySelector('.whole.gLoading');
        if (gLoading && gLoading.classList.contains('loading')) {
            gLoading.classList.remove('loading');
        }
        gLoading.style.opacity = 0;
    }, baseTime);
    setTimeout(function () {
        let gLoading = document.querySelector('.whole.gLoading');
        gLoading.style.display = 'none';
    }, baseTime + fadeTime);
}

// CLIPBORAD FUNCTIONS

lgu.copyText = function (text) {
    if (navigator.clipboard) {
        copyText = (text) => {
            navigator.clipboard.writeText(text);
            return true;
        }
    } else {
        copyText = (text) => {
            let input = document.createElement('input');
            input.setAttribute('value', 'text');
            input.value = text;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            return true;
        }
    }
    copyText(text);
}

// lgu.readClipboard = async function () {

// }

// COLOR SCHEME

lgu.preferColorScheme = function () {
    let body = document.body;
    if (body.classList.contains("darkMode")) {
        body.classList.remove("darkMode");
    }
    if (body.classList.contains("lightMode")) {
        body.classList.remove("lightMode");
    }
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        body.classList.add("darkMode");
    } else {
        body.classList.add("lightMode");
    }
}

lgu.switchColorScheme = function (colorScheme) {
    let body = document.body;
    if (body.classList.contains("darkMode")) {
        body.classList.remove("darkMode");
    }
    if (body.classList.contains("lightMode")) {
        body.classList.remove("lightMode");
    }
    switch (colorScheme) {
        case lgu.r.colorScheme.dark:
            body.classList.add("darkMode");
            break;
        case lgu.r.colorScheme.light:
            body.classList.add("lightMode");
            break;
    }
}

// BARRIER FREE SCHEME

// BASE 64

lgu.b64 = function (str) {
    const utf8Encoder = new TextEncoder();
    const binaryData = utf8Encoder.encode(str);
    let binaryString = '';
    const len = binaryData.byteLength;
    for (let i = 0; i < len; i++) {
        binaryString += String.fromCharCode(binaryData[i]);
    }
    return btoa(binaryString);
}

lgu.db64 = function (base64Str) {
    let padding = base64Str.length % 4 === 0 ? 0 : 4 - (base64Str.length % 4);
    base64Str += "=".repeat(padding);
    let binaryString = "";
    try {
        binaryString = window.atob(base64Str);
        let bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++)
            bytes[i] = binaryString.charCodeAt(i);
        return new TextDecoder("utf-8").decode(bytes);
    } catch (error) {
        return "";
    }
}

// lgu.show = function (Id, Or) {
//     let element = document.getElementById(Id);
//     if (element) {
//         if (!Or) {
//             if (element.classList.contains("gNone")) { }
//             else {
//                 element.classList.add("gNone");
//             }
//         } else {
//             if (element.classList.contains("gNone")) { element.classList.remove("gNone"); }
//             else { }
//         }
//     }
// }

// EDIT CONTENT


// REPLACE CONTENT

lgu.replace = {
    content: function (id, content) {
        let span = document.getElementById(id);
        if (span) {
            span.textContent = content;
        }
    },

    contentAll: function (Class, content) {
        let spans = document.getElementsByClassName(Class);
        if (spans && spans.length != 0) {
            for (let i = 0; i < spans.length; i++) {
                spans[i].textContent = Content;
            }
        }
    },

    aHref: function (id, href) {
        let link = document.getElementById(id);
        if (link) {
            link.href = href;
        }
    },

    aHrefAll: function (element) {
        let links = element.querySelectorAll('a.aReplace');
        links.forEach(link => {
            let href = link.href;
            link.href = lgu.replace.pattern(href, lgu.gReplacements);
        });
    },

    traverse: function (element) {
        let elements = element.getElementsByClassName('gReplace');
        if (elements && elements.length != 0) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].textContent = lgu.replace.pattern(elements[i].textContent, lgu.gReplacements);
            }
        }
    },

    traverseAll: function (element) {
        if (element.nodeType === Node.TEXT_NODE) {
            element.nodeValue = lgu.replace.pattern(element.nodeValue, lgu.gReplacements);
        } else {
            for (let i = 0; i < element.childNodes.length; i++) {
                lgu.replace.traverse(element.childNodes[i]);
            }
        }
    },

    // replace pattern for $[any](n)#
    pattern: function replacePattern(inputString) {
        let regex = /\$\[([^\]]*)\]\((\d+)\)#/g;
        function replacer(match, replacementContent, replacementCount) {
            let count = parseInt(replacementCount, 10);
            let result = replacementContent.repeat(count);
            return result;
        }
        let resultString = inputString.replace(regex, replacer);
        return resultString;
    },

    // replace pattern for $[kv+any](n)# with replacements
    pattern: function (inputString, replacements) {
        // $[Content](Repeat)#
        let regex = /\$\[([^\]]*)\]\((\d+)\)#/g;
        function replacer(match, replacementContent, replacementCount, originalReplacementContent, offset, string) {
            // replacementCount into Int
            let count = parseInt(replacementCount, 10);
            let replacementValue = replacements[replacementContent] || replacementContent;
            let result = String(replacementValue).repeat(count);
            return result;
        }
        let resultString = inputString.replace(regex, replacer);
        return resultString;
    }
}

// FETCH JSON DATA

lgu.fetchJsonData = async function (dataUrl) {
    try {
        let response = await fetch(dataUrl);
        if (!response.ok) {
            throw new Error(`HTTP error!status:${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching JSON data:", error);
        return null;
    }
}

// MAIN FUNCTION
lgu.consoleText = lgu.replace.pattern(lgu.consoleTextU, lgu.gReplacements) + lgu.replace.pattern(lgu.consoleTextC, lgu.gReplacements) + " " + lgu.date.getFullYear().toString().padStart(4, "0") + "-" + (lgu.date.getMonth() + 1).toString().padStart(2, "0") + "-" + lgu.date.getDate().toString().padStart(2, "0") + " " + lgu.date.getHours().toString().padStart(2, "0") + ":" + lgu.date.getMinutes().toString().padStart(2, "0");
lgu.log(lgu.consoleText);
// lgu.removeLoading(10000, 400);
// lgu.replace.aHrefAll(document.body);
// lgu.replace.traverse(document.body);
// lgu.preferColorScheme();

// document.addEventListener('DOMContentLoaded', function (e) {
//     lgu.replace.aHrefAll(document.body);
//     lgu.replace.traverse(document.body);
//     lgu.preferColorScheme();
//     lgu.removeLoading(1000, 400);
// })

// window.addEventListener('load', function (e) {
//     // console.clear();
// })
