import { Link } from "react-router-dom";

import AuthCard from "../../components/ui/AuthCard";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function Register() {
  return (
    <AuthCard title="Create Account">

      <form className="space-y-5">

        <Input
          label="Full Name"
          placeholder="Enter name"
        />

        <Input
          label="Email"
          placeholder="Enter email"
          type="email"
        />

        <Input
          label="Password"
          placeholder="Enter password"
          type="password"
        />

        <Button>
          Register
        </Button>

      </form>

      <div className="mt-6 text-center">

        Already have an account?

        <Link
          to="/login"
          className="text-blue-600 ml-2"
        >
          Login
        </Link>

      </div>

    </AuthCard>
  );
}