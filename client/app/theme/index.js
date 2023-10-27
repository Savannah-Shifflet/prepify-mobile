import { createTheme } from '@rneui/themed';

export default theme = createTheme({
  colors: {
    primary: "#D1E8F8",
    secondary: "#FF9392",
    tertiary: 'green',
    accent: 'red',
    background: '#27005D',
    white: "#fff",
    black: "#D1E8F8",
    grey0: "#D3D3D3",
    searchBg: "#D1E8F8",
    divider: "#D1E8F8",
    error: '#f53427'
  },
  components: {
    Text:(props, theme)=>({
      style: {
        color: props.color==='dark'? '#27005D':"#D1E8F8",
        fontFamily: 'ConcertOne_400Regular'
      }
    }),
    Button: (props, theme)=>
      {switch(props.customType){
        case('pink'):
          return ({
            titleStyle: {
              fontSize: 18,
              fontFamily: 'ConcertOne_400Regular',
              color: theme.colors.background
            },
            buttonStyle: {
              backgroundColor: theme.colors.secondary,
              borderRadius: 10,
              margin: 10
            },
            icon: {
              color: theme.colors.background,
              size: 15
            }
          })
        case('transparent'):
         return({
          titleStyle: {
            fontSize: 18,
            fontFamily: 'ConcertOne_400Regular',
            color: theme.colors.background
          },
          buttonStyle: {
            backgroundColor: "transparent",
            borderRadius: 10,
            margin: 10
          },
          icon: {
            color: theme.colors.background,
            size: 15
          }
         })
      }},
    Input: (props, theme)=>({
      errorStyle: { color: theme.colors.error, marginTop: 5 },
      labelStyle: { color: theme.colors.primary},
      placeholderTextColor: theme.colors.grey0,
      inputContainerStyle: {borderBottomColor: theme.colors.secondary},
      style: {
        fontFamily: 'JosefinSans_400Regular',
        fontWeight: 'bold'
      }
    }),
    Card: (props, theme)=>({
      containerStyle: {backgroundColor: theme.colors.primary, borderRadius: 5 },
      Title: {
        style: {
          fontFamily: 'ConcertOne_400Regular',
          color: theme.colors.background
        }
      }
    }),
    CardTitle: (props, theme)=>({
        style: {
          fontFamily: 'ConcertOne_400Regular',
          color: theme.colors.background,
          fontSize: 20
        }
    }),
    CardDivider: (props, theme)=>({
      color: theme.colors.secondary,
  }),
  }
})