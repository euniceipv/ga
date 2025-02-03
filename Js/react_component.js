var x = 0;

class Form extends React.Component
{
    

    //declaração de todos os campos
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            motive: 'information' , //valor deafult 
            email: '',
            phone: '',
            text: ''
        };



    

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(event) {

        const { id, value } = event.target;

        const fieldinformation = {
            username: 'name',
            usermotive: 'motive',
            useremail: 'email',
            userphone: 'phone',
            usertext: 'text'
        };



        this.setState( {
            [fieldinformation[id]]: value
        });
    }



    //evento de submissão
    handleSubmit(event) {
        event.preventDefault(); // para impedir que a página faça "refresh"
        
        const formData = {
            name: this.state.name,
            motive: this.state.motive,
            email: this.state.email,
            phone: this.state.phone,
            text: this.state.text,
        };
        

        //colocar no local Storage
        x = x + 1 ;

        var n = "NAME: " + formData.name;
        var m = "MOTIVE: " + formData.motive;
        var e = "EMAIL: " + formData.email;
        var p = "PHONE: " + formData.phone;
        var t = "TEXT: " + formData.text



        //var infoLS=[formData.name,formData.motive,formData.phone,formData.text]; colocar diretamente
        var infoLS = [n,m,e,p,t];
        localStorage.setItem(x,infoLS);
    }

   
        
    


    

    //renderizacao do formulário
    render(){
    return React.createElement("form",{className:"form",id:"form",onSubmit: this.handleSubmit},  //o evento principal é referenciado aqui
        
        React.createElement("label",{className:"label",htmlFor:"username"},"Name:"),
        React.createElement("input",{ className:"inputs",type:"text", id:"username", value: this.state.name , onChange: this.handleChange}),

        React.createElement("br"),
        
        React.createElement("label", {className:"label",htmlFor:"usermotive"},"Tell us the motive:"),
        React.createElement("select",{className:"inputs",id:"usermotive", value: this.state.motive , onChange: this.handleChange}, 
            React.createElement("option",{value:"information"}, "Informação"), 
            React.createElement("option",{value:"complaint"}, "Complaint"), 
            React.createElement("option",{value:"sugestion"}, "Suggestion"), 
            React.createElement("option",{value:"other"}, "Other")),
        
        React.createElement("br"),

        React.createElement("label",{className:"label",htmlFor:"useremail"},"Your Email:"),
        React.createElement("input",{className:"inputs",type:"emai", id:"useremail", value: this.state.email ,  onChange: this.handleChange}),

        React.createElement("br"),

        React.createElement("label",{className:"label",htmlFor:"useremail"},"Your Phone Number:"),
        React.createElement("input",{className:"inputs",type:"tel",id:"userphone", value: this.state.phone , onChange: this.handleChange}),

        React.createElement("br"),

        React.createElement("label",{className:"label",htmlFor:"usertext"},"Tell us the reason of your contact:"),
        React.createElement("textarea",{className:"inputs",id:"usertext",  value: this.state.text , onChange: this.handleChange }),

        React.createElement("br"),

        React.createElement("input", {className:"botao",type: "submit", value: "Enviar"})



        );
    }
}



//renderizacao de toda a classe 
ReactDOM.render(React.createElement(Form), document.getElementById('formulario'));




