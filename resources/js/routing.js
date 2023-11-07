(function() {

    console.log('this ran')

    const teams = ["girls-jv", "girls-varsity", "boys-jv", "boys-varsity"]
    const pagesNotTeamDependent = ["news", "coaches","shop" ]


    // set dropdown selector to match pathname
    if (teams.includes(window.location.pathname.split("/")[1])) {
        document.getElementById('teamSelector').value = window.location.pathname.split("/")[1];
    }


    // re-reoute of of "/" to value saved in localstorage or default to boys-jv
    if (window.location.href == "http://soccer3.test/") {
        if (localStorage.getItem("team")) {
            document.getElementById('teamSelector').value = localStorage.getItem('team')

            if (localStorage.getItem("scheduleWidgetValue")) {
                let scheduleWidgetValue = localStorage.getItem('scheduleWidgetValue');
                let schedulePath = scheduleWidgetValue= "upcoming" ? "u" : "r";

                window.location.href=`http://soccer3.test/${localStorage.getItem("team")}/${schedulePath}`;

            } else {
                window.location.href=`http://soccer3.test/${localStorage.getItem("team")}/u`;
            }
        } else {
            window.location.href = "http://soccer3.test/boys-jv/u";
        }
    }



    if (pagesNotTeamDependent.includes(window.location.pathname.split("/")[1])) {
        if (localStorage.getItem("team")) {
            document.getElementById('teamSelector').value = localStorage.getItem('team')
        }
    }


    document.getElementById('teamSelector').addEventListener('change', (e) => {
        window.localStorage.setItem("team", e.target.value);
        let pathArray = window.location.pathname.split('/')
        pathArray[1] = e.target.value;
        let finishedPath = pathArray.join('/');
        window.location.href = `http://soccer3.test${finishedPath}`
    })


    // event listener when schedule widget buttons are pushed
    let scheduleSelectorBtns = document.querySelectorAll('.scheduleSelectorBtn');
    scheduleSelectorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let value = btn.id;
            let schedulePath = value == "upcoming" ? "u" : "r";
            console.log(schedulePath)
            localStorage.setItem('scheduleWidgetValue', value);
            let pathArray = window.location.pathname.split('/')
            let team = pathArray[1]
            window.location.href=`http://soccer3.test/${team}/${schedulePath}`
        })
    })

})();