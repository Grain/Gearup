var ROW_SIZE = 4;

var role = "QA Tester"; // TODO
var freeOnly = true;

var skills = [
    {
        name: "MS Excel",
        requiredBy: ["QA Tester", "Support Technician", "IT Help Desk"],
        resources: [
            {
                name: "Excel 2016 Basics",
                url: "http://www.gcflearnfree.org/excel2016/",
                imageUrl: "https://secure.entango.com/servlet/Images/aQG4YkFELTw/cimg/logo_en_web_300x149.gif",
                trusted: true,
                votes: 25,
                free: true,
                status: "NotStarted",
            },
            {
                name: "Using Formulas and Functions in Excel",
                url: "http://www.gcflearnfree.org/excel2016/",
                imageUrl: "http://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg",
                trusted: true,
                votes: 25,
                free: true,
                status: "NotStarted",
            },
            {
                name: "Microsoft Excel Tutorial for Beginners",
                url: "http://www.gcflearnfree.org/excel2016/",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0LwNT8DAHmwLX30z_aX8i1dXs3w6tH5K3zBqP5yaQPi_Z0TuyWnFoj1s",
                trusted: true,
                votes: 25,
                free: true,
                status: "NotStarted",
            }
        ],
    },
    {
        name: "SQL",
        requiredBy: ["QA Tester", "Support Technician", "IT Help Desk"],
        resources: [
            {
                name: "Crash Course in SQL",
                url: "http://google.ca",
                imageUrl: "http://s3.amazonaws.com/codecademy-blog/assets/logo_blue_dark.png",
                trusted: true,
                votes: 25,
                free: true,
                status: "InProgress",
            },
            {
                name: "Interactive Tutorial in SQL",
                url: "http://google.ca",
                imageUrl: "data:image/png;base64,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",
                trusted: true,
                votes: 25,
                free: true,
                status: "InProgress",
            },
            {
                name: "Intro to SQL: Querying and Managing Data",
                url: "http://google.ca",
                imageUrl: "data:image/png;base64,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",
                trusted: true,
                votes: 25,
                free: true,
                status: "InProgress",
            }
        ],
    },
    {
        name: "Windows",
        requiredBy: ["QA Tester", "Support Technician", "IT Help Desk"],
        resources: [
            {
                name: "Desktop and Device Management for IT Pros",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "http://cdn.toptenreviews.com/rev/prod/ce/66527-microsoft-virtual-academy-box.jpg",
                trusted: true,
                votes: 25,
                free: true,
                status: "Completed",
            },
            {
                name: "Intro to Windows Server",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSoDD_R6RGAym1_U9pWfkERbK2SNlT3nZOS_HU70ejzHsVEQIuJhrVSLQ",
                trusted: false,
                votes: 0,
                free: true,
                status: "InProgress",
            },
            {
                name: "Microsoft SQL Server Tutorial",
                url: "",
                imageUrl: "data:image/png;base64,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",
                trusted: true,
                votes: 0,
                free: true,
                status: "InProgress",
            },
            {
                name: "Complete Guide to Using Windows 8",
                url: "http://www.w3schools.com/sql/",
                imageUrl: "data:image/jpeg;base64,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",
                trusted: false,
                votes: 100,
                free: true,
                status: "InProgress",
            }
        ],
    },
    {
        name: "Customer Service",
        requiredBy: ["Support Technician", "IT Help Desk"],
        resources: [
            {
                name: "Customer Service Basics",
                url: "http://google.ca",
                imageUrl: "https://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png",
                trusted: true,
                votes: 25,
                free: true,
                status: "InProgress",
            },
        ],
    },
    {
        name: "Linux/Unix",
        requiredBy: ["QA Tester"],
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
            selectSkill();
        }
    });
    $("#qa-btn").click(function () {
        $("#want-to-be").val($("#qa-btn").text());
        selectSkill();
    })
    $("#support-btn").click(function () {
        $("#want-to-be").val($("#support-btn").text());
        selectSkill();
    })
    $("#it-btn").click(function () {
        $("#want-to-be").val($("#it-btn").text());
        selectSkill();
    })
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

function selectSkill() {
    role = $("#want-to-be").val();
    $("#im-learning").show();
    $("#options-col").hide();
    let skillsRowElement = $("#skills-row");

    $(".skills-btn").remove();

    let selectedSkills = skills.filter(skill => skill.requiredBy.filter(item => item === role).length > 0);
    for (let i = 0; i < selectedSkills.length; ++i) {
        skillsRowElement.prepend(`<button class="btn btn-default skills-btn" type="button">${selectedSkills[i].name}</button>`);
    }

        $(".skills-btn").hover(function() {
        if ($(this).hasClass("skills-btn-active")) {
            $(this).removeClass("skills-btn-active");
        } else {
            $(this).addClass("skills-btn-active");
        }
        
    });
    $(".skills-btn").click(function() {
        if ($(this).hasClass("skills-btn-active")) {
            $(this).removeClass("skills-btn-active");
        } else {
            $(this).addClass("skills-btn-active");
        }
    });

    skillsRowElement.show();
}

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
