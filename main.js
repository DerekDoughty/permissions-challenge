$(function () {

var usersUrl = 'http://localhost:3000/users'
var usersPermissions = 'http://locahost:3000/permissions'

function getUsers(){
 	console.log('users')
 	return $.get(usersUrl)
 	.done(function (getUsersFromUserUrl){
 	})
}

function getPermissions(){
	console.log('permissions')
	return $.get(usersPermissions)
	.done(function (getFromUsersPermissionsUrl){		
	})
}

$('main').on('click', 'button', function () {
	console.log('clicked')
	$(.permissons)
})


});









≈

// var users = $('#template-users').html()
// var usersTmpl = Handlebars.compile(users)
// 	usersTmpl = template ({
// 		name: values
// 		name: values
// 		name: values
// 	})

// <li data-id= '1'> </li>

// var userId = $('li').attr('data=id')
// 					.data('id')

// program button click first.
// next make an ajax request.
// take data and look over each piece (forEach loop)
// hbsfy









