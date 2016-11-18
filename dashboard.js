var ROW_SIZE = 5;

var role = "QA"; // TODO
var skills = [
    {
        name: "Java",
        requiredBy: ["QA"],
        resources: [
            {
                name: "Google",
                url: "http://google.ca",
                imageUrl: "http://images.dailytech.com/nimage/G_is_For_Google_New_Logo_Thumb.png",
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
                imageUrl: "http://images.dailytech.com/nimage/G_is_For_Google_New_Logo_Thumb.png",
            },
        ],
    },
    {
        name: "SQL",
        requiredBy: ["QA", "TODO"],
        resources: [
            {
                name: "W3Schools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
            },
            {
                name: "W4Schools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
            },
            {
                name: "W3Schools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
            },
            {
                name: "W3Schools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
            },
            {
                name: "W3Schools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
            },
            {
                name: "W3Schools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
            },
            {
                name: "W3Schools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
            },
        ],
    },
];
$(document).ready(function () {
    // skills required by our role
    let selectedSkills = skills.filter(skill => skill.requiredBy.filter(item => item == role).length > 0);

    for (let i = 0; i < skills.length; i++) {
        makeSkill($(`#skills`), skills[i]);
    }
});

function makeSkill(element, skill) {
    let skillElement = $(`<div class="row">`);

    // TODO sorting of some kind
    let resources = skill.resources.filter(resource => true);

    for (let i = 0; i < resources.length && i < ROW_SIZE; i++) {
        makeResource(skillElement, resources[i]);
    }

    element.append(`<h1 id=${skill.name}>${skill.name}</h1>`);
    element.append(skillElement);
    element.append(`</div>`);
}

function makeResource(element, resource) {
    let resourceElement = element.append(`
    <span class="col-md-2">
        ${resource.name}
        <a href=${resource.url}><img src=${resource.imageUrl} style="width:82px; height:86px" title="White flower" alt="Flower"></a>
    </span>
    `);
}