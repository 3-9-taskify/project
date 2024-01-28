import Link from "next/link";
import Button from "@/components/commons/button/ResponseButton";

export default function Home() {
  return (
    <>
<<<<<<< HEAD
      <div style={{ padding: "10px", display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
=======
      <div style={{ padding: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
>>>>>>> 7caf33342503c9df5cd9f1eb3878e79d133f6a3e
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
<<<<<<< HEAD
        <div>
          <Link href="/landing">
            <Button state="reject">landing</Button>
          </Link>
        </div>
        <div>
          <Link href="/modal-wh">
            <Button state="reject">modal</Button>
          </Link>
        </div>
=======
>>>>>>> 7caf33342503c9df5cd9f1eb3878e79d133f6a3e
      </div>
    </>
  );
}
