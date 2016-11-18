var ROW_SIZE = 4;

var role = "QA"; // TODO
var freeOnly = true;

var skills = [
    {
        name: "Java",
        requiredBy: ["QA"],
        resources: [
            {
                name: "Google",
                url: "http://google.ca",
                imageUrl: "http://images.dailytech.com/nimage/G_is_For_Google_New_Logo_Thumb.png",
                trusted: true,
                votes: 25,
                free: true,
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
                trusted: true,
                votes: 25,
                free: true,
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
                trusted: true,
                votes: 25,
                free: true,
            },
            {
                name: "W4Schools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
                trusted: false,
                votes: 0,
                free: true,
            },
            {
                name: "Coursera",
                url: "",
                imageUrl: "",
                trusted: true,
                votes: 0,
                free: true,
            },
            {
                name: "W5Schools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
                trusted: false,
                votes: 100,
                free: true,
            },
            {
                name: "W3$chools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
                trusted: false,
                votes: 0,
                free: false,
            },
            {
                name: "W3Schools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
                trusted: false,
                votes: 0,
                free: true,
            },
            {
                name: "W3Schools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
                trusted: false,
                votes: 0,
                free: true,
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

    // TODO sorting/filtering
    let resources = skill.resources.filter(resource => !freeOnly || resource.free);
    resources.sort((a, b) => {
        let votesA = a.trusted ? 50 + a.votes : a.votes;
        let votesB = b.trusted ? 50 + b.votes : b.votes;

        return votesB - votesA;
    });

    skillElement.append(`<p id=${skill.name} class="col-sm-2">${skill.name}</p>`);
    for (let i = 0; i < resources.length && i < ROW_SIZE; i++) {
        makeResource(skillElement, resources[i]);
    }

    element.append(skillElement);
    element.append(`</div>`);
}

function makeResource(element, resource) {
    let resourceElement = element.append(`
    <span class="col-sm-2 resource-cell">
        <div class="resource-title">${resource.name}</div>
        <div class="resource-thumbnail">
            <img src="${resource.imageUrl}" height="80" width="80" title="Resource">
        </div>
    </span>
    `);

    resourceElement.click(function () {
        let dialog = $("#dialog")
        dialog.attr("title", resource.name);

        let dialogText = $('#dialogText');
        dialogText.text(resource.name + resource.name);

        dialog.dialog({
            modal: true,
            buttons: [
                {
                    text: "OK",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ],
            width: 600,
            height: 600,
        });
    })
}