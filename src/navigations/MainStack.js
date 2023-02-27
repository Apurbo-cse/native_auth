import React from "react";
import navigationString from "./navigationString";
import TabRoute from "./TabRoute";

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={navigationString.TABROUTE} component={TabRoute} />
    </>
  );
}
