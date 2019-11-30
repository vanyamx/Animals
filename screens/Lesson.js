import React from 'react';
import { Image } from 'react-native';
import { Container, Content } from 'native-base';

export default class Lesson extends React.Component {
  static navigationOptions = {
    title: 'Урок',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
       <Content>
        <Image
            style={{width: 250, height: 250}}
            source={require('../assets/ico_250.png')}
          />
        </Content>
      </Container>
    );
  }
}
