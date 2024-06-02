
// qurome.blankView

{
	init() {
		// fast references
		this.els = {
			content: window.find("content"),
			tabBody: window.find(".tab-body"),
			tabBar: window.find(".tab-bar"),
			locBar: window.find(".location-bar .loc-input input"),
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
				Self.els.locBar.val(el.data("url"));
				Self.els.tabBar.find(".tab.active span").html(el.find("span").html());
				Self.els.tabBody.prepend(`<iframe frameborder="0" src="${el.data("url")}"></iframe>`);
				Self.els.content.data({ show: "iframe" });
				break;
			case "close-tab":
				Self.els.locBar.val("");
				Self.els.tabBar.find(".tab.active span").html("Blank View");
				Self.els.tabBody.find("iframe").remove();
				Self.els.content.data({ show: "blank-view" });
				break;
		}
	}
}