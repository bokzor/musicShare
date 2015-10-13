
const composeAnimation = {
    componentDidMount(){
        // Get the components DOM node
        var elem = React.findDOMNode(this);
        // Set the opacity of the element to 0
        elem.style.opacity = 0;
        window.requestAnimationFrame(function() {
            // Now set a transition on the opacity
            elem.style.transition = "opacity 250ms";
            // and set the opacity to 1
            elem.style.opacity = 1;
        });
    }
}


export default composeAnimation;


