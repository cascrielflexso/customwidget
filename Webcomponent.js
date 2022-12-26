(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `<div class="card">
        <img src="shelf.jpeg" alt="Avatar" style="width:100%">
            <div class="container">
        <h4><b>Shelf type N354</b></h4>
       <p>ART nr. 2545852656845</p>
    </div>
    </div>` ;   
   
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
            const dataBinding = this.dataBindings.getDataBinding('myDataBinding')
            alert(`Dimensions : ${dataBinding.getDimensions('dimensions').toString()}`);     
           
        }        
        
    }

    customElements.define('custom-button', PerformanceHelp);
})();
