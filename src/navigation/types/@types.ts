import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParams = { 
    Burger: undefined;
    Roll: undefined;
    Lounch: undefined;
    Authorigate: undefined;
    Screen: undefined;
    Water: undefined;
    Korzina: undefined;

};

export type ScreenProps = NativeStackScreenProps<
RootStackParams,
| 'Burger'
| 'Roll'
| 'Lounch'
| 'Authorigate'
| 'Screen'
| 'Water'
| 'Korzina'
>;