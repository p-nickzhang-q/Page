var systemModule = 
{
	"moduleName" : "system",
	"menus" : [{
		"menuName" : "add mudule",
		"href" : "#!"
	},{
		"menuName" : "add user",
		"href" : "#!"
	},{
		"menuName" : "add permission",
		"href" : "#!"
	},{
		"menuName" : "add menu",
		"href" : "#!"
	},{
		"menuName" : "logOut",
		"href" : "#!/logOut"
	}]
};

var studentModule = 
{
	"moduleName" : "student",
	"dataPage" : "singleStudentPage",
	"menus" : [{
		"menuName" : "add student",
		"click" : true
	},{
		"menuName" : "logOut",
		"href" : "#!/logOut"
	}]
}

var createStudentPage = 
{
	"dataType" : "student",
	"pageName" : "singleStudentPage",
	"title1" : "create student",
	"title2" : "update student",
	"fields" : {
		"name" : {
			"model" : "studentName",
			"label" : "name",
			"placeholder" : "name",
			"type" : "text",
			"required" : true
		},
		"age" : {
			"model" : "age",
			"label" : "age",
			"placeholder" : "age",
			"type" : "number",
			"required" : true
		},
		"major" : {
			"model" : "major",
			"label" : "major",
			"placeholder" : "major",
			"type" : "text",
			"required" : true
		},
		"submit" : {
			"type" : "submit",
			"label" : "submit"
		}
	}
}

var data = [{
	"studentName" : "xiao ming",
	"age" : 20,
	"major" : "语文",
	"dataType" : "student"
},{
	"studentName" : "da ming",
	"age" : 28,
	"major" : "英语",
	"dataType" : "student"
}];