import UniversalRouter from 'universal-router';
import generateUrls from 'universal-router/generateUrls';

export class RouteStore {
	routes = $state([]);
	route = $state();
	router;
	urls;

	start() {
		this.router = new UniversalRouter(this.routes);
		this.urls = generateUrls(this.router, {
			stringifyQueryParams: (params) => new URLSearchParams(params).toString()
		});

		document.addEventListener('click', (e) => {
			const link = e.target.closest('a[data-link]');
			if (!link) return;
			e.preventDefault();
			const href = link.getAttribute('href');
			history.pushState(null, '', href);
			this.render(href);
		});

		window.addEventListener('popstate', () => this.render(window.location.href));

		this.render(window.location.href);
	}

	navigate(routeName, routeParams) {
		const href = this.urls(routeName, routeParams);
		history.pushState(null, '', href);
		this.render(href);
	}

	navigateBack() {
		history.back();
	}

	async render(href) {
		console.debug(href);
		try {
			const url = new URL(href, window.location.origin);
			const queryParams = Object.fromEntries(new URLSearchParams(url.search));
			const route = await this.router.resolve({
				pathname: url.pathname,
				queryParams
			});
			if (route.redirect) {
				window.location = route.redirect;
				return;
			}
			this.route = route;
		} catch (err) {
			console.error(err);
		}
	}
}
