import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'sf-pro',
    textAlign: 'center',
    padding: 10,
  },
  inputText: {
    fontSize: 70,
    color: 'white',
    fontFamily: 'sf-pro',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  bodyText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'sf-pro',
    textAlign: 'center',
    padding: 5,
  },
  button: {
    marginTop: 9,
    paddingTop: 2,
    paddingBottom: 6,
    paddingLeft: 32,
    paddingRight: 30,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: 'black',
    borderRadius: 30,
    borderWidth: 0.7,
    borderColor: 'white',
  },
  logo: {
    width: 90,
    height: 90,
  },
});
export default styles;
