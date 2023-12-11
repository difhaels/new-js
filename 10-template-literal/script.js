const musik = [
    {
        penyanyi : "isyanah",
        lagu : "kau adalah",
        feat : "budi"
    },
    {
        penyanyi : "oasis",
        lagu : "dont look back in anger"
    },
    {
        penyanyi : "linkin Park",
        lagu : "I need Medicine",
        feat : "Roar"
    },
];

const el = `    
<ul>
    ${musik.map((m) => {
        return `<li class="musik">penyanyi : ${m.penyanyi}</li>
                <li>lagu : ${m.lagu}</li>
                ${m.feat? `<li>feat : ${m.feat}</li>` : ``}`
            }).join('')
    }
</ul>`

const body = document.querySelector("body").innerHTML = el;