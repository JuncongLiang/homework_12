$(document).ready(function () {

    // We're going to store some data here because we want to reference this
    // stuff multiple times, and this way we don't need to keep doing API calls
    let allWorkouts = [];
    let selectedWorkout = {activities: []};


    /** ********** DOM Population ********** */

    // Populate workout data
    // (If we're adding a new blank item to the list we will want to auto-select
    // it, so that is handled in the params argument)
    function populateWorkouts(params) {
        $("#workouts-list").empty();
        const ul = $("<ul>");
        try {
            allWorkouts.forEach((workout, idx) => {
                console.log(workout);
                const li = $("<li>");
                li.addClass("workout-item");
                li.attr("data-workout-id", workout._id);
                li.attr("data-workout-idx", idx);
                li.html("<span>" + workout.day + "</span><sd class='as'>" + workout.name + "</sd>");
                ul.append(li);
            });
        } catch (e) {
            allWorkouts = [];
        }
        $("#workouts-list").append(ul);
        if (params && params.selectLatest === true) {
            $("#workouts-list li:last-child").addClass("selected");
        }
    }

    // STUDENTS: Populate activity data for the selected workout
    function populateActivities() {

    }


    /** ********* Event handlers ********* */

    //When someone clicks on a workout item, we'll populate the DOM with
    // all activities for that workout. Note that because the workouts don't
    // exist in the DOM when the page is loaded, we need to use the special
    // event selector.
    $("#workouts-list").on("click", ".workout-item", function (e) {
        e.preventDefault();
        console.log("item clicked")
        $("#workouts-list li").removeClass("selected");
        $(this).addClass("selected");
        const idx = $(this).attr("data-workout-idx");
        const id = $(this).attr("data-workout-id");
        selectedWorkout = allWorkouts[idx];
        $("div.right-column").show();
        populateActivities();
    });

    // Create a new empty workout for the user to work with
    $("button#add-workout").on("click", function (e) {
        e.preventDefault();
        const dayString = moment().format("MMM DD, YYYY");
        const name = $("#workout-name").val().trim();
        selectedWorkout = {name: name, day: moment().format("MMM DD, YYYY"), activities: []};
        allWorkouts.push(selectedWorkout);

        // Save to db via api
        saveSelectedWorkout();
        $("#distance").val("")
        $("#sets").val("")
        $("#reps").val("")
        $("#weight").val("")
        $("#duration").val("")
        $("#exercise").val("")
        populateWorkouts({selectLatest: true});
        $("div.right-column").show();
    });


    $('button#stats-id').on('click', () => {
        window.open("stats.html")
    })

    // STUDENTS: Add an activity to the selected workout, then save via API
    $("button#add-activity").on("click", function (e) {
        e.preventDefault();
        console.log($('.selected')[0]);
        saveActivity({
            workout: $('.selected')[0].getElementsByTagName('sd')[0].innerText,
            distance: $("#distance").val().trim(),
            sets: $("#sets").val().trim(),
            reps: $("#reps").val().trim(),
            weight: $("#weight").val().trim(),
            duration: $("#duration").val().trim(),
            exercise: $("#exercise  option:selected").text(),
        });
    });


    /** ********** API Calls ******************* */

    // Retrive a JSON payload of all exercises
    function getExercises() {
        let arr = [];
        $.ajax({
            method: "GET",
            url: "/api/exercise"
        }).then(resp => {
            console.log(resp)
            // populate the select area
            resp.data.forEach(exercise => {
                console.log(exercise.exercise);
                if(arr.indexOf(exercise.exercise) === -1) {
                    const opt = $("<option>");
                    arr.push(exercise.exercise);
                    opt.val(exercise.exercise);
                    opt.text(exercise.exercise);
                    $("select#exercise").append(opt);
                }
            });

        })
    }

    // STUDENTS: Retrieve a JSON payload of all workouts done so far
    function getWorkouts() {
        console.log(JSON.parse(localStorage.getItem("workout" )));
        // $.ajax({
        //     method: "GET",
        //     url: "/api/workout",
        // }).then(function (resp) {
        //     for (let i = 0; i < resp.data.length; i++) {
        //         let selectedWorkout = {name: resp.data[i].name, day: resp.data[i].date, activities: []};
        //         allWorkouts.push(selectedWorkout)
        //     }
        allWorkouts = JSON.parse(localStorage.getItem("workout" ));
        //     console.log(allWorkouts)
            populateWorkouts({selectLatest: true});
        // });
    }

    // Save the currently selected workout
    function saveSelectedWorkout() {
        let workout = JSON.parse(localStorage.getItem("workout"));
        try {
            workout.push(JSON.parse(JSON.stringify(selectedWorkout)))
        } catch (e) {
            workout = []
            workout.push(selectedWorkout)
        }

        localStorage.setItem("workout", JSON.stringify(workout));

        // $.ajax({
        //     method: "POST",
        //     url: "/api/workout",
        //     data: selectedWorkout
        // }).then(function (resp) {
        //     console.log(resp);
        //     if (resp && resp._id) {
        //         selectedWorkout._id = resp._id;
        //     }
        // });
    }

    // Add an activity to the current workout being viewed.
    // Save the currently selected workout
    function saveActivity(activity) {
        console.log(activity);
        $.ajax({
            method: "POST",
            url: "/api/activity?workoutId=" + selectedWorkout._id,
            data: activity
        }).then(function (resp) {
            console.log(resp);
            $("#distance").val("")
            $("#sets").val("")
            $("#reps").val("")
            $("#weight").val("")
            $("#duration").val("")
            $("#exercise").val("")
        });
    }


    // Page-loading operations
    getExercises();
    getWorkouts();
});
