export default ({icon,filled = false}) => {

    return (<i className={`ph ph-${icon}${filled? '-fill':''}`}></i>);

}