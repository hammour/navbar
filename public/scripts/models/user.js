import Backbone from 'backbone';

const User = Backbone.Model.extend({
	defaults:{
		firstName:'',
		lastName:'',
		createdAt: null,
		updatedAt:null

	},
	idAttribute: 'id'
});

export default new User();

//in order not to have more than one copy of the user.