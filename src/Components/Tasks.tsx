
const Tasks = ({id: string, todo:string}) => {
    interface StringObject {
        [key: string]: string;
    }

    const mainBox: StringObject = {
        border: "1px solid white",
        width: "20%",
        textAlign: "center",
        padding: "10px"
    }

    const buttonStyle: StringObject = {
        width: "90%",
        margin: "auto",
        display: "flex",
        height: "2rem",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2rem",
        marginBottom: "12px",
        borderRadius: "7px",
        border: "none",
        cursor: "pointer"
    }
    return (
        <div style={mainBox}>
            <p>{todo}</p>
            <button style={buttonStyle}>Edit</button>
            <button style={buttonStyle}>Delete</button>
        </div>
    )
}

export default Tasks