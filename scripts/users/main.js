require(['models/User', 'router','css!style.css'], function(User, Router){
	
	var users = [new User('Barney'),
	             new User('Cartman'),
	             new User('Sheldon')];
	
	localStorage.users = JSON.stringify(users);

	Router.startRouting();
	
});