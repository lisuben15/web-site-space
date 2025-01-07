import { Header } from "./Header";

interface Props {
  children : React.ReactNode;

}

export const Layout = ({children} : Props) => {
  return (
    <>
      <Header></Header>
      <main className="h-full min-h-screen">{children}</main>
    </>
  );
};
