import Image from "next/image";
import { useEffect, useState } from "react";
import recoil, { useRecoilState } from "recoil";
import useSWR from "swr";
import InfiniteScroll from "react-infinite-scroll-component";
import { motion } from "framer-motion";
import { Account } from "@/templates/Account/Account";
import Modal from "@/templates/Modal/Modal";
import Card from "@/templates/Card/Card";
import CardItem from "@/templates/Card/CardItem";
import Popup from "@/templates/popup";
import dtlList from "@/public/datas/dtlList";
import acctDetailJson from "@/public/datas/acctDetail";
import { deviceState, scrollState } from "@/recoil/global";
import fetcher from "@/api/fetch.js";

export default function txList() {
  const [lDeviceState, setDeviceState] = useRecoilState(deviceState);
  const [isOpen, setIsOpen] = useState(false);
  const [detailItem, setDetailItem] = useState([]);
  const [acctDetail, setAcctDetail] = useState([]);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const uri = "/ib20/act/JIWCOM0000000010A?reqType=otpGet&custId=000000088888888";
  const { data, error, isLoading } = useSWR(uri, fetcher);

  useEffect(() => {
    setDeviceState("APP"); //모바일 디바이스를 전역상태에 저장
    setAcctDetail(acctDetailJson[0]); //계좌상세
    setItems(dtlList.slice(0, 10)); //거래내역
    console.log(`setacct : ` + acctDetail);
    return () => {
      // setDeviceState("MW"); //컴포넌트 사라질 때 해당 작업 수행. 모바일 디바이스를 전역상태에 저장
    };
  }, []);

  const onClickCardItem = (item) => {
    console.log(`onclickCardItem called ` + item + ` ` + isOpen);
    setDetailItem(item);
    setIsOpen(!isOpen);
  };

  const fetchMoreData = () => {
    // 여기서 추가 데이터를 가져오는 비동기 작업을 수행합니다.
    // 이 예제에서는 간단하게 더미 데이터를 추가합니다.
    setTimeout(() => {
      const newItems = dtlList.slice(0, 10);
      console.log(`newItems ` + newItems);
      setItems([...items, ...newItems]);

      console.log(`items.length ` + items);
      // 만약 가져올 데이터가 더 없다면 hasMore를 false로 설정합니다.
      if (items.length >= 100) {
        setHasMore(false);
      }
    }, 1000);
  };

  return (
    // 상단 헤더 크기만큼 컨텐츠를 내려줌.
    <div className="container-pop">
      <Account item={acctDetail}></Account>
      {isOpen && (
        <Popup
          onClose={() => {
            setIsOpen(!isOpen);
          }}
          isOpen={isOpen}
          item={detailItem}
        ></Popup>
      )}
      {isOpen && <motion.div className="dimmed-background" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(!isOpen)} />}
      {/* <Card>
        <Card.CardContent> 
          {dtlList.map((item, index) => {
            return (
              // <Card.Detail>
              <CardItem key={index} item={item} />
              // </Card.Detail>
            );
          })}
        </Card.CardContent>

        <Card.Expand>
          <div>show more</div>
        </Card.Expand>

        <Card.Collapse>
          <div>show less</div>
        </Card.Collapse>
      </Card> */}
      <Card>
        <InfiniteScroll dataLength={items.length} next={fetchMoreData} hasMore={hasMore} loader={<h1>Loading...</h1>}>
          {items.map((item, index) => {
            return <CardItem onClick={() => onClickCardItem(item)} key={index} item={item} />;
          })}
        </InfiniteScroll>
      </Card>
    </div>
  );
}
