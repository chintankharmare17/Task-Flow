import AuthCard from "../../components/ui/AuthCard";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function ForgotPassword() {
  return (
    <AuthCard title="Forgot Password">

      <form className="space-y-5">

        <Input
          label="Email"
          type="email"
          placeholder="Enter email"
        />

        <Button>

          Send Reset Link

        </Button>

      </form>

    </AuthCard>
  );
}