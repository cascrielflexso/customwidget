(function() { 
	let template = document.createElement("template");
	template.innerHTML = `
		<button>test</button>
	`;

	class ColoredBox extends HTMLElement {
		constructor() {
		super(); 
		let shadowRoot = this.attachShadow({mode: "open"});
		shadowRoot.appendChild(template.content.cloneNode(true));
		this.addEventListener("click", event => {
			var event = new Event("onClick");
			this.dispatchEvent(event);
		});
			this._props = {};
		}

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = { ...this._props, ...changedProperties };
		}

		onCustomWidgetAfterUpdate(changedProperties) {
			if ("color" in changedProperties) {
				this.style["background-color"] = changedProperties["color"];
			}
			/*if ("prod_number" in changedProperties) {
				this.prod_number = changedProperties["prod_number"];
			}*/
		}
	}
	customElements.define("custom-button", ColoredBox);
})();
