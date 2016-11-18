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
        ],
    },
];
$(document).ready(function () {
    // skills required by our role
    var selectedSkills = skills.filter(skill => skill.requiredBy.filter(item => item == role).length > 0);

    // alert(skills.length);
    for (i = 0; i < skills.length; i++) {
        makeSkill($("#skills"), skills[1]);
    }
});

function makeSkill(element, skill) {
    var skillElement = $(`<h1 id=${skill.name}>${skill.name}</h1>`);
    skillElement.appendTo(element);

    // for (i = 0; i < skill.resources.length; i++) {
    //     makeResource(skillElement, skill.resources[i]);
    // }
}

function makeResource(element, resource) {
    $(`<h2>${resource.name}</h2>`).appendTo(element);
}