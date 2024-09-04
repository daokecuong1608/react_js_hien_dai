import LoginForm from "./LoginForm"

const Lesson4 = (props) => {
    return (
        <LoginForm />
    )
}

export default Lesson4;
//Data flow (luông chảy dữ liệu) in React : top to bottom (parent to child)(with props) and bottom to top (child to parent)(with callback function)
// one way data binding: data flow from parent to child
//state => control data flow
//Model(js/ts) => UpdateView(JSX)

// two way data binding: data flow from parent to child and vice versa
//view(htmml) => update model(js/ts) => update view(jsx/html)