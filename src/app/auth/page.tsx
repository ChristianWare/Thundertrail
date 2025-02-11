"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function AuthPage() {
  const router = useRouter();
  const [showRegister, setShowRegister] = useState(false);

  return (
    <main>
      <h1>Auth Page</h1>
    </main>
  );
}
