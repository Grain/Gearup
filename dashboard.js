var role = "QA"; // TODO
var skills = [
    {
        name: "Java",
        requiredBy: ["QA"],
        resources: [
            {
                name: "Google",
                url: "http://google.ca",
            },
        ],
    },
    {
        name: "C++",
        requiredBy: ["TODO"],
        resources: [
            {
                name: "Google",
                url: "http://google.ca",
            },
        ],
    },
    {
        name: "SQL",
        requiredBy: ["QA", "TODO"],
        resources: [
            {
                name: "Google",
                url: "http://google.ca",
            },
            {
                name: "GoogleCom",
                url: "http://google.com",
            },
        ],
    },
];
$(document).ready(function () {
    // skills required by our role
    let selectedSkills = skills.filter(skill => skill.requiredBy.filter(item => item == role).length > 0);

    for (let i = 0; i < skills.length; i++) {
        makeSkill($("#skills"), skills[i]);
    }
});

function makeSkill(element, skill) {
    let skillElement = element.append(`<h1 id=${skill.name}>${skill.name}</h1>`);

    for (let i = 0; i < skill.resources.length; i++) {
        makeResource(skillElement, skill.resources[i]);
    }
}

function makeResource(element, resource) {
    let resourceElement = element.append(`
    <span>
        ${resource.name} <br>
        <a href=${resource.url}><img src="flower.jpg" style="width:82px; height:86px" title="White flower" alt="Flower"></a>
    </span>
    `);
}