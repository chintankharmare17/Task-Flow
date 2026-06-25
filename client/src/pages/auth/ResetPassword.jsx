import AuthCard from "../../components/ui/AuthCard";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function ResetPassword() {
  return (
    <AuthCard title="Reset Password">

      <form className="space-y-5">

        <Input
          label="New Password"
          type="password"
        />

        <Input
          label="Confirm Password"
          type="password"
        />

        <Button>

          Update Password

        </Button>

      </form>

    </AuthCard>
  );
}