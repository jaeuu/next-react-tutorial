"use client";

import styles from "./inqury.module.css";
import React, { useState } from "react";
import MyInqury from "./components/myInqury";
import NewInqury from "./components/newInqury";

function Inquiry() {
    const [selectedIdx, setSelectedIdx] = useState(0);
    const items = [
        { text: "나의 문의 내역", name: "Content 1" },
        { text: "새 문의 작성", name: "Content 2" },
    ];

    const handleItemClick = (index: number) => {
        console.log(index);
        setSelectedIdx(index);
    };

    interface Item {
        name: string;
        text: string;
    }

    interface Items extends Array<Item> {}

    // { items: Items } = items 속성의 객체를 Items 자료형으로 받아온다.
    // { items } = 함수 안에서 items라는 이름으로 받은 객체를 사용한다.
    const Tabs = ({ items }: { items: Items }) => {
        return (
            <div className={styles.tabs}>
                {items.map((item, index) => (
                    <span
                        key={item.name}
                        className={` ${
                            selectedIdx === index
                                ? `${styles.tab_btnRed}`
                                : `${styles.tab_btn}`
                        }`}
                        onClick={() => handleItemClick(index)}>
                        {item.text}
                    </span>
                ))}
            </div>
        );
    };

    const BlowTab = () => {
        if (selectedIdx === 0) {
            return <MyInqury />;
        } else {
            return <NewInqury />;
        }
    };

    return (
        <div>
            <div className={styles.align_rt}>
                <div className={styles.inqury}>
                    <Tabs items={items} />
                    <BlowTab />
                </div>
            </div>
        </div>
    );
}

export default Inquiry;
