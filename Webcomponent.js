(function () {
    const dataBinding = this.dataBindings.getDataBinding('myDataBinding')
    let tmpl = document.createElement('template');

    let member = dataBinding.getMembers()[0]
    tmpl.innerHTML = 
    `<button type="button" id="myBtn">Helper Button ${member}</button>` ;   
   
    class PerformanceHelp extends HTMLElement {
        constructor() {
            super();
            this.init();           
        }

        init() {            
              
            let shadowRoot = this.attachShadow({mode: "open"});
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.addEventListener("click", event => {
            var event = new Event("onClick");
            this.fireChanged();           
            this.dispatchEvent(event);
            });           
        }

        fireChanged() {
            console.log("jej");     
           
        }        
        
    }

    customElements.define('custom-button', PerformanceHelp);
})();
