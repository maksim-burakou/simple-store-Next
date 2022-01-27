import { Container } from "../base/Container";
import { Header } from "../base/Header";
import { ChatButton } from "../base/Chat";
import { CartContextProvider } from "../../contexts/cart";

const DefaultLayout = ({ children }) => (
  <CartContextProvider>
    <main className="App">
      <Header />
      <Container>{children}</Container>
      <ChatButton />
    </main>
  </CartContextProvider>
);

export default DefaultLayout;
