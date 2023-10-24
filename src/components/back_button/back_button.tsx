"use client";

import { useRouter } from "next/navigation";
import Icon from "@/components/icon/icon";
import "./back_button.css";

export default function BackButton() {
  const router = useRouter();

  const retroceder = () => {
    router.back();
  };

  return (
    <button className='button' onClick={retroceder}>
      <Icon iconName='reply_all' />
    </button>
  );
}
