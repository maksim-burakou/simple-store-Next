import { Container } from "../components/base/Container";
import { Header } from "../components/base/Header";
import { Products } from "../components/Products";
import { ChatButton } from "../components/base/Chat";
import { CartContextProvider } from "../contexts/cart";

const Home = () => (
  <CartContextProvider>
    <main className="App">
      <Header />
      <Container>
        <Products />
      </Container>
      <ChatButton />
    </main>
  </CartContextProvider>
);

export default Home;
