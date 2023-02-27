import navigationStrings from "./navigationString";
import TabRoute from "./TabRoute";

export default function (Stack) {
    return (
    <>
        <Stack.Screen name={navigationStrings.TABROUTE} component={TabRoute} />
    </>
    )
}