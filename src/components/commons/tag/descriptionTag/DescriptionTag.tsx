import styles from "./DescriptionTag.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface TagProps {
  tagName: string;
  tagStyle: {
    backgroundColor: string;
    color: string;
  };
}

function DescriptionTag({ tagName, tagStyle }: TagProps) {
  return (
    <p
      className={cx("tag-item")}
      style={{
        backgroundColor: tagStyle.backgroundColor,
        color: tagStyle.color,
      }}>
      {tagName}
    </p>
  );
}

export default DescriptionTag;
