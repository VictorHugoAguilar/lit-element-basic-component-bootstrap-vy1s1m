import { LitElement, html, css } from 'lit-element';

class BasicElement extends LitElement {
  static get properties() {
    return {
      firstName: { type: String },
      age: { type: Number },
      country: { type: String },
      employee: { type: Boolean },
      description: { type: String },
      salary: { type: String },
      title: { type: String },
      panelType: { type: String },
    };
  }

  constructor() {
    super();
    this.firstName = 'nothing';
    this.employee = false;
    this.country = 'Spain';
    this.salary = 'not enougth';
    this.panelType = 'primary';
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
        <div class="card">
          <h4 class="card-header text-white ${this.panelType}">${this.title}</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">First name: ${this.firstName}</li>
              <li class="list-group-item">Age: ${this.age}</li>
              <li class="list-group-item">Salary: ${this.salary}</li>
              <li class="list-group-item">Country: ${this.country}</li>
              <li class="list-group-item">Employee: ${this.employee}</li>
              <li class="list-group-item">Description: ${this.description}</li>
            </ul>
        </div>
    `;
  }
}

customElements.define('basic-element', BasicElement);
