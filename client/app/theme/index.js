import { createTheme } from '@rneui/themed';

export default theme = createTheme({
  colors: {
    primary: "#D1E8F8",
    secondary: "#FF9392",
    tertiary: '#FFD275',
    accent: 'red',
    background: '#27005D',
    white: "#fff",
    black: "#000",
    grey0: "#D3D3D3",
    grey1: "#6A6C6E",
    searchBg: "#D1E8F8",
    divider: "#D1E8F8",
    error: '#f53427'
  },
  components: {
    Text:(props, theme)=>
      {switch(props.customType){
        case('dark'):
          return ({
            style: {
              color: theme.colors.background,
              fontFamily: 'ConcertOne_400Regular'
            }
          });
        case('italics'):
          return ({
            style: {
              color: theme.colors.grey1,
              fontFamily: 'ConcertOne_400Regular',
              fontStyle: 'italic',
              fontSize: 12
            }
          });
        default:
          return ({
            style: {
              color: theme.colors.primary,
              fontFamily: 'ConcertOne_400Regular'
            }
          });
        };
      },
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
         case('new'):
         return ({
           titleStyle: {
             fontSize: 18,
             fontFamily: 'ConcertOne_400Regular',
             color: theme.colors.background
           },
           buttonStyle: {
             backgroundColor: theme.colors.tertiary,
             borderRadius: 10,
             margin: 10
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
        fontWeight: 'bold',
        color: theme.colors.primary
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

// #D2D6EF
// #AF929D