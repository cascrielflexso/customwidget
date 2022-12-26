(function()  {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Colored Box Properties</legend>
				<table>
					<tr>
						<td>Color</td>
						<td><input id="builder_color" type="text" size="40" maxlength="40"></td>
					</tr>
					<tr>
						<td>Product</td>
						<td><select id="products"></select>
						</td>
					</tr>
					<tr>
						<td>Color</td>
						<td><input id="builder_color" type="text" size="40" maxlength="40"></td>
					</tr>
				</table>
				<input type="submit" style="display:none;">
			</fieldset>
		</form>
	`;
	
	class ColoredBoxBuilderPanel extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
			const dataBinding = this.dataBindings.getDataBinding('myDataBinding')
			
			
			const products = this._shadowRoot.getElementById("countriesDropDown");
			for (let key in dataBinding.getMembers("Product")) {
 		 		let option = document.createElement("option");
  				option.setAttribute('value', data[key]);

  				let optionText = document.createTextNode(key);
  				option.appendChild(optionText);

			  	products.appendChild(option);
		}
		}

		_submit(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							color: this.color,
							prod_number: this.prod_number
						}
					}
			}));
		}

		set color(newColor) {
			this._shadowRoot.getElementById("builder_color").value = newColor;
		}

		get color() {
			return this._shadowRoot.getElementById("builder_color").value;
		}
		
		set prod_number(newProd_number) {
			this._shadowRoot.getElementById("products").options[this._shadowRoot.getElementById("products").selectedIndex].text = newProd_number;
		}

		get prod_number() {
			return this._shadowRoot.getElementById("products").value;
		}
	}

	customElements.define("builder-custom-panel", ColoredBoxBuilderPanel);
})();
