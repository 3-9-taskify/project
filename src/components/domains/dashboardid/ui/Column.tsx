import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getCardList } from "@/components/domains/dashboardid/api/queries";
import { getCardListQueryKey } from "@/components/domains/dashboardid/api/queryKeys";

import styles from "./Column.module.scss";
import classNames from "classnames/bind";

import ColumnHeader from "./ColumnHeader";
import CardList from "./CardList";
import { MixButton } from "@/components/commons/Buttons/MixButton";

const cx = classNames.bind(styles);

interface ColumnProps {
  columnId: number;
  columnTitle: string;
}

export default function Column({ columnId, columnTitle }: ColumnProps) {
  const {
    data: cardPagesInfo,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: getCardListQueryKey(columnId),
    queryFn: ({ pageParam = 1 }) => getCardList(pageParam, columnId),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.cursorId,
  });

  const cardPages = cardPagesInfo?.pages ?? [];
  const cardCount = cardPagesInfo?.pages[0].totalCount;

  // 로딩 요소를 참조하기 위한 ref
  const loadingRef = useRef(null);

  useEffect(() => {
    if (isFetchingNextPage || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { root: document.querySelector(".column-pages"), threshold: 0 }
    );

    const currentLoadingRef = loadingRef.current;
    observer.observe(currentLoadingRef);

    // Clean up
    return () => observer.unobserve(currentLoadingRef);
  }, [isFetchingNextPage, hasNextPage, fetchNextPage]);

  return (
    <section className={cx("column")}>
      <div className={cx("column-header")}>
        <ColumnHeader columnTitle={columnTitle} cardCount={cardCount} />
      </div>
      <MixButton />
      <div className={cx("column-pages")}>
        {cardPages.map((cardPage) => (
          <div className={cx("column-cards")}>
            <CardList cardList={cardPage.cards} />
          </div>
        ))}
        <div ref={loadingRef}>{isFetchingNextPage ? "Loading more..." : null}</div>
      </div>
    </section>
  );
}
