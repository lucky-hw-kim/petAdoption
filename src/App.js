import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Id from "./pages/Id";
import NotFound from "./pages/NotFound";

const cache = new InMemoryCache(
  {
    typePolicies: {
      Query: {
        fields: {
          pets: {
            merge(existing, incoming){
              return incoming;
            }
          }
        }
      }
    }
  }
)

const client = new ApolloClient({
  uri: "http://localhost:4000/graphiql",
  cache
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
       <Header />
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pet/:id' element={<Id />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
