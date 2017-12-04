import React, {Component} from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import {connect} from 'react-redux'; // it's like a window to the whole world of redux. We used it to get access to the state, but also we can call an action creator
import {CardSection} from "./common";
import * as actions from '../actions';

class ListItem extends Component {

    // Lifecycle methods - all we have to do is define them and they will automatically be called for us.
    // This particular one - componentWillUpdate - is called whenever the component is about to be rerenderd to the device.
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    //helper method
    renderDescription() {
        const {library, expanded} = this.props;

        // critical point and decision - if this library is currently selected then to this thing.
        if (expanded) {
            return (
                // JSX of expanded component with description
                // flex: 1 - wrap the text in the screen area only
                <CardSection>
                    <Text style={{flex: 1}}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const {textStyle} = styles;
        const { id, title } = this.props.library;

        return(
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={textStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

// It will return a PLAIN JS OBJECT and that object will show up as props to our component!.
// ownProps - argument named by convention. We put the logic of deciding to expand into this function.
// ownProps are the props where passed down to the component that we're wrapping (here ListItem in connect()).
const mapStateToProps = (state, ownProps)  => {

    const expanded = state.selectedLibraryId === ownProps.library.id; //if it's equal then expanded will be true

    return { expanded: expanded }; //key and value are identical so we can write it also return { expanded };
};


//the second argument is to bind action creators to this component.
// Because we have any mapStateToProps so we don't want to pass to this so we put 'null'.
// actions as a 2nd arg is an object with all actions. "Take this action creators and make sure whenever they are called the actions go to the right place and then
// pass this actions down into the component as props.
export default connect(mapStateToProps, actions)(ListItem);