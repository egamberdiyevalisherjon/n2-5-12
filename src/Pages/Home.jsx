import { toast } from "react-toastify";
const Home = () => (
  <div>
    Home{" "}
    <button onClick={() => toast("Muvaffaqqiyatli", { type: "error" })}>
      show toast
    </button>
  </div>
);
export default Home;
