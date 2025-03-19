"use client";

import { useResponseModal } from "@/context/response-form-modal";

interface ResModTrigBtn {
  children: React.ReactNode;
}

export default function ResModTrigBtn({ children }: ResModTrigBtn) {
  const { openModal } = useResponseModal();

  return <div onClick={() => openModal({ plan: "premium" })}>{children}</div>;
}
