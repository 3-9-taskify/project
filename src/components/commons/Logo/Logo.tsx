import Link from "next/link";
import styles from "./Logo.module.scss";
import Image from "next/image";
import classNames from "classnames/bind";

interface LogoProp {
  message: string;
}

const cx = classNames.bind(styles);

export default function Logo({ message }: LogoProp) {
  return (
    <div className={cx("container")}>
      <Link href="/">
        <div className={cx("logo")}>
          <Image src="/assets/icons/ic-logo-symbol.svg" alt="logo-symbol" width={165} height={190} priority={true} />
          <Image src="/assets/icons/ic-logo-typo.svg" alt="logo-typo" width={200} height={56} priority={true} />
        </div>
      </Link>
      <p className={cx("welcome-message")}>{message}</p>
    </div>
  );
}
