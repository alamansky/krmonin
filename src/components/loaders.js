/** @format */

const loaders = {
	spin(view) {
		view.innerHTML = `<div class='loader--spin'></div>`;
	},
	blank(view) {
		view.innerHTML = `<div class='loader--blank'></div>`;
	},
};

export { loaders };
