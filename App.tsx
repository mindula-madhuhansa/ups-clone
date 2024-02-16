import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://cuautla.stepzen.net/api/incendiary-aardwolf/__graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `apikey cuautla::stepzen.net+1000::2414e6828a421c2a36b51139b3889d1ac837c117ac3c17597d028e861f60b903`,
  },
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
