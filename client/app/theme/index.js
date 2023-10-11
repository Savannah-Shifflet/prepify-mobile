import { createTheme } from '@rneui/themed';

export default theme = createTheme({
  colors: {
    primary: "#D1E8F8",
    secondary: "#FF9392",
    tertiary: 'green',
    accent: 'red',
    background: '#27005D',
    white: "#D1E8F8",
    black: "#D1E8F8",
    grey0: "#D1E8F8",
    searchBg: "#D1E8F8",
    divider: "#D1E8F8"
  },
  components: {
    Text: {
      style: {
        color: "#D1E8F8",
        fontFamily: 'ConcertOne_400Regular'
      }
    },
    Button: (props, theme)=>({
      titleStyle: {
        fontSize: 18,
        fontFamily: 'ConcertOne_400Regular',
        color: theme.colors.secondary
      }
    })
  }
})