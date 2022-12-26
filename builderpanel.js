(function()  {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Insert Product Number</legend>
				<table>
					<tr>
						<td>Product Number</td>
						<td><input id="prod_number" type="text" size="15" maxlength="15"></td>
					</tr>
				</table>
				<input type="submit" style="display:none;">
			</fieldset>
		</form>
		<style>
		:host {
			display: block;
			padding: 1em 1em 1em 1em;
		}
		</style>
	`;

	class BoxBps extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
		}

		_submit(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							prod_number: this.prod_number
						}
					}
			}));
		}

		set prod_number(prod_number) {
			this._shadowRoot.getElementById("prod_number").value = prod_number;
		}

		get prod_number() {
			return this._shadowRoot.getElementById("prod_number").value;
		}
	}

	customElements.define("bps-custom-element", BoxBps);
})();
