import {Template} from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './task.html';

Template.task.events({
	//为何要click后面要有空格？
	'click .toggle-checked'(){
		//set the checked property to the opposite of its current value
		console.log("checked "+ this._id);

		Meteor.call('tasks.setChecked',this._id,!this.checked);
},
	'click .delete'(){
		console.log('remove '+this.text);
		Meteor.call('tasks.remove',this._id);
	},
});
