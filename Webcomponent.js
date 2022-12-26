(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `<style>
    .card {
  display : none;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
 .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding-top: 5px;
}
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.buttonElement:hover + .card{
    display:block;
}
.buttonElement{
    background-color: #74992e;
    border-radius: 25px;
}
/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
  </style>
    <div class="buttonElement" style = "width:150px">
        Shelf type N354
    </div>
    <div class="card" style="width:150px">
        <img src="https://cascrielflexso.github.io/customwidget.github.io/shelf.jpeg" alt="Avatar" style="width:100px" class = "center">
            <div class="container" style="width:100px">
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
