import DescriptionTag from "@/components/commons/tag/DescriptionTag/DescriptionTag";
import styles from "@/components/commons/tag/descriptionTag/DescriptionTag.module.scss";
import getRandomColor from "@/components/commons/tag/DescriptionTag/getRandomColor";
import ProgressTag from "@/components/commons/tag/ProgressTag/ProgressTag";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

//mock 데이터를 사용했으니 실제 데이터로 변경해 주세요.
const descriptionTag = {
  lists: [
    { id: 1, name: "프로젝트", color: getRandomColor() },
    { id: 2, name: "일반", color: getRandomColor() },
    { id: 3, name: "백엔드", color: getRandomColor() },
  ],
};

export default function TagExample() {
  return (
    <>
      <div className={cx("description-tag-list")}>
        {descriptionTag.lists.map(list => (
          <DescriptionTag key={list.id} tagName={list.name} tagStyle={list.color} />
        ))}
      </div>
      <ProgressTag>To Do</ProgressTag>
      <ProgressTag>On Progress</ProgressTag>
      <ProgressTag>Done</ProgressTag>
    </>
  );
}
