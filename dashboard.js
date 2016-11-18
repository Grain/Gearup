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
    var selectedSkills = skills.filter(skill => skill.requiredBy.filter(item => item == role).length > 0);

    for (var i = 0; i < skills.length; i++) {
        makeSkill($("#skills"), skills[i]);
    }
});

function makeSkill(element, skill) {
    var skillElement = element.append(`<h1 id=${skill.name}>${skill.name}</h1>`);

    for (var i = 0; i < skill.resources.length; i++) {
        makeResource(skillElement, skill.resources[i]);
    }
}

function makeResource(element, resource) {
    var resourceElement = element.append(`<h2>${resource.name}</h2>`);
}