
// qurome.blankView

{
	init() {
		// fast references
		this.els = {
			content: window.find("content"),
			tabBody: window.find(".tab-body"),
			el: window.find(".blank-view"),
		};
	},
	dispatch(event) {
		let APP = qurome,
			Self = APP.blankView,
			el;
		// console.log(event);
		switch (event.type) {
			case "select-quick-link":
				el = $(event.target);
				Self.els.tabBody.prepend(`<iframe frameborder="0" src="${el.data("url")}"></iframe>`);
				Self.els.content.data({ show: "iframe" });
				break;
		}
	}
}