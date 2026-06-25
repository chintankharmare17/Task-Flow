import { Link } from "react-router-dom";

import AuthCard from "../../components/ui/AuthCard";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function Login() {
  return (
    <AuthCard title="Welcome Back 👋">

      <form className="space-y-5">

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
          Login
        </Button>

      </form>

      <div className="mt-6 text-center">

        <Link
          to="/forgot-password"
          className="text-blue-600"
        >
          Forgot Password?
        </Link>

      </div>

      <div className="mt-4 text-center">

        Don't have an account?

        <Link
          to="/register"
          className="text-blue-600 ml-2"
        >
          Register
        </Link>

      </div>

    </AuthCard>
  );
}