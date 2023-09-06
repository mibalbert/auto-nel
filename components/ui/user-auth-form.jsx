"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

export function UserAuthForm({ className, ...props }) {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6 pt-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-5 ">
          <div className="grid gap-3 ">
            <Label className="" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className="border border-gray-500"
            />
          </div>
          <div className="grid gap-3">
            <Label className="" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              className="border border-gray-500"
            />
          </div>
          <Button disabled={isLoading} className="mt-6">
            {isLoading && (
              <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
            )}
            <Mail className="w-4 h-4 mr-3" /> Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 bg-background text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <Icons.google className="w-4 h-4 mr-2" />
        )}{" "}
        Sign In with Google
      </Button>
    </div>
  );
}
