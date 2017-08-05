var fdb = new ForerunnerDB();
var db = fdb.db("fuck");
var studentCollection = db.collection('students');
var parentCollection = db.collection('parents');

// for (var i = 0; i < 10; i++) {
//  var newStudent = {
//      name: "Orange" + i,
//      age: 10 + i
//  }
//  studentCollection.insert(newStudent)
// }
// studentCollection.save()

studentCollection.load()
parentCollection.load()

function createHTMLString(_id, name) {
    return "<tr><td class='studentsID'>" + _id + "</td><td>" + name + "</td><td><button class='changeButton btn btn-info'data-id='" + _id + "'>change</button><button class='deleteButton btn btn-danger'data-id='" + _id + "'>delete</button></td></tr>"
}

function createparentHTMLstring(_id, name) {
    return "<option value='" + _id + "'>" + name + "</option>"
}

function load() {
    var students = studentCollection.find();
    console.log(students)
    for (var i = 0; i < students.length; i++) {
        console.log(students[i]._id);
        $("#studentsTable").append(createHTMLString(students[i]._id, students[i].name, ));
    }
    var parents = parentCollection.find();
    for (var i = 0; i < parents.length; i++) {
        $("#parentID").append(createparentHTMLstring(parents[i]._id, parents[i].name, ));
        $("#parent-id").append(createparentHTMLstring(parents[i]._id, parents[i].name, ));

    }
    $("#studentsTable").on("click", ".studentsID", function() {
        var studentsID = $(this).text();
        console.log(studentsID)
        var query = {
            _id: studentsID
        }
        var student = studentCollection.find(query)[0];
        $("#studentsName").text(student.name)
        $("#studentsage").text(student.age)
        $("#studentsID").text(student._id)
        $("#studentsnumber").text(student.number)
        $("#studentsIQ").text(student.IQ)
        $("#studentsgender").text(student.gender)
        $("#studentsfeature").text(student.feature)
        $("#studentseducation").text(student.education)
        $("#studentsjob").text(student.job)
        $("#studentsweight").text(student.weight)
        $("#studentsheight").text(student.height)
        $("#studentszodiac").text(student.zodiac)
        $("#studentsconstellation").text(student.constellation)
        $("#students帳號").text(student.帳號)
        $("#students帳號密碼").text(student.帳號密碼)


        $('#studentsInfo').modal('show');
    });
}
setTimeout(load, 1000);

function fuck() {
    var name = $("#usr").val();
    var age = $("#pwd").val();
    var number = $("#num").val();
    var gender = $("#gen").val();
    var feature = $("#fea").val();
    var education = $("#edu").val();
    var job = $("#work").val();
    var IQ = $("#brain").val();
    var weight = $("#wei").val();
    var height = $("#hei").val();
    var zodiac = $("#zod").val();
    var constellation = $("#con").val();
    var 帳號 = $("#E").val();
    var 帳號密碼 = $("#pas").val();
    var parentID = $("#parent-id").val();
    var newStudents = {
        name: name,
        age: age,
        number: number,
        gender: gender,
        feature: feature,
        education: education,
        job: job,
        IQ: IQ,
        weight: weight,
        height: height,
        zodiac: zodiac,
        constellation: constellation,
        帳號: 帳號,
        帳號密碼: 帳號密碼,
        parentID: parentID

    };
    studentCollection.insert(newStudents);
    studentCollection.save();
    var student = studentCollection.find(newStudents)[0];
    console.log(student);
    $("#studentsTable").append(createHTMLString(student._id, student.name));
};
$("#fuck").click(fuck);

function deleteData() {
    var id = $(this).attr("data-id")
    console.log(id)
    studentCollection.remove({
        _id: id
    });
    studentCollection.save()
    $(this).parents("tr").remove()
}
$("#studentsTable").on("click", ".deleteButton", deleteData)
$("#studentsTable").on("click", ".changeButton", changeData)

function changeData() {
    var studentsID = $(this).attr("data-id");
    console.log(studentsID)
    var query = {
        _id: studentsID
    }
    var student = studentCollection.find(query)[0]
    console.log(student);
    $("#search").val();
    $("#changeName").val(student.name);
    $("#changeAge").val(student.age);
    $("#changenumber").val(student.number);
    $("#changegender").val(student.gender);
    $("#changefeature").val(student.feature);
    $("#changeeducation").val(student.education);
    $("#changejob").val(student.job);
    $("#changeIQ").val(student.IQ);
    $("#changeweight").val(student.weight);
    $("#changeheight").val(student.height);
    $("#changezodiac").val(student.zodiac);
    $("#changeconstellation").val(student.constellation);
    $("#change帳號").val(student.帳號密碼);
    $("#change帳號密碼").val(student.帳號密碼);

    　
    $("#parentID").val(student.parentID)
    $("#changeSave").attr("data-id", studentsID);
    $("#changeModal").modal('show');


}
$("#studentsTable").on("click", ".updateButton", changeData)

function changeSave() {
    var studentId = $(this).attr("data-id");
    console.log(studentId);
    var name = $("#changeName").val();
    var age = $("#changeAge").val();
    var number = $("#changenumber").val()
    var gender = $("#changegender").val()
    var feature = $("#changefeature").val()
    var education = $("#changeeducation").val()
    var job = $("#changejob").val()
    var IQ = $("#changeIQ").val()
    var weight = $("#changeweight").val()
    var height = $("#changeheight").val()
    var zodiac = $("#changezodiac").val()
    var constellation = $("#changeconstellation").val()
    var 帳號 = $("#change帳號").val()
    var 帳號密碼 = $("#change帳號密碼").val()
    var parentID = $("#parentID").val()
    var newStudent = {
        age: age,
        name: name,
        number: number,
        gender: gender,
        feature: feature,
        education: education,
        job: job,
        IQ: IQ,
        weight: weight,
        height: height,
        zodiac: zodiac,
        constellation: constellation,
        帳號: 帳號,
        帳號密碼: 帳號密碼,
        parentID: parentID


    };
    studentCollection.updateById(studentId, newStudent);
    studentCollection.save();
    $("#changeModal").modal('hide');
}
$("#changeSave").on("click", changeSave);

function search() {
    var gtage = $("#gtage").val();
    console.log(gtage);
    var selectedgender = [];

    if ($("#shit").prop("checked")) {
        selectedgender.push("girl")
    }
    if ($("#bitch").prop("checked")) {
        selectedgender.push("boy");
    }
    if ($("#ho").prop("checked")) {
        selectedgender.push("人妖")
    }




    var students = studentCollection.find({
        age: {
            $gt: gtage / 1
        },
        gender: {
            $in: selectedgender

        }



    });
    console.log(students);
    console.log(gtage);
    console.log(selectedgender);
    $("#studentsTable").find("tr").remove();

    for (var i = 0; i < students.length; i++) {
        console.log(students[i]._id);
        $("#studentsTable").append(createHTMLString(students[i]._id, students[i].name, ));


    }
}
$("#search").on("click", search);
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}