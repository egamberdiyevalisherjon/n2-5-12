import {
  // useCallback,
  // useMemo,
  useEffect,
  useState,
} from "react";

const Hooks = ({ age /* user */ }) => {
  const [state, setState] = useState(age);

  useEffect(() => {
    console.log("mounting", state);
    let id = setInterval(() => {
      console.log("sekund");
    }, 1000);
    return () => {
      console.log("unmounting", state);
      clearInterval(id);
    };
  }, [state]);

  // const getUsers = useCallback(async function () {
  //   fetch("...");
  // }, []);

  // useEffect(() => {
  //   getUsers();
  // }, [getUsers]);

  // const getInitialValues = useCallback(
  //   function () {
  //     return {
  //       fName: user.fName,
  //       age,
  //       lName: user.lName,
  //       email: user.email,
  //     };
  //   },
  //   [user.lName, user.fName, user.email, age]
  // );

  // const initialValues = useMemo(() => getInitialValues(), [getInitialValues]);

  // const memoizedFunction = useCallback(() => {}, []);

  // const memoizedPerson = useMemo(() => ({ fName: "Eshmat", age }), [age]);

  // useEffect(() => {
  //   console.log(initialValues);
  //   return () => {};
  // }, [initialValues]);

  return (
    <div>
      Hooks
      <h2>Count: {state}</h2>
      <button onClick={() => setState(state + 1)}>Inc</button>
    </div>
  );
};

export default Hooks;
