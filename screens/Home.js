import React from 'react';
import { StyleSheet, Image} from 'react-native';
import { Container, Content, Header, Button, ListItem, Text, Icon, Left, Body, Title, Footer, FooterTab } from 'native-base';

const styles = StyleSheet.create({
  header: {
    marginTop: 24,
    backgroundColor: "#1E90FF"
  },
});

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Экогид: Звери',
  };

  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
    };
  }

  async componentDidMount() {
    setTimeout(()=>{
      this.setState({ isOn: true });
    }, 3000);
  }

  render() {
    return (
      <Container>
       <Content>
      <Image
          style={{width: 250, height: 250}}
          source={require('../assets/ico_250.png')}
        />

      <ListItem icon>
          <Body>
          </Body>
        </ListItem>

        <ListItem icon style={{marginTop: 50 }}>
          <Left>
            <Button style={{ backgroundColor: "#9ACD32"}}>
              <Icon active name= 'search' />
            </Button>
          </Left>
          <Body>
            <Text>Определитель</Text>
          </Body>
        </ListItem>

        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#9ACD32" }}>
              <Icon active name='book' />
            </Button>
          </Left>
          <Body>
            <Text>Учебник</Text>
          </Body>
        </ListItem>

        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#9ACD32" }}>
              <Icon active name='help' />
            </Button>
          </Left>
          <Body>
            <Text>Инстуркция</Text>
          </Body>
        </ListItem>

        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#9ACD32" }}>
              <Icon active name="bug"/>
            </Button>
          </Left>
          <Body>
            <Text>ЭкоГид</Text>
          </Body>
        </ListItem>

        <ListItem icon>
          <Body>
          </Body>
        </ListItem>

        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='flask' />
            </Button>
          </Left>
          <Body>
            <Title>Практика:
            </Title>
          </Body>
        </Header>

         <ListItem icon>
          <Body>
          </Body>
        </ListItem>

        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#CD5C5C" }}>
              <Icon active name='laptop' />
            </Button>
          </Left>
          <Body>
            <Text>Атлас</Text>
          </Body>
        </ListItem>

        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#CD5C5C" }}>
              <Icon active name='globe' />
            </Button>
          </Left>
          <Body>
            <Text>Систематика</Text>
          </Body>
        </ListItem>

        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#CD5C5C" }}>
              <Icon active name='ribbon' />
            </Button>
          </Left>
          <Body>
            <Text>Викторина</Text>
          </Body>
        </ListItem>

        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#CD5C5C" }}>
              <Icon active name='arrow-dropright' />
            </Button>
          </Left>
          <Body>
            <Text>Ещё</Text>
          </Body>
        </ListItem>


       </Content>
       <Footer>
          <FooterTab>
            <Button active>
              <Text>Home</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Lesson')}>
              <Text>Lesson</Text>
            </Button>
          </FooterTab>
        </Footer>
    </Container>
    );
  }
}
