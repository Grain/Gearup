var ROW_SIZE = 4;

var role = "QA Tester"; // TODO
var freeOnly = true;

var skills = [
    {
        name: "MS Excel",
        requiredBy: ["QA Tester", "Support Technician", "IT Help Desk"],
        resources: [
            {
                name: "Google",
                url: "http://google.ca",
                imageUrl: "http://images.dailytech.com/nimage/G_is_For_Google_New_Logo_Thumb.png",
                trusted: true,
                votes: 25,
                free: true,
                status: "NotStarted",
            },
        ],
    },
    {
        name: "SQL",
        requiredBy: ["QA Tester", "Support Technician", "IT Help Desk"],
        resources: [
            {
                name: "Google",
                url: "http://google.ca",
                imageUrl: "http://images.dailytech.com/nimage/G_is_For_Google_New_Logo_Thumb.png",
                trusted: true,
                votes: 25,
                free: true,
                status: "InProgress",
            },
        ],
    },
    {
        name: "Windows",
        requiredBy: ["QA Tester", "Support Technician", "IT Help Desk"],
        resources: [
            {
                name: "W3Schools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
                trusted: true,
                votes: 25,
                free: true,
                status: "Completed",
            },
            {
                name: "W4Schools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
                trusted: false,
                votes: 0,
                free: true,
                status: "InProgress",
            },
            {
                name: "Coursera",
                url: "",
                imageUrl: "",
                trusted: true,
                votes: 0,
                free: true,
                status: "InProgress",
            },
            {
                name: "W5Schools askdjflkjdf kldjflkdjflk jflkjdf lkfjfdkdfjk kj",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
                trusted: false,
                votes: 100,
                free: true,
                status: "InProgress",
            },
            {
                name: "W3$chools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
                trusted: false,
                votes: 0,
                free: false,
                status: "InProgress",
            },
            {
                name: "W3Schools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
                trusted: false,
                votes: 0,
                free: true,
                status: "InProgress",
            },
            {
                name: "W3Schools",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://www.w3schools.com/images/w3cert.gif",
                trusted: false,
                votes: 0,
                free: true,
                status: "InProgress",
            },
        ],
    },
    {
        name: "Customer Service",
        requiredBy: ["Support Technician", "IT Help Desk"],
        resources: [
            {
                name: "Google",
                url: "http://google.ca",
                imageUrl: "http://images.dailytech.com/nimage/G_is_For_Google_New_Logo_Thumb.png",
                trusted: true,
                votes: 25,
                free: true,
                status: "InProgress",
            },
        ],
    },
];
$(document).ready(function () {
    // LANDING
    $("#want-to-be").on('keyup', function (e) {
        if (e.keyCode == 13) {
            role = $("#want-to-be").val();

            window.scrollTo(0, 150);
            $("#options-col").hide();
            let skillsRowElement = $("#skills-row");

            $(".skills-btn").remove();

            let selectedSkills = skills.filter(skill => skill.requiredBy.filter(item => item === role).length > 0);
            for(let i = 0; i < selectedSkills.length; ++i) {
                skillsRowElement.prepend(`<button class="btn btn-default skills-btn" type="button">${selectedSkills[i].name}</button>`);
            }

            skillsRowElement.show();
        }
    });
    $(".list-group-item").click(function (e) {
        if ($(this).hasClass("unchecked-list-group")) {
            $(this).removeClass("unchecked-list-group");
        } else {
            $(this).addClass("unchecked-list-group");
        }
    });
    $("#next-btn").click(function () {
        $("#landing-container").hide();
        // $("#skills").show();
        let selectedSkills = skills.filter(skill => skill.requiredBy.filter(item => item === role).length > 0);

        let skillsElement = $(`#skills`);

        for (let i = 0; i < selectedSkills.length; i++) {
            makeSkill(skillsElement, selectedSkills[i]);
        }
    });

    // SKILLS
    // skills required by our role
    // skillsElement.hide();
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

    skillElement.append(`<p id=${skill.name} class="skill-name cell col-sm-2">${skill.name}</p>`);
    for (let i = 0; i < resources.length && i < ROW_SIZE; i++) {
        makeResource(skillElement, resources[i]);
    }

    element.append(skillElement);
    element.append(`</div>`);
}

function makeResource(element, resource) {
    let resourceElement = $(`
    <span class="col-sm-2 cell">
        <div class="resource-title">${resource.name}</div>
        <div class="resource-thumbnail">
            <img src="${resource.imageUrl}" height="30" width="80" title="Resource">
        </div>
    </span>
    `);
    element.append(resourceElement);

    resourceElement.click(function () {
        let dialog = $("#dialog");

        let dialogText = $('#dialogText');
        dialogText.text(resource.status);

        let dialogImage = $('#dialogImage');
        dialogImage.attr("src", resource.imageUrl);

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
            title: resource.name,
            width: 600,
            height: 600,
        });
    })
}
