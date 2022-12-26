(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `<style>
    .card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
     </style>
    
    <div class="card">
        <img src="https://cascrielflexso.github.io/customwidget.github.io/shelf.jpeg" alt="Avatar" style="width:100%">
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
