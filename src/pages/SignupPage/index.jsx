import { Input } from "../../components/Input";
import { Button } from "../../components/ui/button";

const SignupPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-login h-screen bg-cover">
      <div className="signup grid grid-cols-2 h-full">
        <div></div>
        <div className="bg-black opacity-[0.9] text-white h-full">
          <div className="flex h-full p-5">
            <section className="">
              <h3 className="text-3xl">Gym Progress Tracker</h3>
              <h3 className="text-3xl mt-5">Signup</h3>
              <form onSubmit={handleSubmit}>
                <Input placeholder="Name" className="my-4" />
                <Input placeholder="Email" type="email" className="my-4" />
                <Input
                  placeholder="Password"
                  type="password"
                  className="my-4"
                />
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  className="my-4"
                />
                <Button>Sign Up</Button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
