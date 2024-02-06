import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getColumnListQueryKey } from "@/components/domains/dashboardid/api/queryKeys";

import styles from "./ColumnList.module.scss";
import classNames from "classnames/bind";

import Column from "./ui/Column";
import { ColumnListData } from "./api/type";

const cx = classNames.bind(styles);

export default function ColumnList() {
  const router = useRouter();
  const dashboardId = router.query.dashboardid;

  const { data: columnListData } = useQuery<ColumnListData>({
    queryKey: getColumnListQueryKey(dashboardId),
  });

  const columnList = columnListData?.data ?? [];
  console.log(columnListData);

  return (
    <article className={cx("column-list")}>
      {columnList.map(({ id, title }: { id: number; title: string }) => (
        <Column key={id} columnId={id} columnTitle={title} />
      ))}
    </article>
  );
}
