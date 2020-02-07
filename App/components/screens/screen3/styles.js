
import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
const rows = 3;
const cols = 3;
const marginHorizontal = 4;
const marginVertical = 4;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginVertical * (rows + 1));


export default EStyleSheet.create({
  wrapper: {
    flex: 5,
    backgroundColor:'#ffffff'
  },
  scrollContainer:{
    flex:1
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height:Dimensions.get('window').width ,
    width:Dimensions.get('window').width
  },
  
});