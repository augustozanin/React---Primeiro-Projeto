//desconstrução
//props -> title e content -> {title , content }
function TitleWithText(props) {

    return (
        <div>
            <h2>{props.title}</h2>
            <hr />
            <p>{props.content}</p>
        </div>
    );
}

export default TitleWithText;