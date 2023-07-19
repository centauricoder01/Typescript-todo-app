
const Tasks = () => {
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
            <p>This is Main box Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, sunt nam! Est iste, suscipit provident dignissimos harum quidem obcaecati placeat, ipsa perspiciatis aut nam repellendus! Molestias inventore aliquam cum modi!</p>
            <button style={buttonStyle}>Edit</button>
            <button style={buttonStyle}>Delete</button>
        </div>
    )
}

export default Tasks