import Head from "next/head";

const AppShell = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        {children}
      </main>   
    </>
  );
};

export default AppShell;
