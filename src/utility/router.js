/** @format */
import scrollToTop from './scrollToTop';

const router = {
	currentRoute: null,
	testObj: {},
	on(route, cb) {
		Object.defineProperty(router.testObj, route, {
			value: cb,
			enumerable: true,
		});
	},
	updateRoute(route) {
		let routeLowerCase = route.toLowerCase();
		window.location.hash = routeLowerCase;
	},
	parseRoute(currentRoute) {
		Object.keys(router.testObj).map((x) => {
			if (currentRoute.includes(x)) {
				router.testObj[x]();
			}
		});
	},
	checkRoute() {
		let newRoute = window.location.hash;
		if (newRoute != router.currentRoute) {
			router.currentRoute = newRoute;

			router.parseRoute(router.currentRoute);
			scrollToTop();
		}
	},
	init() {
		setInterval(router.checkRoute, 500);
	},
};

export default router;
