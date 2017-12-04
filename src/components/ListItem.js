import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux'; // it's like a window to the whole world of redux. We used it to get access to the state, but also we can call an action creator
import {CardSection} from "./common";
import * as actions from '../actions';

class ListItem extends Component {
    //helper method
    renderDescription() {
        const {library, selectedLibraryId} = this.props;

        if (library.id === selectedLibraryId) {
            return (
                // JSX of expanded component with description
                <Text>{library.description}</Text>
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

// It will return a PLAIN JS OBJECT and that object will show up as props to our component!
const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId };
};


//the second argument is to bind action creators to this component.
// Because we have any mapStateToProps so we don't want to pass to this so we put 'null'.
// actions as a 2nd arg is an object with all actions. "Take this action creators and make sure whenever they are called the actions go to the right place and then
// pass this actions down into the component as props.
export default connect(mapStateToProps, actions)(ListItem);