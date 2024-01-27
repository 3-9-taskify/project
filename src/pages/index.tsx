import Link from "next/link";
import Button from "@/components/commons/button/ResponseButton";
import Sidebar from "@/components/commons/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <div style={{ padding: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <Link href="/button-example">
            <Button state="reject">button-example</Button>
          </Link>
        </div>
        <div>
          <Link href="/scss-example">
            <Button state="reject">scss-example</Button>
          </Link>
        </div>
        <div>
          <Link href="/tag-example">
            <Button state="reject">tag-example</Button>
          </Link>
        </div>
        <Sidebar />
      </div>
    </>
  );
}
