function Person(props) {
    return (
        <div className="person">
            <h1> {props.name} </h1>
            <p> Your age is: {props.age} </p>
        </div>
    )
}

const app = (
    <div>
        <Person name="Max" age="32" />
        <Person name="Jhoni" age="23" />
    </div>
)

const domContainer = document.querySelector('#example0');
ReactDOM.render(app, domContainer)