import { createContext, useContext, useState } from "react";
import "./index.less";

const ThemeContext = createContext(null);

console.log("ThemeContext", ThemeContext);

export default function MyApp() {
  const [theme, setTheme] = useState("dark");
  return (
    // @ts-ignore
    <ThemeContext.Provider value={theme}>
      <Form />
      <button
        onClick={() => {
          setTheme("light");
        }}
      >
        测试
      </button>
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      {/* <Button>Sign up</Button>
      <Button>Log in</Button> */}
    </Panel>
  );
}

function Panel(props: any) {
  const { title, children } = props;
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

// function Button(props: any) {
//   const { children } = props;
//   const theme = useContext(ThemeContext);
//   const className = "button-" + theme;
//   return <button className={className}>{children}</button>;
// }
