import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

const PASS_KEY = "admin_auth";
const PASS_HASH = "Kntech@123";

export function useIsAuthed() {
  return sessionStorage.getItem(PASS_KEY) === "1";
}

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(PASS_KEY) === "1");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === PASS_HASH) {
      sessionStorage.setItem(PASS_KEY, "1");
      setAuthed(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
  };

  if (authed) return <>{children}</>;

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-background">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-72">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-2">
          <Lock className="w-5 h-5 text-muted-foreground" />
        </div>
        <p className="text-sm text-muted-foreground">Enter password to continue</p>
        <Input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Password"
          className={error ? "border-destructive" : ""}
          autoFocus
        />
        {error && <p className="text-xs text-destructive">Incorrect password</p>}
        <Button type="submit" className="w-full">Unlock</Button>
      </form>
    </div>
  );
}
