import BaseContainer from "@/components/commons/BaseContainer/BaseContainer";
import Image from "next/image";
import styles from "./mypage.module.scss";
import classNames from "classnames/bind";
import { useRouter } from "next/router";
import ProfileChangeForm from "@/components/domains/mypage/ProfileChangeForm";
import PasswordChangeForm from "@/components/domains/mypage/PasswordChangeForm";
import withAuthNoneExist from "@/utils/withAuthNoneExist";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import getDashBoardsSSR from "@/api/getDashBoardsSSR";
import { GetServerSidePropsContext } from "next";
import { easeInOut, motion } from "framer-motion";

const cx = classNames.bind(styles);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();
  const accessToken = context.req.cookies.accessToken || "";

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["sideBarDashboardList"],
    queryFn: ({ pageParam = 1 }) => getDashBoardsSSR("pagination", accessToken, 18, pageParam),
    initialPageParam: 1,
    getNextPageParam: (pages: any) => {
      return pages.length + 1;
    },
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      accessToken,
    },
  };
}

function Mypage({ dehydratedState, accessToken }: any) {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <HydrationBoundary state={dehydratedState}>
      <BaseContainer currentPath={currentPath} accessToken={accessToken}>
        <div className={cx("mypage-container")}>
          <motion.div
            className={cx("mypage-container-backward")}
            onClick={() => {
              window.history.go(-1);
            }}
            animate={{ x: [4, 0, 4] }}
            transition={{
              duration: 1.5,
              ease: easeInOut,
              repeat: Infinity,
            }}>
            <Image width={20} height={20} src="/assets/icons/ic-arrow-backward.svg" alt="뒤로가기" />
            <span>돌아가기</span>
          </motion.div>
          <ProfileChangeForm />
          <PasswordChangeForm />
        </div>
      </BaseContainer>
    </HydrationBoundary>
  );
}

export default withAuthNoneExist(Mypage);
