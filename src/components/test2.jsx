const Greeting = (props) => {
    return <h1>Witaj, {props.name}!</h1>;
};

const array = ['Jakub', 'Mateusz', 'Jan']
const Test2 = () => {
    return (array.map((item, index) => (
            <Greeting name={item} key={index} />
        ))
    );
};

export default Test2;

