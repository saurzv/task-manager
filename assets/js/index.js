$(document).ready(function () {
    $("#update_task").submit(function (event) {
        event.preventDefault();

        var raw_array = $(this).serializeArray();

        var data = {};

        $.map(raw_array, function (object, i) {
            data[object["name"]] = object["value"];
        });

        if (!data["fin"]) {
            data["fin"] = false;
        } else {
            data["fin"] = true;
        }

        // console.log(data);

        var req = {
            url: `http://${window.location.host}/api/task/${data.id}`,
            method: "PUT",
            data: data,
        };

        $.ajax(req).done(function () {
            window.location.href = "/";
        });
    });
    if (window.location.pathname == "/") {
        $ondel = $(".table tbody tr td a.del-btn");
        $ondel.click(function () {
            var id = $(this).attr("task-id");
            console.log(id);
            var request = {
                url: `http://${window.location.host}/api/task/${id}`,
                method: "DELETE",
            };
            $.ajax(request).done(function () {
                location.reload();
            });
        });
    }
});
