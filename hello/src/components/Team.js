function Team(props){
    let theme=
        props.title > 10 ? "success" :
            props.title > 0 ? "warning" : "danger";
    let classes = 'alert alert-${theme} text-center';
    return(
        <h1 className={classes}>
            <strong>{props.name}</strong> a emporté <strong>{props.title} titres</strong>
        </h1>
    );
}

export default Team;