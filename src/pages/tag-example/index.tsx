import DescriptionTag from "../../components/commons/tag/descriptionTag/DescriptionTag";
import getRandomColor from "@/components/commons/tag/descriptionTag/getRandomColor";
import ProgressTag from "@/components/commons/tag/progressTag/ProgressTag";

//mock 데이터를 사용했으니 실제 데이터로 변경해 주세요.
const descriptionTag = {
  lists: [
    { id: 1, name: "테스트", color: getRandomColor() },
    { id: 2, name: "테스트2", color: getRandomColor() },
    { id: 3, name: "테스트3", color: getRandomColor() },
  ],
};

export default function TagExwample() {
  return (
    <>
      {descriptionTag.lists.map(list => (
        <DescriptionTag key={list.id} tagName={list.name} tagStyle={list.color} />
      ))}
      <ProgressTag>To Do</ProgressTag>
      <ProgressTag>On Progress</ProgressTag>
      <ProgressTag>Done</ProgressTag>
    </>
  );
}
